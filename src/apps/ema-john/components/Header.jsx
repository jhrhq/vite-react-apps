import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <img
            src={logo}
            alt="Ema John"
            className="h-10 w-auto object-contain"
          />

          <nav className="flex items-center gap-8">
            <a
              // href="/shop"
              className="font-medium text-slate-600 transition hover:text-amber-500"
            >
              Shop
            </a>

            <a
              // href="/review"
              className="font-medium text-slate-600 transition hover:text-amber-500"
            >
              Order Review
            </a>

            <a
              // href="/manage"
              className="font-medium text-slate-600 transition hover:text-amber-500"
            >
              Manager
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}