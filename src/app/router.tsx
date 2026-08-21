import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const QuemSomos = lazy(() => import("@/pages/QuemSomos"));
const PorQueAssociar = lazy(() => import("@/pages/PorQueAssociar"));
const AssocieSe = lazy(() => import("@/pages/AssocieSe"));
const Convenios = lazy(() => import("@/pages/Convenios"));
const Cursos = lazy(() => import("@/pages/Cursos"));
const AcordosColetivos = lazy(() => import("@/pages/AcordosColetivos"));
const Legislacao = lazy(() => import("@/pages/Legislacao"));
const ReunioesDiretoria = lazy(() => import("@/pages/ReunioesDiretoria"));
const Eventos = lazy(() => import("@/pages/Eventos"));
const Sustentabilidade = lazy(() => import("@/pages/Sustentabilidade"));
const Materiais = lazy(() => import("@/pages/Materiais"));
const Noticias = lazy(() => import("@/pages/Noticias"));
const NoticiaDetalhe = lazy(() => import("@/pages/NoticiaDetalhe"));
const Contato = lazy(() => import("@/pages/Contato"));
const PoliticaDePrivacidade = lazy(() => import("@/pages/PoliticaDePrivacidade"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="eyebrow text-[var(--text-muted)]">Carregando…</span>
    </div>
  );
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="por-que-se-associar" element={<PorQueAssociar />} />
          <Route path="associe-se" element={<AssocieSe />} />
          <Route path="convenios" element={<Convenios />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="acordos-coletivos" element={<AcordosColetivos />} />
          <Route path="legislacao" element={<Legislacao />} />
          <Route path="reunioes-diretoria" element={<ReunioesDiretoria />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="sustentabilidade" element={<Sustentabilidade />} />
          <Route path="materiais" element={<Materiais />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="noticias/:slug" element={<NoticiaDetalhe />} />
          <Route path="contato" element={<Contato />} />
          <Route path="politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
