import  { Application, query } from 'express'
import { UserModel } from '../../mongodb/mongodb.models/mongo.db.user'
import validator from 'validator'


export async function  createNewUser(app: Application){
    app.post('/create-user',
    
    async (req, res) =>{



        const {name, email, senha, endereco} = req.body

        if(!validator.isEmail(email)) throw new Error('Email invalido');
        if(!validator.isLength(senha,{min: 6, max: 8}))throw new Error('A senha deve conter entre 6 a 8 caracteres')
        if(typeof name !== 'string') throw new Error('Nome invalido')   

        const saveUserModel = new UserModel({
            name,
            email,
            senha,
            endereco
        })
        await saveUserModel.save()

        return res.status(200).send({
            name: saveUserModel.name
        })
    })


}



