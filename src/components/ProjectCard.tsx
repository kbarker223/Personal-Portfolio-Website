type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  github?: string;
};

export default function ProjectCard({ title, description, tech, link, linkLabel, github }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, idx) => (
          <span key={idx} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-blue-600">
        {link && (
        <a href={link} target="_blank" className="underline text-blue-600">{linkLabel}</a>
        )}
        {github && <a href={github} target="_blank" className="underline">GitHub</a>}
      </div>
    </div>
  );
}
