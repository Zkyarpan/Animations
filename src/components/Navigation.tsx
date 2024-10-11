import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between max-w-[500px] w-full mx-auto">
      <div className="flex items-center gap-x-4">
        <Link href="/" className="outline-none">
          <img
            alt="Discover"
            loading="lazy"
            width="124"
            height="32"
            decoding="async"
            className="object-cover hidden md:block"
            // src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg"
          />
        </Link>
        <div className="block md:hidden">{/* Your mobile icon code */}</div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="sm:flex items-center gap-x-2 hidden">
          <Link href="/scroll" className="nav-link">
            Scroll
          </Link>
          <Link href="/jobs" className="nav-link">
            Jobs
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
        </div>
        {/* Mobile dropdown menu */}
        <div className="absolute block sm:hidden bg-white top-14 transition-all w-full">
          <div className="flex flex-col mt-4">
            <Link href="/scroll" className="mobile-nav-link">
              Scroll
            </Link>
            <Link href="/jobs" className="mobile-nav-link">
              Jobs
            </Link>
            <Link href="/projects" className="mobile-nav-link">
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Link href="/login" className="btn-primary">
          Log in
        </Link>
        <Link href="/signup" className="btn-secondary">
          Join Community
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
