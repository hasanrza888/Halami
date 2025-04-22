import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000} // Closes after 3 seconds
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

// Notification functions
export const notifySuccess = (message) => toast.success(message);
export const notifyError = (message) => toast.error(message);

export default Notification;
