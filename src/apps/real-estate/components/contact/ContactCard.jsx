import LocationIcon from "../svg/LocationIcon";
import MailIcon from "../svg/MailIconSvg";

export default function ContactCard({ title, address, type }) {
  return (
    <div className="mb-8 flex w-[330px] max-w-full">
      <div className="mr-6 text-[32px] text-blue-600">
        {type == "location" ? <LocationIcon /> : <MailIcon />}
      </div>
      <div>
        <h5 className="mb-[18px] text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h5>
        {type == "location" ? (
          <p className="text-base text-slate-500 dark:text-gray-400">
            {address}
          </p>
        ) : (
          <>
            {address.map((mail, index) => (
              <p key={index} className="text-base text-slate-500 dark:text-gray-400" >
                {mail}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}