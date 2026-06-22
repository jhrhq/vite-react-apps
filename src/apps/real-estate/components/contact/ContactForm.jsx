import Input from "./Input";

export default function ContactForm() {
  return (
    <div className="rounded-lg bg-white px-8 py-10 shadow-md dark:bg-slate-800 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
      <h3 className="mb-8 text-2xl font-semibold text-slate-900 dark:text-white md:text-[28px] md:leading-[1.42]">
        Send us a Message
      </h3>
      <form>
        <Input name="fullName" label="Full Name*" type="text" placeholder="Adam Gelius" />
        <Input name="email" label=" Email*" type="email" placeholder="example@yourmail.com" />
        <Input name="phone" label="Phone*" type="text" placeholder="+885 1254 5211 552" />
        <div className="mb-[30px]">
          <label htmlFor="message" className="mb-4 block text-sm text-slate-500 dark:text-gray-400" >
            Message*
          </label>
          <textarea name="message" rows="1" placeholder="type your message here" className="w-full resize-none border-0 border-b border-gray-100 bg-transparent pb-3 text-slate-500 placeholder:text-slate-500/60 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-gray-400" ></textarea>
        </div>
        <div className="mb-0">
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-700" >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}