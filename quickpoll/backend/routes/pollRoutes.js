const express = require("express");
const router = express.Router();
let polls = require("../data/polls");
const protectRoute = require("../middleware/authMiddleware");

// GET all polls
router.get("/", (req, res) => {
  res.json(polls);
});

// GET single poll
router.get("/:id", (req, res) => {
  const poll = polls.find(p => p.id === parseInt(req.params.id));
  if (!poll) return res.status(404).json({ message: "Poll not found" });
  res.json(poll);
});

// POST vote
router.post("/:id/vote", (req, res) => {
  const poll = polls.find(p => p.id === parseInt(req.params.id));
  if (!poll) return res.status(404).json({ message: "Poll not found" });

  const { option } = req.body;
  const selected = poll.options.find(o => o.text === option);
  if (!selected) return res.status(400).json({ message: "Invalid option" });

  selected.votes++;
  res.json(poll);
});

// POST new poll (protected)
router.post("/", protectRoute, (req, res) => {
  const { question, options } = req.body;
  if (!question || !options || options.length < 2) {
    return res.status(400).json({ message: "Invalid poll data" });
  }
  const newPoll = {
    id: polls.length + 1,
    question,
    options: options.map(opt => ({ text: opt, votes: 0 }))
  };
  polls.push(newPoll);
  res.status(201).json(newPoll);
});

module.exports = router;