import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const PorQueAssociar = lazy(() => import("./pages/PorQueAssociar"));
const ReunioesDiretoria = lazy(() => import("./pages/ReunioesDiretoria"));
const Eventos = lazy(() => import("./pages/Eventos"));
const Cursos = lazy(() => import("./pages/Cursos"));
const Sustentabilidade = lazy(() => import("./pages/Sustentabilidade"));
const AssocieSe = lazy(() => import("./pages/AssocieSe"));
const Noticias = lazy(() => import("./pages/Noticias"));
const NoticiaDetalhe = lazy(() => import("./pages/NoticiaDetalhe"));
const Materiais = lazy(() => import("./pages/Materiais"));
const Contato = lazy(() => import("./pages/Contato"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="eyebrow text-[var(--color-petrol-700)]">Carregando…</div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="por-que-se-associar" element={<PorQueAssociar />} />
          <Route path="reunioes-diretoria" element={<ReunioesDiretoria />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="sustentabilidade" element={<Sustentabilidade />} />
          <Route path="associe-se" element={<AssocieSe />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="noticias/:slug" element={<NoticiaDetalhe />} />
          <Route path="materiais" element={<Materiais />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
