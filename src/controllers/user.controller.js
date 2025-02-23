import User from "../model/User.js"

export const createUser = async (req, res)=> {
   try{
        const user = new User(req.body)
        console.log(user)
        await user.save()
        return res.json({message:"User Created"}) 
   }catch(error){
        return res.json({message:error.message})
   }
}

export const updateUser = async (req, res)=>{
    try{
        const {id} = await req.params
        await User.updateOne({_id:id}, req.body)
        return res.json({message: "User Updated"})
    }catch(error){
        return res.json({message: error.message})
    }
}

export const deleteUser = async (req, res)=>{
    try{
        const {id} = await req.params
        await User.deleteOne({_id:id})
        return res.json({message: "User Deleted"})
    }catch(error){
        return res.json({message: error.message})
    }
}

export const listUsers = async (req, res)=>{
    try{
        const users= await User.find().lean()
        res.json({users:users})
    }catch(error){
        return res.json({message: error.message})
    }
}

export const listUser = async (req, res)=>{
    try{
        const {ci} = await req.body
        const users= await User.findOne({ci:ci}).lean()
        console.log(users)
        res.json({users:users})
    }catch(error){
        return res.json({message: error.message})
    }
}