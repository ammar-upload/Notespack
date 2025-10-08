"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles =
      "relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"

    const variants = {
      primary:
        "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,255,255,0.4)]",
      outline:
        "border border-cyan-400 text-cyan-300 hover:bg-cyan-950 hover:text-cyan-100",
    }

    return (
      <motion.button
        {...props}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </motion.button>
    )
  }

  // ✅ Generate random bubbles only on client
  const [bubbles, setBubbles] = useState([])
  useEffect(() => {
    const generated = [...Array(12)].map(() => ({
      width: Math.random() * 100 + 40,
      height: Math.random() * 100 + 40,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      duration: Math.random() * 5 + 4,
    }))
    setBubbles(generated)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#05060A] text-white overflow-hidden">
      {/* Background Rotating Gradient */}
      <motion.div
        className="absolute inset-0 z-0 opacity-25"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #00f2fe, #43e97b, #f8ffae, #00f2fe)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      {/* Overlay for Depth */}
      <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-[2px] z-0" />

      {/* Floating Lights */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400/30 rounded-full blur-3xl"
            style={{
              width: b.width,
              height: b.height,
              top: b.top,
              left: b.left,
            }}
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-lime-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Introducing <span className="text-white">Notespack</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          The next-generation note-saving app for students and creators.  
          Simple, fast, and smart — powered by{" "}
          <span className="text-cyan-400 font-semibold">AI</span> and built for modern learning.
          <br />
          Save, organize, and access your notes anywhere — even{" "}
          <span className="text-green-400 font-semibold">offline</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center  gap-4 flex-wrap"
        >
        <Link  href="/dashboard">  <Button className="cursor-pointer" variant="primary">Get Started</Button></Link>
          <Link  href="/learn-more" passHref>
            <Button className="cursor-pointer" variant="outline">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-cyan-500/20 blur-[150px] rounded-full z-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
    </section>
  )
}
