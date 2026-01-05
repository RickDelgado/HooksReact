import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TasksApp } from "./05-useReducer/TaskApp";
// import FocusScreen from "./useRef/FocusScreen";
// import PokemonPage from "./03-examples/PokemonPage";
// import { TrafficLightWithEffect } from "./02-useEffect.tsx/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect.tsx/TrafficLightWithHook";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    <TasksApp />
  </StrictMode>
);
