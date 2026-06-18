import { ToastBar, Toaster, toast } from "react-hot-toast";
import { LuX } from "react-icons/lu";

const CustomHotToast = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{ bottom: 20 }}
      toastOptions={{
        // Define default options
        className: "",
        // duration: 3000,
        /*  style: {
              background: "#363636",
              color: "#fff",
            }, */

        // Default options for specific types
        success: {
          duration: 3000,
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <div className="flex items-center justify-center border-l border-gray-200">
                  <button
                    className="flex w-full items-center justify-center border border-transparent p-1  hover:text-error  focus:outline-hidden "
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <LuX className="size-4 stroke-1" />
                  </button>
                </div>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default CustomHotToast;
