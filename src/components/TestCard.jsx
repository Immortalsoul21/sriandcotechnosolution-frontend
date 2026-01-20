export default function TestCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 rounded-xl shadow-lg bg-white text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Setup Successful 🚀
        </h1>
        <p className="mt-2 text-gray-600">
          React + JSX + Tailwind are working correctly
        </p>
        <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Test Button
        </button>
      </div>
    </div>
  );
}
