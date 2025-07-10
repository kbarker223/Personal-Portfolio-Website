type CertificationCardProps = {
  title: string;
  issuer: string;
  description?: string;
  date?: string;
  link?: string;
  linkLabel?: string;
};

export default function CertificationCard({
  title,
  issuer,
  description,
  date,
  link,
  linkLabel
}: CertificationCardProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-gray-800">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{issuer}{date && ` • ${date}`}</p>
      {description && <p className="mt-2 text-sm text-gray-700">{description}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-600 underline hover:text-blue-800 transition"
        >
          {linkLabel || "View Certificate"}
        </a>
      )}
    </div>
  );
}
