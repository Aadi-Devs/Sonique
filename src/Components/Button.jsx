export default function Button({ text }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <button className="h-15 w-34 border-[0.5px] border-gray-300 rounded-4xl text-center cursor-pointer hover:border-black hover:scale-95 transition duration-700 ease-in-out">
          {text}
        </button>
      </div>
    </>
  );
}
