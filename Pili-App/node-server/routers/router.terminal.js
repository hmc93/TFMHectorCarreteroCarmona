const express = require('express')
const Terminal = require('../models/Terminal.model')
const User = require('../models/User.model')
const router = new express.Router()

/* const app = express(); */

router.get("/terminals", async (req, res) => {
    try {
        const terminals = await Terminal.find();
        res.status(200).json(terminals);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/terminals", async (req, res) => {
    const terminal = new Terminal(req.body);
    try {
        const sameSerialTerminal = await Terminal.findOne({ serNum: terminal.serNum });
        const userExists = await User.findOne({ username: terminal.username });
        if (sameSerialTerminal) {
            return res.status(400).send("This terminal serial number is already registered, choose another one.");
        }
        if (!userExists) {
            return res.status(400).send("This user is not registered. Please register it before registering the terminal.");
        }
        await terminal.save();
        userExists.terminals.push(terminal.serNum);
        const userCheck =  await User.findByIdAndUpdate(userExists.id, userExists, {new: true, runValidators: true});
        if (!userCheck){
            res.status(404).send("User info was not correctly updated.")
        }
        res.status(201).send(terminal);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch('/terminals/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['pacientFirstName', 'pacientLastName', 'pacientAge', 'pacientHeight', 'pacientGender', 'calendar']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const terminal = await Terminal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!terminal) {
            return res.status(404).send()
        }

        res.send(terminal)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/terminals/:id', async (req, res) => {
    try {
        const terminal = await Terminal.findByIdAndDelete(req.params.id)
        if (!terminal) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); */

  router.post('/setIntakes', async (req, res) => {
    try {
        const terminal = await Terminal.setIntakes(req.body.serNum, req.body.data);
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(terminal);
        console.log(terminal)
    } catch (e){
        res.status(400).send(e)
    }
})

router.post('/getIntakes', async (req, res) => {
    try {
        const terminal = await Terminal.getIntakes(req.body.serNum);
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(terminal);
    } catch (e){
        res.status(400).send(e)
    }
})

module.exports = router