import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import norRouter from "./routes/norRoute.js";
import biltyRouter from "./routes/biltyRouter.js";
import quotRouter from "./routes/quotRouter.js";
import http from 'http'

import cookieParser from "cookie-parser";
dotenv.config();
import cors from 'cors';
// import socketIO from 'socket.io';
import { Server } from 'socket.io';
const app = express();

const server = http.createServer(app)

const io = new Server(server, {
  transports:['polling'],
  cors:{
    cors: {
      origin: "https://trps.netlify.app"
    }
  }
});

io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.on('message', (message) => {
    console.log(`message from ${socket.id} : ${message}`);
  })

  socket.on('disconnect', () => {
    console.log(`socket ${socket.id} disconnected`);
  })
})

export {io};

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    // console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// middleware
app.use(cors(
  {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
));

app.use('/public',express.static('public'))
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/consignor", norRouter);
app.use("/bilty", biltyRouter);
app.use("/quot", quotRouter);


app.use("/hotels", hotelsRouter);
app.use("/rooms", roomsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went Wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectdb();
    // app.listen(PORT, () => {
    //   console.log(`Server running on port ${PORT}`);
    // });
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
