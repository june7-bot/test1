const { User } = require('../models/User');
 
let auth = (req, res, next) => {
//인증 관련 
// 1.클라이언트 쿠키에서 토큰 갖고옴
console.log(req.cookies.x_auth);
let token = req.cookies.x_auth;

//2.토큰을 복호화 해서 어떤 유저인지 식별
User.findByToken(token, (err, user)=>{
    if(err) throw err;
    if(!user) return res.json({ isAuth: false, error: true})

    req.token = token;
    req.user = user;
    next();
})


}

module.exports = { auth };