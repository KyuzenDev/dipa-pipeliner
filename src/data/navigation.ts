interface NavigationProps {
  url: string;
  label: string;
  hideInNavbar?: boolean;
  published?: boolean;
}

export const navigation: NavigationProps[] = [
  {
    url: "/",
    label: "Home",
    hideInNavbar: true,
    published: false,
  },
  {
    url: "/about",
    label: "About",
    published: true,
  },
  {
    url: "/pricing-plan",
    label: "Pricing",
    published: true,
  },
  {
    url: "/blog",
    label: "Blog",
    published: true,
  },
  {
    url: "/contact",
    label: "Contact",
    published: true,
  },
];
