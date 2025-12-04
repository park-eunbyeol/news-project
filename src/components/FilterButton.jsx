export default function FilterButton({ active, label, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`
        rounded-full px-4 py-2 text-sm font-semibold transition
        ${
          active
            ? "bg-slate-800 text-white shadow-md"
            : "bg-gray-200 text-gray-700"
        }
      `}
    >
      {label}
    </button>
  );
}
