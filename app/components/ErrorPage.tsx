interface ErrorPageProps {
  title: string;
  details: string;
  stack?: string;
}

export function ErrorPage({ title, details, stack }: ErrorPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-10 text-center">
      <h1 className="text-[22px] font-medium text-primary">{title}</h1>
      <p className="text-grey">{details}</p>
      <a
        href="/dashboard"
        className="mt-4 rounded-[10px] bg-primary px-6 py-3 text-sm text-white hover:bg-primary-hover"
      >
        Retour à l'accueil
      </a>
      {stack && (
        <pre className="mt-8 w-full max-w-[800px] overflow-x-auto p-4 text-left text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
