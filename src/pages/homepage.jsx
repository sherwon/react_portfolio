import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Skills from "../components/common/Skills";
import INFO from "../data/user";
import SEO from "../data/seo";
import freeTraining from "../data/freeTraining";

import "./styles/homepage.css";
import "./styles/box.css";
// import ImageSlider from "../components/common/imageSlider";

import sherwin from "../assets/sherwin(1).png";
import whoIamI from "../assets/whoIamI.png";
const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		// position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		// zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	const [services, setService] = useState([
		"Front-end Development",
		"Back-end Development",
		"Full-stack Development",
	]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<div className="squares">
								<div className="square square-pulse"></div>
								<div className="square1 square-pulse"></div>
							</div>
						</div>
					</div>

					<div className="homepage-container">
						<div className="parent">
							<div className="div1">
								<div className="homepage-first-area">
									<div
										className="homepage-first-area-left-side"
										data-aos="fade-down"
									>
										<div className="title homepage-title">
											{INFO.homepage.title}
										</div>

										<div className="subtitle homepage-subtitle">
											{INFO.homepage.description}
										</div>
									</div>

									<div
										className="homepage-first-area-right-side"
										data-aos="fade-left"
									>
										<div className="homepage-image-container">
											<div className="homepage-image-wrapper">
												<img
													src={sherwin}
													alt="about"
													className="homepage-image"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="homepage-socials">
									<a
										href={INFO.socials.twitter}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faTwitter}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.stackoverflow}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faStackOverflow}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.instagram}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faInstagram}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={`mailto:${INFO.main.email}`}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faMailBulk}
											className="homepage-social-icon"
										/>
									</a>
								</div>
							</div>

							<div className="div2">
								<div className="custom-shape-divider-bottom-1713071918">
									<svg
										data-name="Layer 1"
										viewBox="0 0 1200 120"
										preserveAspectRatio="none"
									>
										<path
											d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
											opacity=".25"
											className="shape-fill"
										></path>
										<path
											d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
											opacity=".5"
											className="shape-fill"
										></path>
										<path
											d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
											className="shape-fill"
										></path>
									</svg>
								</div>
							</div>
						</div>

						{/* <div className="carousel">
							<div
								className="title homepage-title"
								data-aos="fade-right"
							>
								Certifications
							</div>
							<ImageSlider />
						</div> */}
						<div className="intro">
							{/* <div className="who">
								<img src={whoIamI} alt="" />
							</div>
							<div className="desc">
								<div className="title homepage-title">
									Service offer
								</div>
								
							</div> */}
							<div className="title homepage-title">Services</div>

							<section className="container">
								<section className="card__container">
									{services.map((service, index) => (
										<div
											className="card__bx card__1"
											key={index}
										>
											<div className="card__data">
												<div className="card__icon">
													<div className="card__icon-bx">
														<i className="fa-solid fa-pen-ruler"></i>
													</div>
												</div>
												<div className="card__content">
													<h3>{service}</h3>
													{/* <p>
													Lorem Ipsum is simply dummy
													text of the printing and
													typesetting industry.
												</p> */}
													<a href="#">Read More</a>
												</div>
											</div>
										</div>
									))}
								</section>
							</section>
						</div>
						<div>
							<div className="title homepage-title">Skills</div>
							<Skills />
						</div>
						<div
							className="homepage-projects"
							data-aos="fade-right"
						>
							<div className="title homepage-title">
								Personal projects & practice projects
							</div>
							<AllProjects />
						</div>

						<div
							className="homepage-after-title"
							data-aos="fade-down-right"
						>
							<div className="homepage-articles">
								{freeTraining.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div
								className="homepage-works"
								data-aos="fade-down-left"
							>
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
