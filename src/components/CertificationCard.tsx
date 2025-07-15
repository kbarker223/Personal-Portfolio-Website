type CertificationCardProps = {
  title: string;
  issuer: string;
  description?: string;
  date?: string;
  certLinks?: { label: string; url: string }[];
};

export default function CertificationCard({
  title,
  issuer,
  description,
  date,
  certLinks,
}: CertificationCardProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-gray-800">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{issuer}{date && ` • ${date}`}</p>
      {description && <p className="mt-2 text-sm text-gray-700">{description}</p>}
      {certLinks && certLinks.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {certLinks.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition text-sm"
            >
              {cert.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
