'use client'

import { SetStateAction, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqData = [
    {
      question: "What is the purpose of this website?",
      answer: "Our website is designed to provide users with high-quality products and services while ensuring a seamless shopping experience."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team at support@example.com or through our dedicated support portal."
    },
    {
      question: "How do I find the best products?",
      answer: "You can use our search filters, read customer reviews, and sort by ratings to find the products that best match your needs."
    },
    {
      question: "Can I return a product?",
      answer: "Yes, we offer a 30-day return policy on most items. Please check our returns page for specific details and conditions."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on the destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email that you can use to monitor your delivery status."
    }
  ];

  const toggleAccordion = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-50 md:text-5xl">
        Frequently asked questions
      </h2>
      
      <p className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50">
        We are here to help you with any questions you may have. If you don't find what you need, please contact us at{' '}
        <a href="mailto:support@example.com" className="text-blue-500 underline">
          support@example.com
        </a>
      </p>

      <div className="mx-auto mt-10 w-full max-w-3xl">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-start">
              <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
                {openIndex === index ? (
                  <ChevronDown className="h-6 w-6 text-black transition-all duration-200 dark:text-white" />
                ) : (
                  <ChevronUp className="h-6 w-6 text-black transition-all duration-200 dark:text-white" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <div className="mt-2 overflow-hidden text-neutral-500 dark:text-neutral-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;