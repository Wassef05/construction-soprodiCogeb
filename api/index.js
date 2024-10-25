
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const postRouter = require('./routes/post.route'); 
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === 'local' ? 'http://localhost:5173' : '*',
    credentials: true,
}));

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));


app.use('/api/soprodi/posts', postRouter);
app.use('/api/soprodi/users', userRouter);
app.use('/api/soprodi/auth', authRouter);


app.use((err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ success: false, statusCode, message });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
