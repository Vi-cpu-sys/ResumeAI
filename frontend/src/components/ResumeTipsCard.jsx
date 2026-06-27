import { motion } from "framer-motion";

function ResumeTipsCard() {

const tips = [

```
"Use ATS-friendly keywords from the job description",

"Add measurable achievements in projects and internships",

"Include GitHub and LinkedIn profile links",

"Highlight relevant technical skills clearly",

"Tailor your resume for each job application",

"Keep formatting clean and ATS compatible"
```

];

return (

```
<div
  className="
  bg-white/5
  backdrop-blur-xl
  border
  border-white/10
  rounded-3xl
  p-8
  shadow-2xl
  hover:border-cyan-500/30
  hover:scale-[1.01]
  transition-all
  duration-300"
>

  <h2
    className="
    text-3xl
    font-bold
    mb-6"
  >
    Resume Optimization Tips
  </h2>

  <p
    className="
    text-gray-400
    mb-6"
  >
    AI-powered recommendations to improve ATS performance and recruiter visibility.
  </p>

  <div className="space-y-4">

    {

      tips.map((tip, index) => (

        <motion.div

          key={index}

          initial={{
            opacity: 0,
            x: -20
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            delay: index * 0.1
          }}

          className="
          bg-cyan-500/10
          border
          border-cyan-500/20
          rounded-xl
          px-5
          py-4
          text-gray-200"
        >
          💡 {tip}
        </motion.div>

      ))

    }

  </div>

  <div
    className="
    mt-8
    border-t
    border-white/10
    pt-4
    text-sm
    text-gray-400"
  >
    Following these recommendations can improve ATS compatibility and increase interview opportunities.
  </div>

</div>
```

);

}

export default ResumeTipsCard;
