require('../src/db/mongoose.js')
const User = require('../src/models/user')

User.findByIdAndUpdate('16-digit',{age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id)
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('16-digit', 2)then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})