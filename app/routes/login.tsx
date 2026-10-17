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
    <main className="flex min-h-screen">
      <div className="w-[632px] shrink-0 px-[100px] pt-12">
        <img src="/logo.svg" alt="SportSee" />

        <form
          onSubmit={handleSubmit}
          className="mt-[160px] rounded-[20px] bg-white p-10"
        >
          <h1 className="text-[28px] leading-[34px] font-semibold text-primary">
            Transformez
            <br />
            vos stats en résultats
          </h1>

          <h2 className="mt-10 text-[22px] font-medium">Se connecter</h2>

          <label className="mt-6 block text-sm text-grey">
            Adresse email
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="mt-2 block h-[58px] w-full rounded-[10px] border border-grey px-4 text-dark outline-none focus:border-primary"
            />
          </label>

          <label className="mt-6 block text-sm text-grey">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="mt-2 block h-[58px] w-full rounded-[10px] border border-grey px-4 text-dark outline-none focus:border-primary"
            />
          </label>

          {errorMessage && (
            <p className="mt-4 text-sm text-secondary">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-10 h-[50px] w-full rounded-[10px] bg-primary text-white hover:bg-primary-hover disabled:bg-light-grey disabled:text-grey"
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>

          <p className="mt-8 text-sm">Mot de passe oublié ?</p>
        </form>
      </div>

      <div className="relative flex-1">
        <img
          src="/login-background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <p className="absolute right-[30px] bottom-[30px] rounded-[30px] bg-white px-6 py-3 text-center text-xs text-primary">
          Analysez vos performances en un clin d'œil,
          <br />
          suivez vos progrès et atteignez vos objectifs.
        </p>
      </div>
    </main>
  );
}
