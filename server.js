const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello GET on homepage");
  console.log("received a get request for the homepage");
});

app.post("/", (req, res) => {
  res.send("hello POST on homepage");
  console.log("received a post request for the homepage");
});

app.delete("/del_user", (req, res) => {
  res.send("hello DELETE on /del_user");
  console.log("received a delete request for the /del_user");
});

app.get("/list_user", (req, res) => {
  res.send("hello GET on /list_user");
  console.log("received a get request for the /list_user");
})

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(server.address());
  console.log("server listening at http://%s:%s", host, port);
});
