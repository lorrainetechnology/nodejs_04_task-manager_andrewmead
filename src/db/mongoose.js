const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: 'Mina',
//     email: 'test@mead.io',
//     password: 're32'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error)=> {
//     console.log('Error!', error)
// })



// const task = new Task({
//     description: 'Learn the Mongoose Library'
// })

// task.save().then(()=> {
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })

