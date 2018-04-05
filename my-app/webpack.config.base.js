const path =require("path");
module.exports={
  entry:["./src/index"],
  output:{
    path:path.join(__dirname,"build"),
    filename:"bundle.js"
  },
  resolve:{extensions:[".js"]}

}