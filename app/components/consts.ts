// consts.ts
interface LinkItem {
  href: string;
  text: string;
  basePath?: string;
  external?: boolean;
  alternatePaths?: {
    [key: string]: string;
  };
}

export const links: LinkItem[] = [
  { href: "/", text: "Főoldal"},
  { href: "/#szolgaltatasok", text: "Szolgáltatások", basePath: "/" },
  { href: "/hajgyogyaszat", text: "Hajgyógyászat", basePath: "/hajgyogyaszat" },
  { 
    href: "/#portfolio", 
    text: "Portfólióm",
    basePath: "/", 
    alternatePaths: {
      "/hajgyogyaszat": "/#portfolio"
    }
  },
  { 
    href: "https://www.facebook.com/profile.php?id=61568795877252&sk=photos", 
    text: "Referencia", 
    external: true 
  },
  { href: "/#elerhetosegek", text: "Elérhetőségek", basePath: "/" },
];

export const getLinkHref = (link: LinkItem, currentPath: string): string => {
  if (link.external) return link.href;
  if (link.alternatePaths?.[currentPath]) return link.alternatePaths[currentPath];
  return link.href;
};