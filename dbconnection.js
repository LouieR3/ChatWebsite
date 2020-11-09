const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const  url  =  "mongodb+srv://louie:louie123@firstcluster.oypqi.mongodb.net/tcsdb?retryWrites=true&w=majority";
const  connect  =  mongoose.connect(url, { useNewUrlParser: true  });
module.exports  =  connect;