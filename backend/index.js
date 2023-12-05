import express from "express";

const app = express();

const port = process.env.port || 3000;
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      desc: "this is joke num 1",
    },
    {
      id: 2,
      title: "Joke 2",
      desc: "this is joke num 2",
    },
    {
      id: 3,
      title: "Joke 3",
      desc: "this is joke num 3",
    },
    {
      id: 4,
      title: "Joke 4",
      desc: "this is joke num 4",
    },
    {
      id: 5,
      title: "Joke 5",
      desc: "this is joke num 5",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`serve at port ${port}`);
});
