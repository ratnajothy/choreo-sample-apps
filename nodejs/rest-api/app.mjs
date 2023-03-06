import express from "express";
import cache from "./cache.mjs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("assets"));

app.get("/web", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return res.sendFile(__dirname + "/web.html");
});

app.use((err, _req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500);
  res.json({ error: err.message });
});

// app.use("*", (_, res) => {
//   return res
//     .status(404)
//     .json({ error: "the requested resource does not exist on this server" });
// });

export default app;
