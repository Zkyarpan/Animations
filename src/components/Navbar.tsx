"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-primaryBorder flex items-center w-full h-14 sticky top-0 bg-white z-10">
      <nav className="flex items-center justify-between px-4 md:px-10 max-w-screen w-full mx-auto">
        <div className="flex items-center gap-x-6">
          <Link href="/" passHref>
            <img
              alt="Peerlist"
              loading="lazy"
              width="124"
              height="32"
              decoding="async"
              className="object-cover hidden md:block"
              src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg"
              style={{ color: "transparent" }}
            />
            <div className="block md:hidden">
              <svg
                width="32"
                height="32"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content here */}
              </svg>
            </div>
          </Link>
          <div className="sm:flex items-center gap-x-2 hidden">
            <p className="text-2xl font-light text-gray-gray4">/</p>
            <div className="flex items-center gap-x-2.5">
              <Link
                href="/individuals"
                className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl hover:border-gray-gray3 hover:shadow-focus-border whitespace-nowrap"
              >
                Individuals
              </Link>
              <Link
                href="/companies"
                className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl hover:border-gray-gray3 hover:shadow-focus-border whitespace-nowrap"
              >
                Companies
              </Link>
              <Link
                href="/projects"
                className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl hover:border-gray-gray3 hover:shadow-focus-border whitespace-nowrap"
              >
                Spotlight
              </Link>
              <Link
                href="/jobs/role"
                className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl hover:border-gray-gray3 hover:shadow-focus-border whitespace-nowrap"
              >
                Find Jobs
              </Link>
            </div>
          </div>
          <div className="absolute block sm:hidden bg-white top-14 transition-all ease-in-out duration-300 w-full shadow-xl left-0 h-0 opacity-0 invisible">
            <div className="flex flex-col mt-4">
              <Link
                href="/individuals"
                className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
              >
                <p>
                  <span className="text-gray-gray4">for</span> Individuals
                </p>
                <span className="group-focus:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/companies"
                className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
              >
                <p>
                  <span className="text-gray-gray4">for</span> Companies
                </p>
                <span className="group-focus:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
              >
                <p>
                  <span className="text-gray-gray4">for</span> Spotlight
                </p>
                <span className="group-focus:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/jobs/role"
                className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
              >
                <p>
                  <span className="text-gray-gray4">for</span> Find Jobs
                </p>
                <span className="group-focus:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Link
            href="/login"
            className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl hover:border-gray-gray3 hover:shadow-focus-border whitespace-nowrap bg-gray-gray1"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-3xl text-sm h-8 px-4 bg-green-600 text-white border-green-500 border-2 hover:bg-green-700 whitespace-nowrap"
          >
            Join Peerlist
          </Link>
          <button
            type="button"
            className="p-1 rounded block sm:hidden transition-all duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5h18M3 12h18M3 19h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
