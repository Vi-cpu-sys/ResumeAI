import { motion } from "framer-motion";

function FloatingCard({ title, value }) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.6
      }}

      whileHover={{
        scale: 1.05,
        y: -8
      }}

      className="
      relative
      overflow-hidden
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      text-center
      shadow-2xl
      hover:border-blue-500/40
      transition-all
      duration-300"
    >

      {/* Glow Effect */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-500/10
        to-purple-500/10
        opacity-0
        hover:opacity-100
        transition-all
        duration-500"
      />

      {/* Value */}

      <h3
        className="
        relative
        z-10
        text-4xl
        font-extrabold
        text-blue-400
        drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
      >
        {value}
      </h3>

      {/* Title */}

      <p
        className="
        relative
        z-10
        text-gray-300
        mt-3
        text-sm
        md:text-base"
      >
        {title}
      </p>

    </motion.div>

  );

}

export default FloatingCard;