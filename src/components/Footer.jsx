import React, { useState } from 'react';
import "./footer.css";
import { footers } from '../data';
// import { DiTravis } from 'react-icons/di';

const Footer = () => {
  const [activeFooter, setActiveFooter] = useState(footers[0].id);

  const handleFooterClick = (id) => {
    setActiveFooter(id);
  }
  return (
    <div className="footer_container">
        <div className="footer_main">
            {footers.map(footers => (
                <div className={`footer_box ${activeFooter === footers.id ? "active" : ""}`} onClick={() => handleFooterClick(footers.id)} key={footers.id}>
                    <img src={footers.icon} alt={footers.title} />
                    <p>{footers.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer;