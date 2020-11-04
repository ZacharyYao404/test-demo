const path=require("path");
const resolve=dir=>path.resolce(__dirname,dir);


module.exports={
    webpack:{
        alias:{
            "@":resolve("src"),
            "components":resolve("src/components")
        }
    }
}