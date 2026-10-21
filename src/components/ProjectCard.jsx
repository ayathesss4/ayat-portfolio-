import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block bg-surface dark:bg-night-surface border border-line dark:border-night-line rounded-2xl p-6 hover:border-accent dark:hover:border-accent-dark transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className="text-xs uppercase tracking-wide text-muted dark:text-night-muted">
          {project.category}
        </span>
        <FiArrowUpRight
          className="text-muted dark:text-night-muted group-hover:text-accent dark:group-hover:text-accent-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
          size={18}
        />
      </div>

      <h3 className="font-display text-xl font-semibold text-ink dark:text-night-text mb-2">
        {project.name}
      </h3>

      <p className="text-sm text-muted dark:text-night-muted leading-relaxed mb-6">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-paper dark:bg-night-bg border border-line dark:border-night-line text-muted dark:text-night-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
