import { Seo } from "@/components/layout/Seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" description="A página que você procura não existe ou foi movida." path="/404" />
      <section className="flex min-h-[70vh] items-center">
        <Container className="text-center max-w-lg">
          <p className="eyebrow text-[var(--brand-primary)]">Erro 404</p>
          <h1 className="mt-4 font-[var(--font-display)] font-extrabold text-[var(--text)]" style={{ fontSize: "var(--text-h1)" }}>
            Página não encontrada
          </h1>
          <p className="mt-4 text-[var(--text-muted)] leading-normal">O conteúdo que você procura não existe ou foi movido para outro endereço.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to="/" variant="primary">
              Voltar ao início
            </ButtonLink>
            <ButtonLink to="/noticias" variant="secondary">
              Ver notícias
            </ButtonLink>
            <ButtonLink to="/contato" variant="ghost">
              Entrar em contato
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
