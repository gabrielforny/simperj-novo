import { Clock, Users } from "lucide-react";
import type { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";

const STATUS_LABEL: Record<Course["status"], string> = {
  aberto: "Aberto",
  "lista-de-espera": "Lista de espera",
  arquivo: "Arquivo · 2021",
};

const STATUS_TONE: Record<Course["status"], "success" | "warning" | "neutral"> = {
  aberto: "success",
  "lista-de-espera": "warning",
  arquivo: "neutral",
};

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="h-full flex flex-col border border-[var(--border)] rounded-[var(--radius-md)] p-5">
      <Badge tone="secondary" className="self-start">
        {course.category}
      </Badge>
      <h3 className="mt-3 font-[var(--font-display)] font-semibold text-[var(--text)] leading-snug flex-1" style={{ fontSize: "var(--text-h4)" }}>
        {course.name}
      </h3>
      {course.hours > 0 && (
        <div className="mt-4 flex items-center gap-4 text-sm text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <Clock size={15} aria-hidden="true" /> {course.hours}h
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={15} aria-hidden="true" /> {course.slots} vagas
          </span>
        </div>
      )}
      <Badge tone={STATUS_TONE[course.status]} className="mt-4 self-start">
        {STATUS_LABEL[course.status]}
      </Badge>
    </div>
  );
}
