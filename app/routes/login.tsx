import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { login } from "~/services/api";
import { setCookieToken } from "~/utils/token";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const { token } = await login(username, password);
      setCookieToken(token);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Response && error.status < 500) {
        setErrorMessage("Identifiants invalides");
      } else {
        setErrorMessage("Serveur indisponible, réessayez plus tard");
      }
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nom d'utilisateur"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
}
