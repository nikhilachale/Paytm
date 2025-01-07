const zod= require('zod');

const user = zod.object({
    username: zod.string(),
    fname: zod.string(),
    lname: zod.string(),
    password: zod.string(),

})

module.exports = {user}; 