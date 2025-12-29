import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

const useTrafficLight = (initialColor: TrafficLightColor) => {
  const [light, setLight] = useState<TrafficLightColor>(initialColor);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.log(`La luz actual es: ${light}`);
  }, [light]);

  useEffect(() => {
    if (countdown === 0) return;
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  //   Change light color effect
  useEffect(() => {
    if (countdown > 0) return;
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");

    setCountdown(5);
  }, [countdown, light]);

  return {
    // Props

    countdown,
    // Methods
    percetage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
  };
};

export default useTrafficLight;
