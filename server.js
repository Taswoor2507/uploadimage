import app from "./app.js";
import EnvironmentVariables from "./constants.js";
import connectDB from "./config/db.js";
const {PORT} = EnvironmentVariables

connectDB().then(() => {
    app.listen(PORT , (err)=>{
        if(err){
            console.log("Error to connecting to server " ,  err);
        }else{
            console.log(`Server is running on port http://localhost:${PORT}}`);
        }
    })
        
}).catch((error) => {
    console.log("DB connection failed!!!!!" , error);
    process.exit(1);
})



