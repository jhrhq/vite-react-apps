import {
  Check,
  Mail,
  MapPin,
  Phone,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

export default function Users({ ppl, addMember }) {
  const { name, email, location, picture, phone } = ppl;

  const [showPhone, setShowPhone] = useState(false);
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    addMember(ppl);
    setRequested(true);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all hover:border-violet-500/30 hover:bg-zinc-900/90">
      <div className="p-6">
        <div className="flex gap-5">
          <div className="relative">
            <img
              src={picture.large}
              alt=""
              className="h-24 w-24 rounded-2xl object-cover"
            />

            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-zinc-900 bg-emerald-500" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xl font-semibold">
              {name.first} {name.last}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={14} />
              <span>
                {location.city}, {location.country}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
              <Mail size={14} />
              <span className="truncate">
                {email}
              </span>
            </div>

            {showPhone && (
              <div className="mt-2 flex items-center gap-2 text-sm text-violet-300">
                <Phone size={14} />
                {phone}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setShowPhone(true)}
            className="flex-1 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800"
          >
            Show Phone
          </button>

          <button
            disabled={requested}
            onClick={handleRequest}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition
              ${
                requested
                  ? "bg-emerald-600 text-white"
                  : "bg-violet-600 text-white hover:bg-violet-500"
              }`}
          >
            {requested ? (
              <>
                <Check size={16} />
                Request Sent
              </>
            ) : (
              <>
                <UserPlus size={16} />
                Add Friend
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}