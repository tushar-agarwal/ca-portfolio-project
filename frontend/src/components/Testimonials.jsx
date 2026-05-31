const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      review:
        "Excellent GST and taxation support. Highly professional and responsive.",
    },
    {
      name: "Neha Gupta",
      review:
        "Helped us with company registration and compliance. Great experience.",
    },
    {
      name: "Amit Jain",
      review:
        "Reliable CA services and very good financial guidance.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <p className="text-gray-600 mb-4">
                "{item.review}"
              </p>

              <h4 className="font-bold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;