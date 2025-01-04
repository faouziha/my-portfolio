import React, { useState } from "react";
import "./contact.css";
import Footer from "./footer";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e776f29e-f8f8-4e1c-8a92-ee4e2ded07ca");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="contactsection">
            <div className="contactcontent">
                <h1 className="contacttitle">Contact Me</h1>
                <div className="contactform">
                    <form onSubmit={onSubmit}>
                        <input name="name" type="text" placeholder="Your Name" className="contactinput" required />
                        <input name="email" type="email" placeholder="Your Email" className="contactinput" required />
                        <input name="phone" type="text" placeholder="Phone Number" className="contactinput" required />
                        <textarea name="message" placeholder="Your Message" className="contacttextarea" required />
                        <button className="contactbutton" type="submit">Send</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}