const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file,cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        // if(!file.originalname.match(/\.(doc|docx)$/)) {
        //     return cb(new Error('Please upload a Word document'))
        // }
        // cb(new Error('File must be a PDF'))
        cb(undefined, true)
        // cb(undefined, false)
    }
})

app.post('/upload', upload.single('upload'), (req,res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message})
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})

const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('16-digit')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('16-digit')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()