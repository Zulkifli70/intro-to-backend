import mongoose from "mongoose";

const connection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(`\n MongoDB Connected!!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connection;
