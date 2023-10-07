import mongoose from "mongoose";




const DBConnection = async()=>{
    // const USERNAME = process.env.DBUSERNAME;
    // const PASSWORD = process.env.DBPASSWORD;

    // const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.plcazql.mongodb.net/?retryWrites=true&w=majority`;
    const MONGO_URI = "mongodb+srv://cooper108k:nuVbqpiPi5CuG.2@cluster0.plcazql.mongodb.net/?retryWrites=true&w=majority"
    
    try{
        console.log("here connection got unwired!!!!!!")
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser : true,
            useUniFiedTopology:true,
        })
        console.log("Database connected successfully")

    }catch(error){
        console.error("Erro while connecting with the database", error.message);
    }
}

export default DBConnection;