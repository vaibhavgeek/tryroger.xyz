import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Roger work?",
      answer: "Roger calls you for 5 minutes every day at a time you choose. You talk through whatever's on your mind — career moves, relationships, decisions — and Roger listens, asks thoughtful follow-up questions, and helps you reflect. It's like journaling, but out loud."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Your conversations are completely private and never shared with anyone. We don't sell your data or use it for ads. Everything you say to Roger stays between you and Roger."
    },
    {
      question: "Is Roger free?",
      answer: "Yes, Roger is free to use. We believe everyone deserves a daily space for reflection and growth without a price tag in the way."
    },
    {
      question: "What do people talk to Roger about?",
      answer: "Anything that matters to you. People use Roger to think through career decisions, process relationship dynamics, set goals, track personal growth, or simply decompress after a long day. There's no wrong topic."
    },
    {
      question: "How is this different from journaling or therapy?",
      answer: "Roger sits in between. Unlike a journal, Roger talks back — asking questions that help you see things differently. Unlike therapy, there's no scheduling, no cost, and no pressure. It's a lightweight daily habit that compounds over time."
    },
    {
      question: "How do I get started?",
      answer: "Enter your phone number above and Roger will text you to set up your first call. Pick a time that works, and Roger will call you every day at that time. That's it — no app to download, no account to create."
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
