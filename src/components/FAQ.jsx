import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Roger work?",
      answer: "Roger uses advanced AI to understand the context of your conversations and provides intelligent suggestions in real-time."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We prioritize your privacy and never store or share your personal conversations. All processing happens securely on your device."
    },
    {
      question: "Which platforms does Roger support?",
      answer: "Roger is currently available on iOS with Android support coming soon. It works seamlessly with all major messaging apps."
    },
    {
      question: "Can I customize Roger's suggestions?",
      answer: "Yes! Roger learns from your communication style and adapts over time. You can also customize settings to match your preferences."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial so you can experience Roger's capabilities before subscribing."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section-light">
      <div className="faq-container-light">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list-light">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item-light ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question-light" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon-light">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-light">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
