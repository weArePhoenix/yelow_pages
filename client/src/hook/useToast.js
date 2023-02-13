import { toast } from "react-toastify";

export function showSucessToast(res, msg = "Operation is sucessfull") {
    const message = res.data.message || msg;
    return toast.success(message);
}

export function showFailureToast(error, msg = "Operation is not sucessfull") {
    const message = error.message;
    return toast.error(message);
}

export function updateLoadingSucessToast(
    toastId,
    res,
    msg = "Operation is sucessfull"
) {
    const message = res.data.message || msg;
    return toast.update(toastId.current, {
        render: message,
        type: "success",
        isLoading: false,
    });
}
export function updateLoadingFailureToast(
    toastId,
    error,
    msg = "Operation is not sucessfull"
) {
    const message = error.message;
    return toast.update(toastId.current, {
        render: message,
        type: "error",
        isLoading: false,
    });
}
