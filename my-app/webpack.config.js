const path =require("path");
const HtmlWebpackPlugin= require("html-webpack-plugin")
module.exports={
  entry:["./src/index"],
  output:{
    path:path.join(__dirname,"build"),
    filename:"bundle.js"
  },
  resolve:{extensions:[".js"]},
  plugins:{

  }

}