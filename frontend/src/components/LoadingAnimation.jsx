import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingAnimation() {

  const steps = [

    "📄 Reading Resume...",

    "📑 Reading Job Description...",

    "🧠 Extracting Skills...",

    "🔍 Matching Resume with JD...",

    "📊 Calculating ATS Score...",

    "🤖 Generating AI Recommendations...",

    "✅ Preparing Dashboard..."

  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentStep((prev) => {

        if (prev < steps.length - 1) {

          return prev + 1;

        }

        return prev;

      });

    }, 700);

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      className="
      flex
      flex-col
      justify-center
      items-center
      py-24"
    >

      <motion.div

        animate={{

          rotate: 360

        }}

        transition={{

          repeat: Infinity,

          duration: 1.5,

          ease: "linear"

        }}

        className="
        w-24
        h-24
        border-8
        border-blue-500
        border-t-transparent
        rounded-full"

      />

      <motion.h2

        key={currentStep}

        initial={{
          opacity: 0,
          y: 10
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        className="
        text-3xl
        font-bold
        mt-10"

      >

        AI Analysis in Progress

      </motion.h2>

      <motion.p

        key={steps[currentStep]}

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}

        className="
        text-gray-400
        mt-6
        text-lg"

      >

        {steps[currentStep]}

      </motion.p>

      <div
        className="
        mt-10
        w-[400px]
        h-3
        bg-gray-700
        rounded-full
        overflow-hidden"
      >

        <motion.div

          initial={{
            width: 0
          }}

          animate={{
            width: `${((currentStep + 1) / steps.length) * 100}%`
          }}

          transition={{
            duration: 0.6
          }}

          className="
          h-full
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-purple-500"

        />

      </div>

    </div>

  );

}

export default LoadingAnimation;