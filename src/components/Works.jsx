// import React, { useState } from 'react';

// const Works = () => {
//   const [faqs, setFaqs] = useState([
//     {
//       question: 'What is React?',
//       answer: 'React is a JavaScript library for building user interfaces.',
//       open: false
//     },
//     {
//       question: 'How does React work?',
//       answer: 'React creates a virtual DOM in memory and syncs it with the real DOM using a process called reconciliation.',
//       open: false
//     },
//     {
//       question: 'What are components?',
//       answer: 'Components are the building blocks of a React application. They are reusable pieces of code that return a React element to be rendered to the page.',
//       open: false
//     }
//   ]);

//   const toggleFAQ = index => {
//     setFaqs(faqs.map((faq, i) => {
//       if (i === index) {
//         faq.open = !faq.open;
//       } else {
//         faq.open = false;
//       }

//       return faq;
//     }))
//   }

//   return (
//     <div className="faq-section  ">
//       <h2>Frequently Asked Questions</h2>
//       <div className="faqs">
//         {faqs.map((faq, index) => (
//           <div
//             className={`faq ${faq.open ? 'open' : ''}`}
//             key={index}
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="faq-question">
//               {faq.question}
//             </div>
//             <div className="faq-answer">
//               {faq.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Works;

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from 'react-router-dom'
import TeamSection from "./TeamSection ";


const faqs = [
  { question: "What is file integrity?", answer: "File integrity ensures that a file has not been altered or corrupted." },
  { question: "How does the file integrity checker work?", answer: "It scans files for changes and verifies their authenticity using AI." },
  { question: "Can I check a file every 24 hours?", answer: "Yes, the system automatically re-checks the file integrity every 24 hours." },
  { question: "Why is file integrity important?", answer: "Ensuring file integrity prevents unauthorized modifications, data corruption, and security breaches, making it essential for cybersecurity." },
];

function Works() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigatee = useNavigate()

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border faq rounded-xl overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-200">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-4"
            >
              <p className="py-3 text-gray-300">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center " >
      <button 
       onClick={() => {
        navigatee("/Email"); // Navigate to the next page
        window.scrollTo(0, 0); // Scroll to the top
      }}
        
      className="px-6 py-3 mt-10 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:bg-blue-700 active:scale-95"
    >
      Ask a Question
    </button>
    </div>

  
    </div>
    <TeamSection />
    </>
  );
}

export default Works;
