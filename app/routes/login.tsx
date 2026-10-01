import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { login } from "~/services/api";
import { setCookieToken } from "~/utils/token";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    try {
      const { token } = await login(username, password);
      setCookieToken(token);
      navigate("/dashboard");
    } catch {
      setError(true);
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
      {error && <p>Identifiants invalides</p>}
      <button type="submit">Se connecter</button>
    </form>
  );
}
