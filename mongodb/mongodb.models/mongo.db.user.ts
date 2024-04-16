
import { mongooseConnect } from "../mongodb.connect";
import mongoose from "mongoose";

interface IUser {
    name: string,
    email: string,
    senha: string,
    endereco: string
}

const userSchema = new mongoose.Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    endereco: {type: String, required: true},
})


export const UserModel = mongoose.model<IUser>('User', userSchema)

mongooseConnect()








