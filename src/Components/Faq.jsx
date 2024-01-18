import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowDownSLine } from "react-icons/ri";

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const faqData = [
    {
      id: 1,
      head: "Lorem ipsum dolor sit amet, consectetur ?",
      body: " As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      id: 2,
      head: "Lorem ipsum dolor sit amet, consectetur ?",
      body: " As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      id: 3,
      head: "Lorem ipsum dolor sit amet, consectetur ?",
      body: " As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    },
    {
      id: 4,
      head: "Lorem ipsum dolor sit amet, consectetur ?",
      body: " As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
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
                <p>{item.head}</p>
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
                <div className="faq_body">{item.body}</div>
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
