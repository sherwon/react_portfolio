import Carousel from "react-bootstrap/Carousel";
import "./styles/carousel.css";
function DarkVariantExample() {
	return (
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img
					xs={6}
					md={9}
					className="d-block "
					src="sherwin(1).png"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h5>First slide label</h5>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img xs={9} md={9} src="sherwin(1).png" alt="Third slide" />
				<Carousel.Caption>
					<h5>Second slide label</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img xs={6} md={4} src="sherwin(1).png" alt="Third slide" />
				<Carousel.Caption>
					<h5>Third slide label</h5>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default DarkVariantExample;
