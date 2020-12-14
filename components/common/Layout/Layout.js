import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
        <Header />
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
        <main>{children}</main>
        <footer className="text-lg font-light">
          © {new Date().getFullYear()}, St Mary's Church, Bambalapitiya
        </footer>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header
      className={clsx("flex items-center justify-between ", {
        "mb-8": isRoot,
        "mb-2": !isRoot,
      })}
    >
      <div className={"max-w-md"}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={isRoot ? 28 : 24}
        />
      )}
    </header>
  );
};

const LargeTitle = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-3xl font-black leading-none text-black no-underline font-display",
          "sm:text-5xl",
          "dark:text-white"
        )}
      >
        St Mary's Church
      </a>
    </Link>
    <p className={clsx(
      "text-lg font-black leading-none text-black no-underline font-display",
      "sm:text-xl",
      "dark:text-white"
    )}
    >
      Bambalapitiya
    </p>
  </h1>
);

const SmallTitle = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-2xl font-black text-black no-underline font-display",
          "dark:text-white"
        )}
      >
        St Mary's Church, Bambalapitiya
      </a>
    </Link>
  </h1>
);
