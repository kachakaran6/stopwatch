import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-md w-full flex flex-col items-center justify-center py-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold pb-4 text-blue-600">Stopwatch</h1>
        <div className="text-4xl font-semibold py-4 text-gray-800">
          <span className="text-blue-600">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="text-blue-600">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :
          </span>
          <span className="text-blue-600">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>

        <div className="flex flex-row gap-4 justify-center mt-4">
          {running ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              onClick={() => {
                setRunning(false);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              onClick={() => {
                setRunning(true);
              }}
            >
              Start
            </button>
          )}

          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
