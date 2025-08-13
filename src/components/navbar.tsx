// src/components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Navbar  as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import {
  RectangleStackIcon,
  UserCircleIcon,
  PaintBrushIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

// Menu's Items
type NavItemDef = {
  name: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  href?: string; 
};

// Menu
const NAV_MENU: NavItemDef[] = [
  { name: "About me",        icon: UserCircleIcon,      href: "/about" },
  { name: "My Projects",     icon: RectangleStackIcon,  href: "/projects" },
  { name: "My Art & Hobbies",icon: PaintBrushIcon,      href: "/art" },
];

function SafeNavItem({
  name,
  href,
  Icon,
  onClick,
}: {
  name: string;
  href?: string;
  Icon: NavItemDef["icon"];
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = href ? pathname === href || pathname.startsWith(`${href}/`) : false;

  const baseClass =
    "flex items-center gap-2 font-medium transition-colors";
  const colorClass = isActive ? "text-blue-600" : "text-gray-900";

  if (!href) {
    if (process.env.NODE_ENV !== "production") {
      console.error(`SafeNavItem: "${name}" It rendered without href.`);
    }
    return (
      <li>
        <Typography
          as="span"
          variant="paragraph"
          color="gray"
          className={`${baseClass} ${colorClass} opacity-60 cursor-not-allowed`}
        >
          <Icon className="h-5 w-5" />
          {name}
        </Typography>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} onClick={onClick} className={`${baseClass} ${colorClass}`}>
        <Typography as="span" variant="paragraph" color="gray" className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {name}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography as={Link} href="/" color="blue-gray" className="text-lg font-bold">
          Nasim Molana
        </Typography>

        {/* Desktop Menu */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <SafeNavItem key={name} name={name} Icon={Icon} href={href} />
          ))}
        </ul>

        {/* Desktop right-side buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text">Sign In</Button>
          <a href="../blog" target="_blank" rel="noreferrer">
            <Button color="gray">Blog</Button>
          </a>
        </div>

        {/* Mobile menu icon*/}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>

      {/* Mobile menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <SafeNavItem
                key={name}
                name={name}
                Icon={Icon}
                href={href}
                onClick={() => setOpen(false)} // Close the menu after click
              />
            ))}
          </ul>
           <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Sign In</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank" rel="noreferrer">
              <Button color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;