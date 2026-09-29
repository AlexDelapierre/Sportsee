import { Link } from "react-router";

export default function NotFound() {
  return (
    <main>
      <h1>Page introuvable</h1>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  );
}
