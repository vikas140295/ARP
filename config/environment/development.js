// "use strict";;

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri:
      "mongodb+srv://Waleed:125Gamer@cluster0.5fj84.mongodb.net/green?retryWrites=true&w=majority",
    options: { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true , useFindAndModify:false}
  },

  seedDB: true
};
