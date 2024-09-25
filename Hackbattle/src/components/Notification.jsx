import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Notification({
  message,
  show,
  closeNotification,
  color,
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, closeNotification]);

  if (!show) return null;

  return (
    <div
      className="w-full  fixed top-1 z-50 right-5  text-white px-4 py-2 rounded shadow-lg"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between">
        <div></div>
        <p>{message}</p>
        <button
          onClick={closeNotification}
          className="ml-4 text-sm text-white font-bold"
        >
          <IoCloseSharp className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
}
