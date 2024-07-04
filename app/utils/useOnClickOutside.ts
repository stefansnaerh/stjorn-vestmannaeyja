import { useEffect } from "react";

// Define the function with explicit types for `ref` and `handler`
export default function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    // Define the listener function with a parameter `event` typed correctly
    const listener = (event: MouseEvent | TouchEvent): void => {
      // Check if the event occurred within the first 100px of the document
      const yCoord =
        event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      if (yCoord < 100) {
        return;
      }

      // Check if the clicked area is outside the ref'd element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    // Set up the event listeners for mouse and touch events
    document.addEventListener("mouseup", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove event listeners
    return (): void => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Dependencies array
}

// export default function useOnClickOutside(
//   ref: React.RefObject<HTMLDivElement>,
//   handler: (event: MouseEvent | TouchEvent) => void
// ): void {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent): void => {
//       // Check if the clicked area is outside the ref'd element
//       if (!ref.current || ref.current.contains(event.target as Node)) {
//         return;
//       }
//       handler(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]);
// }
