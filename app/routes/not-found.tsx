import { ErrorPage } from "~/components/ErrorPage";

export default function NotFound() {
  return <ErrorPage title="404" details="La page demandée est introuvable." />;
}
