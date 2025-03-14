//MongoDB password - Saumya@123

//We get a mongoDB url after creating cluster and deployment with help of which we can create connection between database and our server.

//It is used to create connection between database & server. We can interact with mongoDB database using mongoose
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //We provide uri. We cant keep the uri publically, otherwise anybody can access our database.
    //So we keep it in .env file.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Not connected");
    console.log(error);
  }
};

export default connectDB;
 