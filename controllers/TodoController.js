const TodoModels = require('../models/TodoModels')
// Define how data store in database


module.exports.getToDo = async(req,res)=>{
    const todo=  await TodoModels.find()
    res.send(todo)
}

module.exports.saveToDO = async(req,res)=>{
   const {text} = req.body
   TodoModels
   .create({text})
   .then((data)=>{
    console.log("Added succesfully.........");
    console.log(data)
    res.send(data)

   })
}


module.exports.updatedTodo=(req,res)=>{
    const{_id,text} = req.body
    TodoModels
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("updated successfully"))
    .catch((err)=>console.log(err)
    )
}

module.exports.deleteTodo=(req,res)=>{
    const {_id} = req.body
    TodoModels
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>console.log(err)
    )

}