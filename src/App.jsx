import { JWTProvider as AuthProvider } from "@/contexts/JWTContext";

function App() {
  return (
    <AuthProvider>
      <h1 className="text-9xl">Auth Provider</h1>
    </AuthProvider>
  );
}

export default App;
