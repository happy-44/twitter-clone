const mongoose = require("mongoose");


class Database {

    constructor() {
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://twitterClone:twitter123@twitterclonecluster.q1daw0h.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("databse conncection successful");
        })
        .catch((err)=>{
            console.log("databse conncection error "+err);
        })
    }
}

module.exports = new Database();