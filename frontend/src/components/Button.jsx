export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-full text-white font-semibold bg-pink-500 hover:bg-pink-600 transition"
    >
      {text}
    </button>
  );
}
