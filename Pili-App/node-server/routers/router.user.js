const express = require('express')
const User = require('../models/User.model')
const router = new express.Router()
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


router.get("/users", async (req, res) => {
    //console.log("Ey bro, qué tal")
    try {
        const users = await User.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/users/:username', async (req, res) => {
    const _username = req.params.username
    try {
        const user = await User.findOne({ username: _username });
        if (!user) {
            return res.status(404).send("This user does not exist.");
        }
        res.json(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

/* router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.send(user);
    } catch (e){
        res.status(400).send()
    }
}) */

router.post('/login', async (req, res) => {
    let body = req.body
    //console.log(body)
    try {
        const user = await User.findByCredentials(body.email);
        console.log (user)
        
        if(!user){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Usuario no válido'
                }
            })
        }
        //pendiente para realizar encriptación de contraseñas

        /* if(!bcrypt.compareSync(body.password,user.password)){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Clave no válida'
                }
            })
        } */

        if (body.password !== user.password){
            return res.status(400).send({
                ok: false,
                err:{
                    message: 'Clave no válida'
                }
            })
        }
        // en principio no devolvemos la contraseña
        user.password = undefined

        let token = jwt.sign({
            usuariobd:user
        },'secret',{expiresIn:'24h'})

        res.json({
            ok:true,
            usuariobd:user,
            token
        })

    } catch (e){
        res.status(400).send()
    }
})

router.post("/users", async (req, res) => {
    const user = new User(req.body);
    try {
        const sameEmailUser = await User.findOne({email: user.email});
        const sameNameUser = await User.findOne({username: user.username});
        if (sameNameUser){
            return res.status(400).send("This user name is already registered, choose another one.");
        }
        if (sameEmailUser){
            return res.status(400).send("This email is already in use. Choose another one or login.");
        }
        await user.save();
        res.status(201).send(user);
        //.then(() => {res.status(201).send(user)}).catch(e => res.status(400).send(e));
    } catch (e) {
        res.status(500).send(e);
    }
});
//metodo en reparacion
/* router.patch('/users/:username', async (req,res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'password', 'terminals'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation){
        return res.status(400).send({ error: 'Invalid fields to update!' })
    }
    try {
        const user = await User.findOne({ username: _username });

        if (!user) {
            return res.status(404).send("This user does not exist.")
        }
        userid = user.id;
        console.log("Error1")
        const userUpdated = await User.findByIdAndUpdate(userid, req.body, { new: true, runValidators: true })
        console.log("Error2")
        if (!userUpdated){
            return res.status(404).send("User have not been updated.")
        }
        res.send(user)
    } catch (e) {
        res.status(400).send({ error: 'There was an error' })
    }
}) */

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['username', 'password', 'email', 'terminals']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router;