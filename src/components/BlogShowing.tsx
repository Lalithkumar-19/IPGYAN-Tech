const BlogShowing = () => {
  const blogs = [
    {
      id: 1,
      title: "Revolutionizing Legal Tech:AI and Automation Across India and Beyond",
      description:
        ` 
        The legal world is experiencing a tech renaissance, where artificial intelligence (AI) and automation are reshaping traditional practices into agile, modern services. From India’s bustling legal startup scene to international law firms, AI-powered tools and automated workflows are driving unprecedented efficiency and innovation.
            1. AI-Powered Legal Research & Contract Analysis
        Gone are the days of sifting through endless case files. Today, AI transforms legal research by quickly scanning vast databases to deliver pinpoint-accurate results. Automated contract analysis tools are a game changer too—they highlight critical clauses, assess risks, and ensure compliance with lightning speed. This means more time for strategic legal thinking and less time on repetitive tasks.`
                ,
      link: "/blog/1",
    },
    {
      id: 2,
      title: "Innovating Intellectual Property: How Legal Tech is Transforming IP Management",
      description:`In today’s digital age, intellectual property (IP) has never been more valuable—or more complex. As ideas, brands, and innovations continue to shape industries worldwide, legal tech is emerging as a game changer for managing and protecting these intangible assets.
          1. Revolutionizing IP Research and Portfolio Management
      Legal tech solutions are transforming the way IP professionals conduct research. Advanced AI algorithms now scan global databases, identify potential infringements, and track patent citations, ensuring that every innovation is safeguarded. This cutting-edge approach not only streamlines the patent search process but also empowers businesses to make informed decisions about their IP portfolios.`
        ,
     
      link: "/blog/2",
    },
    {
      id: 3,
      title: "Innovative Copyright Legal Tech Solutions: Protecting Creativity in the Digital Age",
      description:`In today's fast-paced digital world, protecting creative works is more crucial than ever. Innovative copyright legal tech products are transforming the way creators, businesses, and legal professionals manage, monitor, and enforce copyright protection. These cutting-edge solutions leverage advanced technologies like artificial intelligence and machine learning to detect infringement, streamline licensing, and ensure that intellectual property rights are upheld.
      AI-Driven Copyright Infringement Detection
      Modern copyright legal tech products use AI to scan the web, social media, and digital marketplaces to identify unauthorized use of creative content. Tools like Copyscape and PlagScan empower creators by automatically flagging duplicate content and potential copyright violations, allowing for rapid action against infringement`
        ,
      link: "/blog/3",
    },
  ];

  return (
    <div className="bg-gray-100 py-12" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold font-poppins text-gray-800 text-center mb-8">
          Latest Blogs
        </h2>
        <div className="flex flex-row place-items-center place-content-center gap-6 flex-wrap">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-purple-50 rounded-lg max-w-[350px] shadow-md overflow-hidden transition-transform transform lg:hover:shadow-2xl"
            >
              {/* <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-600 line-clamp-2 font-poppins">
                  {blog.title}
                </h3>
                <p className="mt-2  line-clamp-[10]  text-gray-600  text-justify  leading-10 b  mb-8  font-poppins  ">{blog.description}</p>
                <a
                  href={blog.link}
                  className="inline-block mt-4 px-6 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogShowing;
