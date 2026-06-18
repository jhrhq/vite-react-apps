import { JWTProvider as AuthProvider } from "@/contexts/JWTContext";
import router from "@/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
