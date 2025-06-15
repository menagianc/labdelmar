"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Custom hook to handle menu logic
const useMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close menu on desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, isMobile]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    isMobile,
    menuRef,
    buttonRef
  };
};

export function Navbar1() {
  const { isMobileMenuOpen, toggleMobileMenu, isMobile, menuRef, buttonRef } = useMenu();

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 30,
      },
    },
  };

  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return (
    <section
      id="relume"
      data-component-name="Navbar1"
      className="z-[999] flex w-full items-center border-b border-white bg-background-primary lg:min-h-18 lg:px-[5%]"
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
            ref={buttonRef}
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden relative group"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:bg-[#42CFB5] group-active:bg-[#42CFB5] transition-opacity pointer-events-none"></span>
            <motion.span
              className="my-[3px] h-0.5 w-6 z-10"
              style={{ backgroundColor: '#fff' }}
              animate={animateMobileMenuButtonSpan}
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
              className="my-[3px] h-0.5 w-6 z-10"
              style={{ backgroundColor: '#fff' }}
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 z-10"
              style={{ backgroundColor: '#fff' }}
              animate={animateMobileMenuButtonSpan}
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
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:gap-4">
          <Link to="/inicio" className="px-4 py-2 text-base">Inicio</Link>
          <Link to="/sobre-nosotros" className="px-4 py-2 text-base">Sobre Nosotros</Link>
          <Link to="/sucursales" className="px-4 py-2 text-base">Sucursales</Link>
          <Link to="/domicilio" className="px-4 py-2 text-base">Domicilio</Link>
          <Link to="/contacto" className="px-4 py-2 text-base">Contacto</Link>
        </nav>
        
        <div className="hidden lg:flex items-center ml-4">
             <a href="tel:7878588362" className="hidden md:block">
              <Button title="Llamar" size="sm">
                Llamar
              </Button>
            </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && isMobile && (
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 top-16 bg-background-primary p-[5%] lg:hidden"
            >
              <nav className="flex flex-col gap-4">
                <Link to="/inicio" className="block py-3 text-md" onClick={toggleMobileMenu}>Inicio</Link>
                <Link to="/sobre-nosotros" className="block py-3 text-md" onClick={toggleMobileMenu}>Sobre Nosotros</Link>
                <Link to="/sucursales" className="block py-3 text-md" onClick={toggleMobileMenu}>Sucursales</Link>
                <Link to="/domicilio" className="block py-3 text-md" onClick={toggleMobileMenu}>Domicilio</Link>
                <Link to="/contacto" className="block py-3 text-md" onClick={toggleMobileMenu}>Contacto</Link>
                <div className="mt-6">
                  <a href="tel:7878588362" className="block w-full">
                    <Button title="Llamar" size="sm" className="w-full">
                      Llamar
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
