import blogFooter01 from "../../assets/images/blog/blog-footer-01.jpg";
import blogFooter02 from "../../assets/images/blog/blog-footer-02.jpg";
import logo from "../../assets/images/logo/logo.svg";

import FooterFacebookIcon from "../svg/FooterFacebookIcon";
import FooterInstagramIcon from "../svg/FooterInstagramIcon";
import FooterLinkedInIcon from "../svg/FooterLinkedInIcon";
import FooterTwitterIcon from "../svg/FooterTwitterIcon";

const features = ["How it works", "Privacy policy", "Terms of Service", "Refund policy"];
const menus = ["Home", "Features", "About"];
const blogs = [
  { description: "I think really important to design with...", img: blogFooter01 },
  { description: "Recognizing the need is the primary...", img: blogFooter02 }
];

function Lists({ heading, lists }) {
  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">{heading}</h4>
      <ul>
        {lists.map((item) => (
          <li key={item}>
            <a href="javascript:void(0)" className="mb-3 inline-block text-base text-slate-300 hover:text-blue-600 transition-colors" >
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
      <div className="flex flex-col gap-6">
        {blogs.map((blog, index) => (
          <a key={index} href="blog-details.html" className="group flex items-center gap-[22px]" >
            <div className="h-16 w-20 shrink-0 overflow-hidden rounded bg-slate-800">
              <img src={blog.img} alt="blog" className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105" />
            </div>
            <span className="max-w-[180px] text-sm leading-snug text-slate-300 transition-colors group-hover:text-white指定">
              {blog.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-blue-950 pt-20 lg:pt-[100px] w-full">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 lg:w-4/12">
            <div className="mb-10 w-full">
              <a href="javascript:void(0)" className="mb-6 inline-block" >
                <img src={logo} alt="logo" className="max-w-full h-10" />
              </a>
              <p className="mb-8 max-w-[270px] text-base text-slate-300">
                We create digital experiences for brands and companies by using technology.
              </p>
              <div className="-mx-3 flex items-center">
                <a href="javascript:void(0)" className="px-3 text-slate-300 hover:text-white transition-colors" >
                  <FooterFacebookIcon />
                </a>
                <a href="javascript:void(0)" className="px-3 text-slate-300 hover:text-white transition-colors" >
                  <FooterTwitterIcon />
                </a>
                <a href="javascript:void(0)" className="px-3 text-slate-300 hover:text-white transition-colors" >
                  <FooterInstagramIcon />
                </a>
                <a href="javascript:void(0)" className="px-3 text-slate-300 hover:text-white transition-colors" >
                  <FooterLinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <Lists heading="About Us" lists={menus} />
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <Lists heading="Features" lists={features} />
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-4/12">
            <Blog />
          </div>
        </div>
      </div>
    </footer>
  );
}