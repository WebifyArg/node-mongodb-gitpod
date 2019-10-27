const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webify:webify@cluster0-2g3nl.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));