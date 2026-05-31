const Certifications = () => {
  const certifications = [
    {
      title: "DISA (Diploma in Information System Audit)",
      organization: "ICAI",
      year: "2019",
    },
    {
      title: "Chartered Accountant",
      organization: "ICAI",
      year: "2016",
    },
    {
      title: "Ind-AS Certification",
      organization: "ICAI",
      year: "2019",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Qualifications & Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow text-center"
            >
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-blue-600">
                {item.organization}
              </p>

              <p className="text-gray-500">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;