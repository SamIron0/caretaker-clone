import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Insta } from "./icons/insta";
import { XTwitter } from "./icons/x";
import { LinkedIn } from "./icons/linkedin";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { title: "Features", href: "#" },
        { title: "Pricing", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Contact us", href: "#" },
        { title: "Terms of use", href: "#" },
        { title: "Privacy Policy", href: "#" },
      ],
    },
  ];
  return (
    <footer className="border-t border-white-a08 px-8 py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row lg:flex-col">
            <div className="flex cursor-pointer items-center text-grey transition-colors duration-300 hover:text-white">
              <Logo />
            </div>
            <div className="ml-auto mt-auto flex space-x-6 text-grey lg:ml-0">
              <Insta />
              <XTwitter />
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column, idx) => (
            <div
              key={idx}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-[1.4rem] font-medium text-off-white">
                {column.title}
              </h3>
              <ul>
                {column.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="[&_a]:transition-colors [&_a]:duration-200 [&_a]:last:mb-0 [&_a]:hover:text-white"
                  >
                    <Link
                      href={link.href}
                      className="mb-[1.4rem] inline-block text-grey"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
