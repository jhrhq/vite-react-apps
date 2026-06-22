import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const contacts = [
  { id: 1, title: "Our Location", type: "location", address: "401 Broadway, 24th Floor, Orchard Cloud View, London" },
  { id: 2, title: "How Can We Help?", type: "mail", address: ["info@yourdomain.com", "contact@yourdomain.com"] }
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 md:py-[120px] overflow-hidden">
      {/* Visual horizontal split background to match image_62de43.png */}
      <div className="absolute left-0 top-0 z-0 h-1/2 w-full bg-slate-900 lg:h-[46%] xl:h-1/2"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Side Content Block */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[140px]">
                <span className="mb-4 block text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  CONTACT US
                </span>
                <h2 className="max-w-[280px] text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Let's talk about <br /> your problem.
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-8 justify-between lg:mb-0">
                {contacts.map((contact) => (
                  <ContactCard key={contact.id} title={contact.title} address={contact.address} type={contact.type} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side Form Block */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}