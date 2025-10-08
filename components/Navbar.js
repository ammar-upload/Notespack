"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Community", href: "#community" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Custom motion button without redirectUrl passed down
  const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const base =
      "rounded-full px-5 py-2 font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black";
    const variants = {
      primary:
        "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_10px_rgba(0,255,255,0.4)]",
      outline:
        "border border-cyan-400 text-cyan-300 hover:bg-cyan-950 hover:text-cyan-200",
    };
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-cyan-900/50 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
         
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-lime-300 bg-clip-text text-transparent select-none"

        >
          <Link
            href="/"
               >
          Notespack
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
            
            key={link.name}
                     whileHover={{ y: -2, color: "#a0f0ff" }}
                transition={{ type: "spring", stiffness: 250 }}
                className="text-gray-300 hover:text-cyan-300 transition-colors"
            >
              <Link
              href={link.href}
       
                >
            
              {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal" >
                <div>
                  <Button variant="outline">Login</Button>
                </div>
              </SignInButton>
              <SignUpButton mode="modal" >
                <div>
                  <Button variant="primary">Sign Up</Button>
                </div>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-3"
              >
                <UserButton
                  appearance={{
                    baseTheme: "dark",
                    elements: {
                      avatarBox:
                        "ring-2 ring-cyan-500 ring-offset-2 ring-offset-[#0a0a0f] transition-all duration-300",
                      userButtonBox:
                        "border border-cyan-700 rounded-full hover:border-lime-300 transition-all duration-300",
                      userButtonPopoverCard:
                        "bg-[#0a0a0f] border border-cyan-900/60 shadow-[0_0_25px_rgba(0,255,255,0.15)] rounded-xl",
                      userButtonPopoverActionButton:
                        "hover:bg-cyan-950/60 transition-all duration-200 text-gray-200",
                      userButtonPopoverActionButtonText: "text-gray-200",
                      userButtonPopoverActionButtonIcon: "text-cyan-400",
                      userButtonPopoverFooter:
                        "border-t border-cyan-900/50 mt-2 pt-2 text-gray-400 text-sm text-center",
                    },
                    layout: { shimmer: false },
                  }}
                  afterSignOutUrl="/"
                />
              </motion.div>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-cyan-900/50 shadow-inner"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-gray-300 hover:text-cyan-300 text-lg transition"
                  onClick={() => setIsOpen(false)}
                               key={link.name}
                >
                  <Link
                    href={link.href}
                  >
                
                  {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="flex flex-col gap-3 mt-4 w-3/4">
                <SignedOut>
                  <SignInButton mode="modal" >
                    <div>
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </div>
                  </SignInButton>
                  <SignUpButton mode="modal" >
                    <div>
                      <Button variant="primary" className="w-full">
                        Sign Up
                      </Button>
                    </div>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex justify-end pr-6 mt-2"
                  >
                    <UserButton
                      appearance={{
                        baseTheme: "dark",
                        elements: {
                          avatarBox:
                            "ring-2 ring-cyan-500 ring-offset-2 ring-offset-[#0a0a0f] transition-all duration-300 hover:ring-lime-400",
                          userButtonBox:
                            "border border-cyan-700 rounded-full hover:border-lime-300 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.2)]",
                          userButtonPopoverCard:
                            "bg-[#0a0a0f] border border-cyan-900/60 shadow-[0_0_35px_rgba(0,255,255,0.2)] rounded-2xl text-gray-200 backdrop-blur-md min-w-[220px] py-2",
                          userButtonPopoverActionButton:
                            "hover:bg-cyan-950/60 transition-all duration-200 text-gray-300 hover:text-cyan-300",
                          userButtonPopoverActionButtonIcon: "text-cyan-400",
                          userButtonPopoverActionButtonText: "text-gray-200",
                          userButtonPopoverFooter:
                            "border-t border-cyan-900/50 mt-2 pt-2 text-gray-400 text-sm text-center",
                        },
                        layout: { shimmer: false },
                      }}
                      afterSignOutUrl="/"
                    />
                  </motion.div>
                </SignedIn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
