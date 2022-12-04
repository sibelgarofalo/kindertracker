const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
mongoose.Promise = global.Promise;

const env = require('../env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://kindertracker-cosmos-db:hlcVq1hmbegTLGA1cBcuip8Tsojx8SZkF4RW1It38YmDR3rxZSekPwfrXjTuWuLNFfD4NPVyCkAVACDbrKq7fw==@kindertracker-cosmos-db.mongo.cosmos.azure.com:10255/kinder-tracker-db?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@kindertracker-cosmos-db@`;

function connect() {
    
    return mongoose.connect(mongoUri, { useNewUrlParser: true});
}

module.exports = {
    connect,
    mongoose
};