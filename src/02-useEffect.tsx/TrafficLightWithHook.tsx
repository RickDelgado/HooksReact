import useTrafficLight from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const { countdown, percetage, greenLight, yellowLight, redLight } =
    useTrafficLight("red");
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl font-bold">
          Semaforo con use Effect
        </h1>
        <h2 className="text-white text-xl">{countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            style={{ width: `${percetage}%` }}
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
          ></div>
        </div>
        <div
          className={`w-32 h-32 ${redLight} rounded-full border-4 border-gray-700`}
        ></div>
        <div
          className={`w-32 h-32 ${yellowLight} rounded-full border-4 border-gray-700`}
        ></div>
        <div
          className={`w-32 h-32 ${greenLight} rounded-full border-4 border-gray-700`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
      </div>
    </div>
  );
};
