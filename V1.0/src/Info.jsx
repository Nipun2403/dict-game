/* eslint-disable react/prop-types */
function Info({ word }) {
  // const padd = "p-4 my-2";

  return (
    // Parent Div
    <div className={`p-4 flex flex-col gap-12 items-start`}>
      {/* Title */}
      <div className="flex gap-8 items-center text-3xl">
        <p className={`px-4  underline underline-offset-4`}>Word : </p>
        <p>{word.title}</p>
      </div>
      {/* Other Info */}
      <div className="flex gap-8 items-center text-3xl">
        <p className={`px-4 underline underline-offset-4 text-3xl`}>
          Defination:
        </p>
        <p>{word.def}</p>
      </div>
    </div>
  );
}

export default Info;
