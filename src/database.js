const mongoose = require('mongoose');

const database = process.env.database;

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));