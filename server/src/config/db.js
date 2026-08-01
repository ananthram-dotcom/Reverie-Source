import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr) {
      console.warn('⚠️ MONGODB_URI not found in process.env. Database features will operate with fallback mock data.');
      return;
    }
    const conn = await mongoose.connect(connStr);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Don't crash server in local dev if DB isn't running yet
  }
};
