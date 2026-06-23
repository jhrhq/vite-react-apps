
const Header = () => {
  return (
    <header className="backdrop-blur-lg bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-indigo-950 animate-pulse"></span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-linear-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Aurora Tasks
            </h1>
            <p className="text-xs text-purple-200/60">Organize beautifully</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-80 focus-within:border-pink-400/50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search tasks..." className="bg-transparent outline-none text-sm text-white placeholder-purple-200/50 w-full" />
          <kbd className="hidden lg:inline text-xs text-purple-200/50 bg-white/10 px-2 py-0.5 rounded">⌘K</kbd>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-100 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-400 rounded-full animate-ping"></span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30 cursor-pointer hover:scale-105 transition">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;