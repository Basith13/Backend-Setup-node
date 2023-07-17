//Models
const UserModel = require('../models/user');

//Users List
const getUsers = async (request, response) => {
    try {

    const data = await UserModel.find({});
        return response.status(200).send(data);
    } catch (e) {
        console.log(e);
        return response.status(500).send({error: true, message:'Internal server error!'});
    }
};

//Create User
const createUser = async (request, response) =>{
    const {name, email, mobileNo } = request.body
    try{
        const data = await UserModel.create({
            name, 
            email,
            mobileNo
        });
        await data.save();
        return response.status(200).send({ message: 'User Create Success!!!'});

    } catch(e){
        console.log(e);
        return response.status(500).send({error:true,message: 'Internal server error!!'});
    }
};

module.exports = {getUsers, createUser};
