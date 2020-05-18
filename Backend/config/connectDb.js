const mongoose = require('mongoose');

const connectDB =async () => {
    try {
        await mongoose.connect('mongodb+srv://user:user@cluster0-m8jlg.mongodb.net/test?retryWrites=true&w=majority',{
            useNewUrlParser: true ,
            useUnifiedTopology: true.message,
            useFindAndModify:false
        });
        console.log('Database connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;