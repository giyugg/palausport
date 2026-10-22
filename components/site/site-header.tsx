"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigation } from "@/content/site";
import { Brand } from "./brand";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  function trapMenuFocus(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const elements = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), summary, [tabindex='0']",
      ),
    ).filter((element) => element.getClientRects().length > 0);
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="preview-ribbon">
        A first look at Palau Sport <span aria-hidden="true">·</span> Website
        draft
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) =>
              "children" in item ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    aria-current={active(item.href) ? "location" : undefined}
                    className={`nav-link nav-trigger${active(item.href) ? " is-active" : ""}`}
                  >
                    {item.label}
                    <ChevronDown size={12} aria-hidden="true" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="site-dropdown">
                    {item.children.map((child) => (
                      <DropdownMenuItem asChild key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={
                            pathname === child.href ? "page" : undefined
                          }
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${active(item.href) ? " is-active" : ""}`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link href="/book-now" className="button button-primary header-cta">
            Book / Inquire <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            ref={triggerRef}
            className="mobile-menu-toggle"
            type="button"
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>
      <dialog
        id="mobile-navigation"
        className="mobile-dialog"
        ref={dialogRef}
        aria-labelledby="mobile-menu-title"
        onKeyDown={trapMenuFocus}
        onCancel={(event) => {
          event.preventDefault();
          setMenuOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMenuOpen(false);
        }}
      >
        <div className="mobile-panel">
          <div className="mobile-panel-top">
            <h2 id="mobile-menu-title">Explore Palau Sport</h2>
            <button
              className="icon-button"
              type="button"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a"))
                setMenuOpen(false);
            }}
          >
            {navigation.map((item) =>
              "children" in item ? (
                <details key={item.href} className="mobile-nav-group">
                  <summary>
                    {item.label}
                    <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={
                          pathname === child.href ? "page" : undefined
                        }
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  className="mobile-nav-link"
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/book-now"
              className="button button-primary mobile-booking"
            >
              Book / Inquire <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
          <p className="mobile-menu-note">
            Philippine waters. A different perspective.
          </p>
        </div>
      </dialog>
    </>
  );
}
