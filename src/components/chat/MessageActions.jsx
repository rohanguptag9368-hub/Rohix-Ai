import {
  FiCopy,
  FiThumbsUp,
  FiThumbsDown,
} from "react-icons/fi";

export default function MessageActions({
  text,
  onCopy,
}) {
  return (
    <div className="mt-4 flex items-center gap-3 text-gray-400">

      <button
        onClick={() => onCopy(text)}
        className="transition hover:text-cyan-400"
      >
        <FiCopy />
      </button>

      <button className="transition hover:text-cyan-400">
        <FiThumbsUp />
      </button>

      <button className="transition hover:text-cyan-400">
        <FiThumbsDown />
      </button>

    </div>
  );
}