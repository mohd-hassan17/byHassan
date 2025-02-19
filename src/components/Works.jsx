import React, { useState } from 'react';

const Works = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
      open: false
    },
    {
      question: 'How does React work?',
      answer: 'React creates a virtual DOM in memory and syncs it with the real DOM using a process called reconciliation.',
      open: false
    },
    {
      question: 'What are components?',
      answer: 'Components are the building blocks of a React application. They are reusable pieces of code that return a React element to be rendered to the page.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="faq-section ">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div
            className={`faq ${faq.open ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;