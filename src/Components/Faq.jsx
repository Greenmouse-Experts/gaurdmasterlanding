import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowDownSLine } from "react-icons/ri";

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const faqData = [
    {
      id: 1,
      question: "What programs does Guardmaster Institute Canada offer?",
      answer: "Guardmaster Institute Canada offers a diverse range of programs including Mini-MBA, Professional Proficiency Certificates and Diplomas in Corporate Security Management, Loss Prevention Management, Private Security Business Management, Business Resilience & Disaster Recovery Studies, and Supply Chain Security Management."
    },
    {
      id: 2,
      question: "Are the programs recognized in Canada?",
      answer: "Yes, our programs are accredited and recognized by relevant authorities and professional bodies in Canada and internationally. We are also licensed by the Governments of Ontario and Alberta for Provincial Security Guard Licensing programs."
    },
    {
      id: 3,
      question: "Can international students enroll in Guardmaster Institute Canada programs?",
      answer: "Yes, our programs are open to both domestic and international students. We welcome learners from around the world."
    },
    {
      id: 4,
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. Please refer to the specific program pages on our website for detailed information."
    },
  ];

  const handleItemClick = (id) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };
  return (
    <div className="faq_main">
      <div className="faq">
        <h2 className="h2">Get Answers to all your Questions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia
          leo eget turpis pretium elementum. Vivamus ante purus.
        </p>
        <div className="faq_div">
          {faqData.map((item) => (
            <div key={item.id} className={`faq_content ${openItemId === item.id ? "faq_open" : ""}`}>
              <div onClick={() => handleItemClick(item.id)} className="faqq">
                <p>{item.question}</p>
                <span
                  onClick={() => handleItemClick(item.id)}
                  className="faq_icon"
                >
                  {openItemId === item.id ? (
                    <RiArrowDownSLine />
                  ) : (
                    <RiArrowLeftSLine />
                  )}
                </span>
              </div>

              {openItemId === item.id && (
                <div className="faq_body">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq_form">
        <h2 className="h2">Reach out Directly</h2>
        <form action="submit">
          <input type="text" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email Address" />
          <textarea
            name="messsage"
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Faq;
