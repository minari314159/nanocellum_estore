FROM node:20-alpine3.20

WORKDIR /backend

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 3000

# Use script specified in package,json
CMD ["npm", "start"]