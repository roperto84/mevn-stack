import mongoose from 'mongoose'

const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(`${URI}/default`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log('Mongo connected.'))
.catch(err => console.log(err));