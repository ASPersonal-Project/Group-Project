const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');

//connect database
connectDB();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/profile', profileRouter);
app.use('/api/v1/post', postRouter );
app.use('/api/v1/comment',commentRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server is Started port${PORT}`))
