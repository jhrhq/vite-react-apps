import FooterFacebookIcon from "../svg/FooterFacebookIcon";
import FooterInstagramIcon from "../svg/FooterInstagramIcon";
import FooterLinkedInIcon from "../svg/FooterLinkedInIcon";
import FooterTwitterIcon from "../svg/FooterTwitterIcon";

const features = [
  "How it works",
  "Privacy policy",
  "Terms of Service",
  "Refund policy",
];

const menus = ["Home", "Features", "About"];

const blogs = [
  {
    description: "I think really important to design with...",
    img: "./assets/images/blog/blog-footer-01.jpg",
  },
  {
    description: "Recognizing the need is the primary...",
    img: "./assets/images/blog/blog-footer-02.jpg",
  },
];

function Lists({ heading, lists }) {
  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">{heading}</h4>
      <ul>
        {lists.map((item) => (
          <li key={item}>
            <a
              href="javascript:void(0)"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Blog() {
  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
      <div className="flex flex-col gap-8">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href="blog-details.html"
            className="group flex items-center gap-[22px]"
          >
            <div className="overflow-hidden rounded">
              <img src={blog.img} alt="blog" />
            </div>
            <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
              {blog.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a
                href="javascript:void(0)"
                className="mb-6 inline-block  max-h-[100px]"
              >
                <img
                  src="assets/images/logo/logo.svg"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FooterFacebookIcon />
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FooterTwitterIcon />
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FooterInstagramIcon />
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FooterLinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <Lists heading="About Us" lists={menus} />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <Lists heading="Features" lists={features} />
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <Blog />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
