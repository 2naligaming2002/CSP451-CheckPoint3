const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from CSP451" });
});
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'he althy',
    uptime: process. up time
  });
});

module.exports = app;

// Allow running locally: `npm start`
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
}
