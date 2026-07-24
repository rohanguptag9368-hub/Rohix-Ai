import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed w-[450px] h-[450px] bg-blue-600/20 blur-[180px] rounded-full -top-32 -left-20"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed w-[420px] h-[420px] bg-cyan-500/20 blur-[180px] rounded-full bottom-0 right-0"
      />
    </>
  );
}