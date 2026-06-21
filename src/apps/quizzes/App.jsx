import { JWTProvider as AuthProvider } from "@quizzes/contexts/JWTContext";
import router from "@quizzes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
