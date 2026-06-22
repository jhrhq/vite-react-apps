import { JWTProvider as AuthProvider } from "@quizzes/contexts/JWTContext";
import QuizzesRouter from "@quizzes/routes";

function App() {
  return (
    <AuthProvider>
      <QuizzesRouter />
    </AuthProvider>
  );
}

export default App;
