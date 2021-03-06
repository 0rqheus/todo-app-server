const dotenv = require('dotenv');
const express = require("express");
const cors = require("cors");
const tasks = require("./routes/tasks");
const connection = require("./db");

dotenv.config();

connection();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/tasks", tasks);

app.get('/', (req, res) => {
  res.send('Hello!');
})

// app.get('/mongodb', (req, res) => {
//   res.send(process.env.MONGODB_HOST)
// })

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
