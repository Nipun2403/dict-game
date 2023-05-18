import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [gif, setGif] = useState("");

  const [tag, setTag] = useState("");

  const getGif = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/translate?api_key=KJWZs3uxyNvNEkW4OjPJePoYy529VfJT&s=${tag}`
      )
      .then((response) => {
        setGif(`${response.data.data.images.original.url}`);
        console.log(response.data.data);
      });
  };
  return (
    <div className="">
      <div className="mb-12 mx-auto">
        <input
          className="mr-12 px-4 rounded-lg"
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          placeholder="Enter word..."
        ></input>
        <button
          className=""
          onClick={getGif}
        >
          Search
        </button>

        {/* <p>{tag}</p> */}
      </div>
      <div>
        <img src={gif} />
      </div>
    </div>
  );
}
export default App;

