import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

export const mongooseConnect = () => {
const dbToken = process.env.DB_TOKEN

if(!dbToken) {
    throw new Error('Token is undefined')
}

mongoose.connect(dbToken)


}