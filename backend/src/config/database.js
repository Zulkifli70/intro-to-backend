import mongoose from "mongoose";

const connection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(`\n Connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connection;
