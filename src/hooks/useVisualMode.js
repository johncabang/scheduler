import { useState } from "react";

export default function useVisualMode(initialMode) {
  // take in an initial mode
  // set the mode state with the initial mode provided
  const [mode, setMode] = useState(initialMode);
  // return an object with a mode property
  return { mode };
}
