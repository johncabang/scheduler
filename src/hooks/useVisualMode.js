import { useState } from "react";

export default function useVisualMode(initialMode) {
  // take in an initial mode
  // set the mode state with the initial mode provided
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    }
    setMode(newMode);
  }

  function back() {
    console.log("this is history.length ----- " + history.length);
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory((prev) => [...prev.slice(0, history.length - 1)]);
    }
  }

  // return an object with a mode property, transition property, back property
  return { mode, transition, back };
}
