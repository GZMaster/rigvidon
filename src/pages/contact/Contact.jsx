import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { MdEmail, MdPhoneInTalk, MdLocationPin } from "react-icons/md";
import SuccessfulNotification from "../../components/notification/SuccessfulNotification";

const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const emailKey = process.env.REACT_APP_EMAIL_KEY;

const companyName = "Rigvidon";
const companyEmail = "rigvidenergyltd@gmail.com";

const Contact = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => emailjs.init(emailKey), []);

	const [toSend, setToSend] = useState({
		from_name: "",
		message: "",
		from_email: "",
		subject: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(emailServiceId, emailTemplateId, {
				from_name: toSend.from_name,
				message: toSend.message,
				from_email: toSend.from_email,
				subject: toSend.subject,
				phone: "N/A",
				company_name: companyName,
				company_email: companyEmail,
			})
			.then(() => {
				SuccessfulNotification("Mail sent successfully");
				alert("Mail sent successfully");
				setToSend({
					from_name: "",
					message: "",
					from_email: "",
					subject: "",
				});
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error sending email:", error);
				setLoading(false);
			});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<section id="contact" className="C_Container">
			<div className="C_Wrapper">
				<h4 className="C_title">Connect with us</h4>
				<p className="C_Text">
					Fill out the contact form below to reach out to us
				</p>
				<section className="Contact_Wrapper">
					<form className="C_Form" onSubmit={onSubmit}>
						<label htmlFor="from_name" className="form_label">
							Full Name
						</label>
						<input
							type="text"
							placeholder="Your Full Name"
							name="from_name"
							value={toSend.from_name}
							className="form_control"
							onChange={handleChange}
						/>
						<label htmlFor="from_email" className="form_label">
							Email
						</label>
						<input
							type="email"
							placeholder="Your Email Address"
							name="from_email"
							value={toSend.from_email}
							className="form_control"
							onChange={handleChange}
						/>
						<label htmlFor="subject" className="form_label">
							Subject
						</label>
						<input
							type="text"
							placeholder="Subject"
							name="subject"
							value={toSend.subject}
							className="form_control"
							onChange={handleChange}
						/>
						<label htmlFor="message" className="form_label">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Your Message"
							type="text"
							cols="30"
							rows="10"
							maxLength="1000"
							value={toSend.message}
							className="form_control"
							onChange={handleChange}
						/>
						<button type="submit" className="C_btn" disabled={loading}>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</form>
					<div className="C_Info">
						<div className="C_item">
							<div className="C_Svg">
								<MdPhoneInTalk />
							</div>
							<div className="C_item_Wrap">
								<h3 className="C_item_title">
									<span>Our Phone number</span>
								</h3>
								<h3 className="C_item-text">0909 610 0225</h3>
							</div>
						</div>
						<div className="C_item">
							<div className="C_Svg">
								<MdEmail />
							</div>
							<div className="C_item_Wrap">
								<h3 className="C_item_title">
									<span>Our Email Address</span>
								</h3>
								<h3 className="C_item-text">rigvidenergyltd@gmail.com</h3>
							</div>
						</div>
						<div className="C_item">
							<div className="C_Svg">
								<MdLocationPin />
							</div>
							<div className="C_item_Wrap">
								<h3 className="C_item_title">
									<span>Our Location</span>
								</h3>
								<h3 className="C_item-text">
									7th floor CBC Towers, No 11 Olubunmi Owa Street, Lekki Phase
									1, Lagos
								</h3>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Contact;
