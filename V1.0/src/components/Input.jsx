/* eslint-disable react/prop-types */
function Input({ tag, setTag, getGif, word, tensor }) {
  const all = () => {
    getGif();
    word();
    tensor();
  };
  const gap = "mx-2";

  return (
    <div className="mb-12">
      <div className="mb-12 mx-auto">
        <input
          className="mr-12 px-4 rounded-lg"
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          placeholder="Enter word..."
        ></input>
        <button
          className={`${gap}`}
          onClick={getGif}
        >
          Giphy
        </button>
        <button
          className={`${gap}`}
          onClick={word}
        >
          definition
        </button>
        <button
          className={`${gap}`}
          onClick={tensor}
        >
          Tensor
        </button>
        <button
          className={`bg-gray-400 text-black ${gap}`}
          onClick={all}
        >
          All
        </button>
      </div>
    </div>
  );
}

export default Input;
