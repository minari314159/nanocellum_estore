const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

const orderRoutes = require("./routes/orders");
const cartRoutes = require("./routes/cart");

// Create express app
const app = express();

//cors options
const corsOptions = {
	origin: ["http://localhost:5173", "https://nanocellum-store.vercel.app"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true,
	optionSuccessStatus: 200,
};
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

//routes
app.get("/", (req, res) => {
	res.send("API Root");
});

//import routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);

// Start the server
const port = process.env.PORT || 3000;

//connect to mongodb
mongoose
	.connect(process.env.MONGO_URI)
	.then((result) => {
		console.log("connected to db");
		//listen to a port to start the server and listen to requests
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
