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
									styles={{
										// Customize the root svg element
										root: {},
										// Customize the path, i.e. the "completed progress"
										path: {
											// Path color
											stroke: "#7a43e9",
											// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
											strokeLinecap: "butt",
											// Customize transition animation
											transition:
												"stroke-dashoffset 0.5s ease 0s",
											// Rotate the path
											transform: "rotate(0.25turn)",
											transformOrigin: "center center",
										},
										// Customize the circle behind the path, i.e. the "total progress"
										trail: {
											// Trail color
											stroke: "",
											// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
											strokeLinecap: "butt",
											// Rotate the trail
											transform: "rotate(0.25turn)",
											transformOrigin: "center center",
										},
										// Customize the text
										text: {
											// Text color
											fill: "#27272a",
											// Text size
											fontSize: "16px",
										},
										// Customize background - only used when the `background` prop is true
										background: {
											fill: "#000000",
										},
									}}
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
