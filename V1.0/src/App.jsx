import { useState } from "react";
import "./App.css";
import axios from "axios";
import Input from "./components/Input";
import Info from "./Info";

function App() {
  // Defining States
  const [gifUrl, setGifUrl] = useState("");
  const [tensor, setTensor] = useState("");
  const [tag, setTag] = useState("");
  const [wordInfo, setWordInfo] = useState({
    title: "",
    def: [],
    etymology: "",
  });

  // Function to fetch info regarding the word from API
  const getWordInfo = () => {
    axios
      .get(
        `https://dictionaryapi.com/api/v3/references/collegiate/json/${tag}?key=7ec72d1b-15eb-49f8-a1ab-f2e9dae866db`
      )
      .then((response) => {
        // const et = response.data[0].et[0][1].replaceAll("{it}", "");
        const def = response.data[0].shortdef;

        setWordInfo({
          title: tag,
          def: def,
          // etymology: et.replaceAll("{/it}", ""),
        });
        // for debug use
        // console.log(response);
        // console.log(et);n
      });
  };

  // Get gif from tensor
  const getTensor = () => {
    axios
      .get(
        `https://tenor.googleapis.com/v2/search?q=${tag}&key=AIzaSyA2MilSxLDgJ5Jy9VnTRSAxCqAT9OUcaWo&client_key=my_test_app&limit=2&country=IN&media_filter=gif&random=${"false"}`
      )
      .then((response) => {
        setTensor(response.data.results[0].media_formats.gif.url);
        // For debug
        // console.log(response);
        // console.log(response.data.results[0].media_formats.gif.url);
      });
  };

  // Function to fetch gifs from API
  const getGif = () => {
    // getWordInfo();
    axios
      .get(
        `https://api.giphy.com/v1/gifs/translate?api_key=KJWZs3uxyNvNEkW4OjPJePoYy529VfJT&s=${tag}`
      )
      .then((response) => {
        setGifUrl(`${response.data.data.images.original.url}`);
        // for debug useage
        // console.log(response.data.data);
      });
  };

  return (
    <div>
      <div className="">
        <Input
          tag={tag}
          setTag={setTag}
          getGif={getGif}
          word={getWordInfo}
          tensor={getTensor}
        />
      </div>

      <div>
        <Info word={wordInfo} />
        <div className="flex gap-16 my-8">
          <h1>Using Giphy : </h1>
          <img src={gifUrl} />
        </div>
        <div className="flex gap-16">
          <h1>Using Tenor : </h1>
          <img src={tensor} />
        </div>
      </div>
    </div>
  );
}
export default App;

