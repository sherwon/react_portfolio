import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			{[false].map((expand, index) => (
				<Navbar key={expand} expand={expand} className=" mb-3">
					<Container fluid>
						<Navbar.Brand href="#"></Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									Software Engineer
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Link
										to="/"
										style={{
											textDecoration: "none",
											marginTop: "1rem",
										}}
										className="offcanvas-title h5"
									>
										Home
									</Link>
									<Link
										to="/about"
										style={{
											textDecoration: "none",
											marginTop: "1rem",
										}}
										className="offcanvas-title h5"
									>
										About
									</Link>
									<Link
										to="/projects"
										style={{
											textDecoration: "none",
											marginTop: "1rem",
										}}
										className="offcanvas-title h5"
									>
										Projects
									</Link>
									<Link
										to="/contact"
										style={{
											textDecoration: "none",
											marginTop: "1rem",
										}}
										className="offcanvas-title h5"
									>
										Contact
									</Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default NavBar;
