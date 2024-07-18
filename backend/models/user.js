const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		default: "User",
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	imageURL: {
		type: String,
		default:
			"https://filestore.community.support.microsoft.com/api/images/0ce956b2-9787-4756-a580-299568810730?upload=true",
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: "user",
	},
});

//statuc signup method
userSchema.statics.signup = async function (email, password) {
	// validation
	if (!email || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email not valid");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error("Password not strong enough");
	}
	//check if user exists
	const emailExists = await this.findOne({ email });
	if (emailExists) {
		throw Error("Email already exists");
	}
	//hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	//create user
	const user = await this.create({
		email,
		password: hashedPassword,
	});
	//save user
	return user;
};

userSchema.statics.login = async function (email, password) {
	//validation
	if (!email || !password) {
		throw new Error("Please provide email and password");
	}
	//check if user email exists
	const user = await this.findOne({ email });
	if (!user) {
		throw new Error("Invalid email");
	}

	//compare password
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw new Error("Invalid password");
	}
	return user;
};
module.exports = mongoose.model("User", userSchema);
