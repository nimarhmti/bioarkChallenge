import { useEffect, useRef } from "react";
type input = () => void;
export const useClickOutside = (handler: input) => {
  let domNode = useRef<any>();

  useEffect(() => {
    let maybeHandler = (event: any) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
