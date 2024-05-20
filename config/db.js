import mongoose  from "mongoose";
import EnvironmentVariables from "../constants.js";
const {MONGOOSE_URI ,  DB_NAME} =  EnvironmentVariables


const connectDB = async()=>{
    try {
        
       const connectionInstance =  await mongoose.connect(`${MONGOOSE_URI}/{${DB_NAME}}`)
       console.log(`Database connect on host < ${connectionInstance.connection.host}  >  & PORT is < ${connectionInstance.connection.port}  >`);

    } catch (error) {
        console.log(`Databse connection filed due to -->  ${error}`);
    }
}

export default connectDB;