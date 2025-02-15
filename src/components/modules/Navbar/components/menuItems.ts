export const menuItems: {
  name: string;
  href: string;
  disabled?: Boolean;
  subItems?: { name: string; href: string }[];
}[] = [
  { name: "Home", href: "/" },
  //   {
  //     name: "Company",
  //     href: "/company",
  //     subItems: [
  //       { name: "About Us", href: "/company/about" },
  //       { name: "Our Team", href: "/company/team" },
  //     ],
  //   },
  { name: "Services", href: "/services" },
  //   { name: "Projects", href: "/projects" },
  //   { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
