/* eslint-disable react/prop-types */
function Input({ tag, setTag, getGif, word, tensor }) {
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
          className=""
          onClick={getGif}
        >
          Giphy
        </button>
        <button onClick={word}>definition</button>
        <button onClick={tensor}>Tensor</button>
      </div>
    </div>
  );
}

export default Input;
