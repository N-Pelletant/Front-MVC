import { useEffect, useState } from "react";

const useObservedState = (controller) => {
  const [state, setState] = useState(controller.state);

  useEffect(() => {
    const stateChangeHandler = (newState) => {
      setState(newState);
    };

    controller.subscribeStateChanged(stateChangeHandler);

    return () => {
      controller.unsubscribeStateChanged(stateChangeHandler);
    };
  }, [controller]);

  return state;
};

export default useObservedState;
