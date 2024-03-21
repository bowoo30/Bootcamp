const jwt = require('jsonwebtoken')

const refreshToken = (id)=>{
    return jwt.sign({
        id
    }, 
    process.env.REFRESH_TOKEN,
        {
            expiresIn: "1d"
        })
}

module.exports = {refreshToken}