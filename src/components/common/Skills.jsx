import React, { useState, useEffect } from "react";
import programmingSkills from "../../data/programmingSkills";
import "./styles/Skills.css";
import $ from "jquery";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
	const [skills] = useState(programmingSkills); // Using array destructuring to extract skills from the tuple
	useEffect(() => {
		// Your jQuery code here
	}, []); // Empty dependency array to run only once after component mounts
	const percentage = 66;

	return (
		<div className="skillContainer">
			<div className="skillcontainer">
				<div className="wrapper">
					{skills.map((skill, index) => (
						<div className="card react" key={index}>
							<div className="circle">
								<CircularProgressbar
									value={skill.percentage}
									text={`${skill.percentage}%`}
								/>
							</div>
							<div className="text">{skill.skill}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
