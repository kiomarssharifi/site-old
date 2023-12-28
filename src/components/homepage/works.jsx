import React from "react";
import {faUserGraduate, faTrophy, } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faUserGraduate}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="sharif.png"
								alt="sharif"
								className="work-image"
							/>
							<div className="work-title">Sharif University of Technology</div>
							<div className="work-subtitle">
								<b>M.Sc., Biomedical Engineering</b>
								<div style={{paddingTop: "5px"}}>
									<FontAwesomeIcon icon={faTrophy}/> 29<sup>rd</sup> place, national university exam (Konkur)
								</div>
							</div>
							<div className="work-duration">2018 - 2021</div>
						</div>

						<div className="work">
							<img
								src="isfahan.png"
								alt="sharif"
								className="work-image"
							/>
							<div className="work-title">University of Isfahan</div>
							<div className="work-subtitle">
								<b>B.Sc., Biomedical Engineering</b>
							</div>
							<div className="work-duration">2013 - 2017</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
