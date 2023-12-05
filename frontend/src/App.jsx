import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h3>Jokes that are fetched from backend.....</h3>
      <p>jokes: {jokes.length}</p>

      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <p>{joke.desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
