const express = require("express");
const router = express.Router();
let polls = require("../data/polls");
const protectRoute = require("../middleware/authMiddleware");

router.get("/",(req,res)=>{
    res.json(polls);
});

router.get("/:id",(req,res)=>{
const poll = polls.find(p=>{
    parseInt(req.params.id)
})
})

router.post("/:id/vote",(req,res)=>{
    res.status(404).json({message:"Poll not Found"});
})

router.post("/",(req,res)=>{
    res.status(201).json({message: "poll complete"})
})


module.exports = router;