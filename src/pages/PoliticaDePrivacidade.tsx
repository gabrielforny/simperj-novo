import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/data/site";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Seo title="Política de Privacidade" description="Política de privacidade do site do SIMPERJ." path="/politica-de-privacidade" />
      <PageHero eyebrow="Institucional" title="Política de Privacidade" breadcrumb={[{ label: "Política de Privacidade" }]} />

      <Section spacing="lg">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-[var(--text)] leading-relaxed">
            <p>
              A sua privacidade é importante para o SIMPERJ. É política do sindicato respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em {SITE.url}.
            </p>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço — como no caso do formulário de associação ou do formulário de contato. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento, e informamos por que estamos coletando e como será usado.
            </p>
            <p>Retemos as informações coletadas apenas pelo tempo necessário para fornecer o serviço solicitado. Protegemos os dados dentro de meios comercialmente aceitáveis para evitar perdas, roubos e acessos, divulgações, cópias, usos ou modificações não autorizadas.</p>
            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p>O uso continuado do nosso site será considerado como aceitação das nossas práticas em torno de privacidade e informações pessoais.</p>
            <p>Dúvidas sobre como tratamos os dados do usuário podem ser enviadas para {SITE.email}.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
