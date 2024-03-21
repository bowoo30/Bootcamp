const jwt = require('jsonwebtoken');

const accessToken = (id)=>{
    return jwt.sign({
        id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '10s'
    })
}

module.exports = {accessToken}