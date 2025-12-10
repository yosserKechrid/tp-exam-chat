const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

// GET
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// POST
app.post("/api/messages", (req, res) => {
  const { author, content } = req.body;
  if (!author || !content) return res.status(400).json({error:"invalid"});
  const time = new Date().toLocaleTimeString();
  messages.push({ author, content, time });
  res.status(201).json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Backend running on", PORT));
