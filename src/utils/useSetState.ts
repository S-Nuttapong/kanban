import { useState, useEffect } from "react";

export const useSetState = <T>(parentState: T) => {
  const [initState, setInitState] = useState<T>();
  useEffect(() => {
    setInitState(parentState);
  }, [parentState]);
  return { initState, setInitState };
};
