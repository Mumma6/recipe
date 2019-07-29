import { useState } from "react";
function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  // Return pice of state AND a function to toggle it
  return [state, toggle];
}
export default useToggle;
