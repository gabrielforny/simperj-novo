import { Recycle } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const CAUSES = [
  { title: "Acessibilidade", text: "Financiamento de cadeiras de rodas para instituições sem condições financeiras de adquiri-las. Projetos: Rodando com Tampinhas, INCA.", image: "/assets/institutional/sementes-01.jpg" },
  { title: "Combate à Fome", text: "Alimentos para pessoas em situação de rua e cestas básicas para famílias em dificuldade. Projetos: Recicla Nação (Flamengo), Tampinha Campeã (Tijuca Tênis Clube), Tampa Fome (Casa Shopping).", image: "/assets/institutional/sementes-02.jpg" },
  { title: "Educação", text: "Financiamento de materiais escolares, de acordo com a necessidade de cada instituição cadastrada no programa.", image: "/assets/institutional/sementes-03.jpg" },
  { title: "Saúde da Mulher", text: "Financiamento de mamografias para pacientes do SUS e de baixa renda. Projeto: Acredite na Tampinha.", image: "/assets/institutional/sementes-04.jpg" },
  { title: "Causa Animal", text: "Financiamento de tratamentos para animais amparados em abrigos. Projetos: Rio Eco Pets, Tampa Fome, Papa Ilha.", image: "/assets/institutional/sementes-05.jpg" },
];

const VIDEOS = [
  { src: "/assets/institutional/video/sementes-do-plastico.mp4", title: "Programa Sementes do Plástico" },
  { src: "/assets/institutional/video/plastico-transforma.mp4", title: "Plástico Transforma" },
];

export default function Sustentabilidade() {
  return (
    <>
      <Seo
        title="Sustentabilidade"
        description="Compromisso do SIMPERJ com sustentabilidade, economia circular e o programa Sementes do Plástico."
        path="/sustentabilidade"
      />
      <PageHero
        eyebrow="Sustentabilidade"
        title="A sustentabilidade no centro das decisões da indústria"
        lead="A sustentabilidade deve ocupar o centro de todas as decisões empresariais — a preservação dos recursos naturais ajuda as empresas a administrar riscos e identificar novas oportunidades."
        image="/assets/institutional/economia-circular.jpg"
        breadcrumb={[{ label: "Sustentabilidade" }]}
      />

      <Section spacing="lg">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="border border-[var(--border)] bg-[var(--brand-secondary-light)] rounded-[var(--radius-md)] p-10">
              <Recycle size={36} strokeWidth={1.4} className="text-[var(--brand-secondary)]" aria-hidden="true" />
              <p className="eyebrow mt-6 text-[var(--brand-secondary-dark)]">Desde 2018 · Instituto Soul Ambiental</p>
              <h2 className="mt-3 font-[var(--font-display)] font-bold text-[var(--text)]" style={{ fontSize: "var(--text-h2)" }}>
                Projeto Sementes do Plástico
              </h2>
              <p className="mt-4 text-sm leading-normal text-[var(--text-muted)]">
                Iniciativa que transforma resíduos plásticos em financiamento para causas sociais: consumidores coletam, recicladoras processam e a indústria transforma em novos produtos. O SIMPERJ incentiva associados a participarem por meio de doações de coletores ou arrecadação de tampinhas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeader eyebrow="Economia circular" title="Do resíduo ao impacto social" lead="Cada quilo de plástico coletado é convertido em recursos que sustentam projetos sociais em cinco frentes prioritárias." />
          </Reveal>
        </Container>
      </Section>

      <Section tone="brand-dark" spacing="lg">
        <Container>
          <SectionHeader dark eyebrow="Impacto social" title="Cinco causas apoiadas pelo programa" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CAUSES.map((cause, i) => (
              <Reveal key={cause.title} delay={i * 80} className="h-full border border-white/10 rounded-[var(--radius-md)] overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={cause.image} alt={cause.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-[var(--font-display)] font-semibold text-white" style={{ fontSize: "var(--text-h4)" }}>
                    {cause.title}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-white/70">{cause.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Vídeos" title="Conheça os projetos em vídeo" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {VIDEOS.map((video) => (
              <div key={video.src} className="border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
                <video controls preload="metadata" className="w-full aspect-video bg-black">
                  <source src={video.src} type="video/mp4" />
                </video>
                <p className="p-4 text-sm font-medium text-[var(--text)]">{video.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
