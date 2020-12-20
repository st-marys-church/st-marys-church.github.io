import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { getImageUrl } from "../../../utils/helpers";

export function Layout({ children }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="col">
            <Header />
            <br />
            <br />
          </div>
          <div class="col">
            <main>{children}</main>
            <footer className="text-lg font-light">
              © {new Date().getFullYear()}, St Mary's Church, Bambalapitiya
            </footer>
          </div>
          <div class="col">
          </div>
        </div>
        <div class="col-6">
          <img src="/main.jpeg" width="100%" />
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  return (
    <header>
      <div className={"max-w-md"}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
      <nav>
        <Link href={"/calender"} as={`/blog`}>
          <a className="">
            Calender
              </a>
        </Link>
        &nbsp; | &nbsp;
        <Link href={"/blog"} as={`/blog`}>
          <a className="">
            Blog
              </a>
        </Link>
          &nbsp; | &nbsp;
          <Link href={"/about"} as={`/about`}>
          <a className="">
            About
              </a>
        </Link>
            &nbsp; | &nbsp;
            <Link href={"/contact"} as={`/contact`}>
          <a className="">
            Contact
              </a>
        </Link>
      </nav>
    </header>
  );
};

const LargeTitle = () => (
  <div>
    <Link href="/">
      <img src={getImageUrl("/logo.jpg")} alt="" width="100" class="logo" />
    </Link>
    <h1>
      <Link href="/">
        St Mary's Church
    </Link>
    </h1>
  </div>
);

const SmallTitle = () => (
  <div>
    <h4>
      <Link href="/">
        St Mary's Church, Bambalapitiya
    </Link>
    </h4>
  </div>
);
