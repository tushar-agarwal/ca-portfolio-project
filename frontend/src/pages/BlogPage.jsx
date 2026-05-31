import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  const blogs = [
    {
      title: "Income Tax Saving Tips",
      date: "May 2026",
    },
    {
      title: "GST Updates for Businesses",
      date: "April 2026",
    },
    {
      title: "Startup Compliance Guide",
      date: "March 2026",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10">
            Latest Articles
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="shadow-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-500">
                  {blog.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;