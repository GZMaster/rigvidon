import React from "react";
import "./About.scss";
import One from "../../assets/images/Person.png";
const About = () => {
	return (
		<section id="about" className="A_Container">
			<div className="A_Wrapper">
				<div className="A_Text_Wrap">
					<div className="A_Text_Title">WHO ARE WE</div>
					<h3 className="A_Text_Header">
						<span>A World Class </span>
						<span className="A_Green">Energy Company</span> Set To Attend To All
						Your Needs
					</h3>
					<p>
						Rigvidon Energy is a global energy-based trading company that
						specialises in both renewable and non-renewable energy. Some of our
						services include; large scale solar panel installation and
						maintenance, Engineering and automation solutions, oil and gas
						drilling, Process engineering solutions and many more. We also
						provide unique services perfectly tailored to our customers
						requirements.
					</p>

					<p>
						Our Mission: At Rigvidon Energy Limited, our mission is to become a
						globally recognized leader in the energy industry
					</p>
					<p>
						Our Vision: We envision a future where renewable energy becomes the
						dominant source of power
					</p>
				</div>
				<div className="A_Image_Wrap">
					<img src={One} className="A_Image" alt={One} />
				</div>
			</div>
		</section>
	);
};

export default About;
