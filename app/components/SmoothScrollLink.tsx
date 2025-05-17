"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MouseEvent, ReactNode, useEffect } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmoothScrollLink({ href, children, className, onClick }: SmoothScrollLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract hash from href
  const isHashLink = href.includes("#");
  const hash = isHashLink ? href.split("#")[1] : null;
  const targetPath = isHashLink ? href.split("#")[0] || "/" : href;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call optional onClick (e.g., to close mobile menu)
    if (onClick) onClick();

    if (isHashLink && hash) {
      e.preventDefault();
      const targetId = hash;
      const targetElement = document.getElementById(targetId);

      // Check if this is a cross-page navigation
      const isCrossPage = pathname !== targetPath && targetPath !== "";

      if (isCrossPage) {
        // Set flag for first navigation
        localStorage.setItem("firstHashNavigation", "true");
        // Scroll to top immediately
        window.scrollTo({ top: 0, behavior: "instant" });
        // Navigate to the target page with hash
        router.push(href);
      } else if (targetElement) {
        // Same-page hash link: scroll smoothly
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback: navigate to the href if target element not found
        router.push(href);
      }
    } else {
      // Non-hash links: use Next.js router
      router.push(href);
    }
  };

  // Handle smooth scrolling after cross-page navigation
  useEffect(() => {
    if (isHashLink && hash && localStorage.getItem("firstHashNavigation") === "true") {
      const targetId = hash;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // Reset the flag after scrolling
        localStorage.setItem("firstHashNavigation", "false");
      }
    }
  }, [isHashLink, hash]);

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}