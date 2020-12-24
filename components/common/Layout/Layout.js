import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { getImageUrl } from "../../../utils/helpers";

export function Layout({ children }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <Header />
        </div>
      </div>
      <main>{children}</main>
      <div class="row">
        <div class="col">
          <footer className="text-lg font-light">
              © {new Date().getFullYear()}, St Mary's Church, Bambalapitiya
          </footer>        
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
        <Link href={"/information"} as={`/information`}>
          <a className="">
            Information
              </a>
        </Link>
        &nbsp; | &nbsp;
        <Link href={"/parish-associations"} as={`/parish-associations`}>
          <a className="">
            Parish council &amp; Associations
          </a>
        </Link>
          &nbsp; | &nbsp;
          <Link href={"/about"} as={`/parish-projects`}>
          <a className="">
            Parish Projects 
          </a>
        </Link>
            &nbsp; | &nbsp;
            <Link href={"/contact"} as={`/contact`}>
          <a className="">
            Contact Us
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
        St Mary's Church, Bambalapitiya
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
