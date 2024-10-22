import React from "react";

type Link = {
  label: string;
  href: string;
};

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0">
      {/* Top section: Logo */}
      <div className="flex items-center space-x-2 mb-6">
        <a
          href="/"
          title="acme.ai"
          className="relative mr-6 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-auto h-[40px]"
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </svg>
          <span className="font-bold text-xl">acme.ai</span>
        </a>
      </div>
      {/* Links section */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8 ">
        <FooterSection title="Product" links={productLinks} />
        <FooterSection title="Company" links={companyLinks} />
        <FooterSection title="Resources" links={resourcesLinks} />
        <FooterSection title="Social" links={socialLinks} />
      </div>
      {/* Bottom section: Horizontal line, copyright, and links */}
      <hr className="my-8 border-gray-300" /> {/* Horizontal line */}
      <div className="flex flex-col sm:flex-row justify-between items-center pb-4">
        {/* Copyright text */}
        <p className="text-sm text-muted-foreground text-center sm:text-left mb-4 sm:mb-0">
          Copyright © 2024 acme.ai
        </p>

        {/* Privacy and Terms links */}
        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
        <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
          DevStudio
        </p>
    </footer>
  );
};

// Sub-component for individual footer sections
const FooterSection = ({ title, links }: any) => {
  return (
    <div className="mb-5">
      <h2 className="font-semibold">{title}</h2>
      <ul>
        {links.map((link: Link, index: number) => (
          <li key={index} className="my-2">
            <a
              className="group inline-flex cursor-pointer items-center justify-start gap-1 text-gray-600 duration-200 hover:text-black"
              href={link.href}
            >
              {link.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define the data for the footer sections
const productLinks = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "API", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
  { label: "Partners", href: "#" },
];

const resourcesLinks = [
  { label: "Community", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Support", href: "#" },
  { label: "Status", href: "#" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default Footer;
