import { GraduationCap, Clock, MapPin, Users, CalendarDays, Sun } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";
import { COURSES } from "@/data/courses";
import { formatDate } from "@/lib/format";

export default function Cursos() {
  return (
    <>
      <Seo
        title="Cursos"
        description="Catálogo de cursos técnicos do SIMPERJ em parceria com Firjan/SENAI para a indústria de transformação de plástico."
        path="/cursos"
      />
      <PageHero
        eyebrow="Capacitação"
        title="Cursos técnicos para a indústria do plástico"
        lead="Formações em produção, automação industrial, digital e gestão, oferecidas via parceria Firjan/SENAI."
        breadcrumb={[{ label: "Cursos" }]}
      />

      <Section spacing="lg">
        <Container>
          {COURSES.length === 0 ? (
            <div className="border border-dashed border-[var(--border-strong)] rounded-[var(--radius-md)] p-12 text-center max-w-xl mx-auto">
              <GraduationCap size={32} strokeWidth={1.5} className="mx-auto text-[var(--text-muted)]" aria-hidden="true" />
              <h2 className="mt-4 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                Catálogo de cursos em atualização
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">
                Estamos renovando a oferta de cursos técnicos do SIMPERJ. Enquanto isso, fale diretamente com nossa equipe para saber sobre a disponibilidade atual.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Dúvida sobre cursos SIMPERJ`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                Falar com o SIMPERJ
              </a>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {COURSES.map((course, i) => (
                <Reveal key={course.slug} id={course.slug} delay={i * 100} className="border border-[var(--border)] rounded-[var(--radius-md)] p-6">
                  <p className="eyebrow text-[var(--brand-primary)]">{course.institution ?? "Programa de Qualificação Setorial SENAI-RJ"}</p>
                  <h3 className="mt-1 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                    {course.name}
                  </h3>
                  {course.modality && <p className="mt-1 text-sm text-[var(--text-muted)]">{course.modality}</p>}

                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Clock size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      <div>
                        <dt className="text-[var(--text-muted)]">Carga horária</dt>
                        <dd className="font-medium text-[var(--text)]">{course.hours}h</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      <div>
                        <dt className="text-[var(--text-muted)]">Vagas</dt>
                        <dd className="font-medium text-[var(--text)]">{course.slots}</dd>
                      </div>
                    </div>
                    {course.shift && (
                      <div className="flex items-start gap-2">
                        <Sun size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                        <div>
                          <dt className="text-[var(--text-muted)]">Turno</dt>
                          <dd className="font-medium text-[var(--text)]">
                            {course.shift}
                            {course.schedule ? ` · ${course.schedule}` : ""}
                          </dd>
                        </div>
                      </div>
                    )}
                    {course.weekdays && (
                      <div className="flex items-start gap-2">
                        <CalendarDays size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                        <div>
                          <dt className="text-[var(--text-muted)]">Dias da semana</dt>
                          <dd className="font-medium text-[var(--text)]">
                            {course.weekdays}
                            {course.strategy ? ` · ${course.strategy}` : ""}
                          </dd>
                        </div>
                      </div>
                    )}
                  </dl>

                  {course.address && (
                    <p className="mt-4 flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <MapPin size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      {course.address}
                    </p>
                  )}

                  {(course.startDate || course.endDate) && (
                    <p className="mt-3 text-sm text-[var(--text-muted)]">
                      <span className="font-medium text-[var(--text)]">Previsão: </span>
                      {course.startDate ? formatDate(course.startDate) : "a definir"}
                      {course.endDate ? ` a ${formatDate(course.endDate)}` : ""}
                    </p>
                  )}

                  <p className="mt-3 text-sm text-[var(--text-muted)]">
                    <span className="font-medium text-[var(--text)]">Pré-requisito: </span>
                    {course.audience}
                    {course.prerequisite ? `. ${course.prerequisite}` : ""}
                  </p>

                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Inscrição — ${course.name}`)}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    Falar com o SIMPERJ sobre este curso
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
