"use client"
import { motion } from "framer-motion"
import { BookOpen, CloudOff, Users2, Brain } from "lucide-react" // ✅ fixed CloudOffline → CloudOff
import {

  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from "next/link"
export default function LearnMore() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      title: "Organized Note Storage",
      desc: "Create subjects, chapters, and sections — store your notes, images, and PDFs with tags and keywords for quick search anytime.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI Test Generator",
      desc: "Our smart AI analyzes your saved notes and generates personalized tests to help you prepare effectively and track progress.",
    },
    {
      icon: <CloudOff className="w-8 h-8 text-green-400" />, // ✅ fixed icon
      title: "Offline Access & Drafts",
      desc: "No internet? No problem. Write drafts offline and upload or update them whenever you’re back online — stay productive anywhere.",
    },
    {
      icon: <Users2 className="w-8 h-8 text-pink-400" />,
      title: "Communities & Collaboration",
      desc: "Create or join communities, share your notes with friends, and collaborate in real time to make learning interactive and fun.",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="relative py-24 px-6 sm:px-10 md:px-20 bg-[#050505] text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#030303]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          The Story Behind <span className="text-cyan-400">Notespack</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-12"
        >
          I built <span className="text-cyan-400 font-semibold">Notespack</span> for students who
          struggle to keep their study material organized and accessible.  
          With this app, your notes live safely in one place — accessible anytime, anywhere.  
          It’s not just a notes app; it’s your personal smart study assistant.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative bg-[#0a0a0a]/60 backdrop-blur-lg border border-cyan-500/10 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-cyan-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-left sm:text-center"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            How to Use Notespack
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Start by creating your <span className="text-cyan-400">account</span> and 
            organizing your notes by subjects and topics. Add keywords, upload PDFs, 
            and tag them for quick search. The built-in{" "}
            <span className="text-blue-400 font-medium">AI</span> can generate tests 
            automatically from your notes.  
            You can also create{" "}
            <span className="text-pink-400 font-medium">groups</span> and
            <span className="text-pink-400 font-medium"> communities</span> to share 
            your knowledge with others — making learning collaborative and exciting.
          </p>
        </motion.div>

        {/* CTA */}
{/* CTA */}
<SignedOut>
  <SignUpButton mode="modal" redirectUrl="/dashboard">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="mt-14"
    >
      <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/40 transition-all duration-300">
        Create Your Account →
      </div>
    </motion.div>
  </SignUpButton>
</SignedOut>

<SignedIn>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    viewport={{ once: true }}
    className="mt-14"
  >
    <Link
      href="/dashboard"
      className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
    >
      Let's start →
    </Link>
  </motion.div>
</SignedIn>


      </div>
    </section>
  )
}
