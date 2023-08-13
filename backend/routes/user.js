const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

const JWT_SECRET = "osjksdljgks";

const router = express.Router();

// Create a User using : POST . No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });          //finds if email already exists or not
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist",
            })
        }
        const salt = await bcrypt.genSalt(10);                                     //Salt generated
        const secPass = await bcrypt.hash(password, salt);                           // password hashed
        user = await User.create({ name, email, password: secPass });
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = JWT.sign(data, JWT_SECRET);
        res.json({success:true, authtoken })
    } catch (error) {
        res.status(500).send('some error occured');
    }
})

router.post('/login', [
    body('email', 'Login with correct credetials').isEmail(),
    body('password', 'Login with correct credetials').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Login with correct credetials",
            })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({
                success: false,
                message: "Login with correct credetials",
            })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = JWT.sign(data, JWT_SECRET);
        res.json({success : true, authtoken })
    } catch (error) {
        res.status(500).send('some error occured');
    }
})

router.post('/getuser',fetchuser,async(req,res)=>{
    try{
userId = req.user.id;
const user = await User.findById(userId).select("-password")
res.send(user)
    }catch(error){
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;