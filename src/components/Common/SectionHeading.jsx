const SectionHeading = ({ title, subtitle, center = false }) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
