const jwt = require("jsonwebtoken");

// function to create token
exports.createToken =(user)=>{
    const token = jwt.sign({user}, "YoYohoneyShing",{expiresIn:'1d'})
    return token
}

//fucntioon to verify token
exports.verifyToken =(token)=>{
    try {
        const decoded = jwt.verify(token, "YoYohoneyShing");
        return decoded;
    } catch (error) {
        return null;
    }
}