import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{/* <div className="work">
							<img
								src="./weigandt.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								Weigandt Consulting
							</div>
							<div className="work-subtitle">
								Support Engineer
							</div>
							<div className="work-duration">
								December 2023 - April 2024
							</div>
						</div> */}

						<div className="work">
							<img
								src="./tlci.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Telcom Live Content inc.
							</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								June 2022 - November 2023
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
