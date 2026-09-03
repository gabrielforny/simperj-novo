export interface NavLink {
  label: string;
  to: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

export interface BoardMember {
  slug: string;
  name: string;
  role: string;
  company?: string;
  photo?: string;
  placeholder?: boolean;
}

export interface PastPresident {
  order: number;
  name: string;
  period: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface TimelineEntry {
  year: number;
  date: string;
  title: string;
  text: string;
}

export interface CouncilRepresentative {
  council: string;
  representative: string;
}

export interface BenefitItem {
  title: string;
  text: string;
}

export interface BenefitGroup {
  id: string;
  title: string;
  items: BenefitItem[];
}

export interface Discount {
  label: string;
}

export type EventStatus = "aberto" | "em-breve" | "encerrado";

export interface EventItem {
  slug: string;
  name: string;
  category: "feira-nacional" | "feira-internacional" | "online" | "acao-simperj";
  startDate?: string;
  endDate?: string;
  location?: string;
  url?: string;
  status: EventStatus;
  description?: string;
  images?: string[];
  videos?: string[];
  participants?: string[];
  technicalVisits?: string[];
}

export type CourseStatus = "aberto" | "lista-de-espera" | "arquivo";

export interface Course {
  slug: string;
  name: string;
  category: string;
  hours: number;
  slots: number;
  audience: string;
  prerequisite: string;
  status: CourseStatus;
}

export type DocumentCategory =
  | "Relatórios Setoriais"
  | "Economia Circular"
  | "Análises Específicas"
  | "Guias Práticos"
  | "Institucional"
  | "Convênios e Benefícios";

export interface DocumentItem {
  slug: string;
  title: string;
  description: string;
  category: DocumentCategory;
  year: number;
  file: string;
  sizeLabel?: string;
}

export interface CollectiveAgreement {
  regional: string;
  municipalities: string;
  baseDate: string;
  lastCct: string;
  laborUnion: string;
  unionPresident: string;
  cnpj: string;
  address: string;
  phone: string;
}

export interface BoardMeeting {
  month: string;
  day: string;
  time: string;
  type: string;
  location: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  legacy?: boolean;
  /** Conteúdo datado/sazonal (campanhas de mês específico etc.) — não deve
   * aparecer no destaque de "últimas notícias" da Home fora da própria época,
   * mesmo que seja, por data, o post mais recente do arquivo. Continua
   * aparecendo normalmente na listagem completa de /noticias. */
  seasonal?: boolean;
}

export interface Associate {
  name: string;
  segment: string;
  address?: string;
  phone?: string;
  email?: string;
  cnpj?: string;
}

export interface Convenio {
  category: string;
  company: string;
  description: string;
  benefit: string;
  logo?: string;
  link?: string;
}
