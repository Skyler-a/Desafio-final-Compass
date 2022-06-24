const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      `mongodb+srv://Compass:Compass134@desafio-final.ovbf0hj.mongodb.net/?retryWrites=true&w=majority`
    );
  }
}
module.exports = new Database().connect();
