import { Recycle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { CAUSES, SUSTAINABILITY_YOUTUBE_CHANNEL_ID } from "../data/content";

const ECONOMIA_CIRCULAR_IMAGE = "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/economia-circular-1024x1024.jpg";
// Prefixo "UU" no lugar de "UC" no ID do canal retorna a playlist de uploads — forma suportada de embutir um canal inteiro.
const UPLOADS_PLAYLIST_ID = `UU${SUSTAINABILITY_YOUTUBE_CHANNEL_ID.slice(2)}`;

export default function Sustentabilidade() {
  return (
    <>
      <PageHero
        eyebrow="Sustentabilidade"
        title="A sustentabilidade no centro das decisões da indústria"
        lead="O SIMPERJ acredita que sustentabilidade é preservar recursos naturais enquanto atende às necessidades do presente — promovendo desenvolvimento econômico, social e ambiental sem comprometer o futuro."
        image={ECONOMIA_CIRCULAR_IMAGE}
        imageAlt="Ilustração de economia circular na indústria do plástico"
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="border border-[var(--color-line)] bg-[var(--color-green-100)] p-10">
              <Recycle size={36} strokeWidth={1.4} className="text-[var(--color-green-700)]" />
              <p className="eyebrow mt-6 text-[var(--color-green-700)]">Desde 2018 · Instituto Soul Ambiental</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-ink)]">Projeto Sementes do Plástico</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-graphite-700)]">
                Iniciativa que transforma resíduos plásticos em financiamento para causas sociais, envolvendo
                consumidores na coleta, recicladoras no processamento e indústrias na transformação em novos produtos.
                O SIMPERJ incentiva ativamente seus associados a participarem por meio de doações de coletores ou
                arrecadação de tampinhas plásticas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Economia circular"
              title="Do resíduo ao impacto social"
              lead="Cada quilo de plástico coletado é convertido em recursos que sustentam projetos sociais em cinco frentes prioritárias, escolhidas por sua urgência social no Rio de Janeiro."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-petrol-950)] text-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading dark eyebrow="Impacto social" title="Cinco causas apoiadas pelo programa" />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CAUSES.map((cause, i) => (
              <Reveal key={cause.title} delay={i * 80}>
                <div className="h-full border border-white/10">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="eyebrow text-[var(--color-rust-500)]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold">{cause.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-petrol-100)]/70">{cause.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Vídeos" title="Acompanhe no nosso canal" lead="Conteúdo em vídeo sobre sustentabilidade, economia circular e os bastidores das ações do SIMPERJ." />
          <Reveal delay={100}>
            <div className="mt-10 aspect-video w-full max-w-4xl border border-[var(--color-line)] overflow-hidden bg-black">
              <iframe
                title="Canal do SIMPERJ no YouTube"
                className="h-full w-full"
                loading="lazy"
                src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href={`https://www.youtube.com/channel/${SUSTAINABILITY_YOUTUBE_CHANNEL_ID}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-petrol-800)] hover:text-[var(--color-rust-600)]"
            >
              Ver canal completo no YouTube
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
