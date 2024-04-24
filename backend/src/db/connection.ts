import 'dotenv/config';
import { connect, disconnect } from 'mongoose';


async function connectToDB() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

async function disconnectFromDB() {
  try {
    await disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};


export { connectToDB, disconnectFromDB };
