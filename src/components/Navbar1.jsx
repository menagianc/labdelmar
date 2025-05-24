"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("auto");
  const isMobile = useMediaQuery("(max-width: 991px)");

  // Reset menu height when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setMenuHeight("auto");
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    menuHeight,
    setMenuHeight,
    isMobileMenuOpen,
    isMobile
  };
};

export function Navbar1() {
  const useActive = useRelume();
  const menuContentRef = useRef(null);

  useEffect(() => {
    if (useActive.isMobileMenuOpen && menuContentRef.current) {
      // Calculate dynamic height with some padding
      const contentHeight = menuContentRef.current.scrollHeight;
      const screenHeight = window.innerHeight;
      const navbarHeight = document.querySelector('#relume')?.querySelector('div')?.offsetHeight || 0;
      
      // Set height to the content height, but don't exceed available space
      const availableHeight = screenHeight - navbarHeight;
      const finalHeight = Math.min(contentHeight + 32, availableHeight);
      
      useActive.setMenuHeight(`${finalHeight}px`);
    }
  }, [useActive.isMobileMenuOpen]);
  return (
    <section
      id="relume"
      data-component-name="Navbar1"
      className="z-[999] flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/">
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Labmar Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: useActive.menuHeight },
            close: { height: 0 },
          }}
          initial={useActive.isMobile ? "close" : "open"}
          exit={useActive.isMobile ? "close" : "open"}
          animate={useActive.isMobile ? useActive.animateMobileMenu : "open"}
          transition={{ duration: 0.4 }}
          className={`overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 ${!useActive.isMobile ? 'h-auto !important' : ''}`}
        >
          <div ref={menuContentRef} className="menu-content flex flex-col lg:flex-row lg:items-center">
          <Link
            to="/inicio"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Inicio
          </Link>
          <Link
            to="/sobre-nosotros"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/sucursales"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Sucursales
          </Link>
          <Link
            to="/contacto"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Contacto
          </Link>
          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
            <a href="tel:7878588362" className="block md:hidden w-full">
              <Button title="Llamar" size="sm" className="w-full">
                Llamar
              </Button>
            </a>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
