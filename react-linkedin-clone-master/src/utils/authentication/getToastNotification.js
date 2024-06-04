import { toast } from "react-toastify";

export const getSuccessToast = (message) =>
  toast.success(message, { autoClose: 2000 });

export const getErrorToast = (message) =>
  toast.error(message, { autoClose: 2000 });

export const getInfoToast = (message) => {
  return toast.info(message, { autoClose: 2000 });
};

export const getWarningToast = (message) =>
  toast.warn(message, { autoClose: 2000 });
