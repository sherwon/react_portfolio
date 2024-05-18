import React, { useState, useEffect } from "react";
import programmingSkills from "../../data/programmingSkills";
import "./styles/Skills.css";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
	const [skills] = useState(programmingSkills); // Using array destructuring to extract skills from the tuple

	useEffect(() => {
		// Your jQuery code here
	}, []); // Empty dependency array to run only once after component mounts

	const percentage = 66;

	return (
		<div className="skills-section">
			<div className="skills-container">
				{skills.map((skill, index) => (
					<div className="skills-box" key={index}>
						<div className="skills-title">
							<div className="skills-img">
								<img src={skill.img} className="skills-icons" />
							</div>
							<h3>{skill.skill}</h3>
						</div>
						<p>{skill.experience}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
