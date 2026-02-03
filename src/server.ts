import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/brain", async (req, res) => {
  const input = req.body.input || "sin input";
  res.json({ message: `Cerebro funcionando: ${input}` });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Brain running on port ${PORT}`);
});
