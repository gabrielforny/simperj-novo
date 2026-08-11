import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6 bg-[var(--color-paper)]">
      <p className="eyebrow text-[var(--color-rust-600)]">Erro 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)]">Página não encontrada</h1>
      <p className="mt-4 text-[var(--color-graphite-700)] max-w-md">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link to="/" className="btn btn-outline-dark mt-8">Voltar para a página inicial</Link>
    </section>
  );
}
