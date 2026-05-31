const Experience = () => {
  const experiences = [
    {
      designation: "Statutory Audit In-Charge",
      company: "Kuldeep Arora & Associates",
      location: "Vrindavan / Mathura",
      duration: "May 2018 – Present",
      achievements: [
        "Led statutory audits and tax audits for 50+ corporate and non-corporate clients.",
        "Prepared audit reports under SA 700, SA 705, SA 706 and CARO reporting.",
        "Managed and mentored a team of 5 article assistants.",
        "Filed 150+ Income Tax Returns for individuals, firms and companies.",
        "Handled income tax assessments and departmental correspondence.",
        "Managed GST compliance, GSTR-9 and GSTR-9C filings for multiple clients.",
        "Oversaw GST return filing and reconciliations for 100+ clients."
      ]
    },
    {
      designation: "Paid Assistant – Audit & Taxation",
      company: "K.C. Khanna & Co.",
      location: "Delhi",
      duration: "March 2017 – April 2018",
      achievements: [
        "Conducted statutory and tax audits on ERP and SAP-based systems.",
        "Performed inventory verification for automation machinery businesses.",
        "Prepared corporate Income Tax Returns and Tax Audit Reports.",
        "Handled GST registration, payment processing and return filing."
      ]
    },
    {
      designation: "Article Assistant",
      company: "B B Agrawal & Co.",
      location: "Mathura",
      duration: "September 2012 – September 2015",
      achievements: [
        "Assisted in statutory and tax audits of companies, firms, trusts and individuals.",
        "Reviewed financial statements and resolved audit observations.",
        "Prepared audit reports and CARO reporting documentation.",
        "Coordinated audit activities and trained junior staff."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Professional Experience
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Over 8 years of experience in Statutory Audit, Taxation,
            GST Compliance, Financial Reporting and Regulatory Advisory.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.designation}
                  </h3>

                  <p className="text-blue-600 font-medium">
                    {exp.company}
                  </p>

                  <p className="text-gray-500">
                    {exp.location}
                  </p>
                </div>

                <div className="mt-3 lg:mt-0">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-600">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 text-white rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Key Expertise
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              "Statutory Audit",
              "Tax Audit",
              "Income Tax",
              "GST Compliance",
              "Financial Reporting",
              "CARO Reporting",
              "ROC Compliance",
              "Team Leadership",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-white/20 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;