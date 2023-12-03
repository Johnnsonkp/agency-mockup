export default function ServicesSection() {
  return (
    <div className="servicesSection">
      <h1>OUR SERVICES</h1>
      <div className="cardContainer">
        <div className="singleCard webDesignCard">
          <img
            src="https://assets.codepen.io/6060109/agency-service-1.png"
            alt="web design service image"
          />
          <p>WEB DESIGN</p>
        </div>
        <div className="singleCard ecommerceCard">
          <img
            src="https://assets.codepen.io/6060109/agency-service-2.png"
            alt="ecommerce service image"
          />
          <p>ECOMMERCE</p>
        </div>
        <div className="singleCard automationCard">
          <img
            src="https://assets.codepen.io/6060109/agency-service-3.png"
            alt="automation service image"
          />
          <p>AUTOMATION</p>
        </div>
      </div>
    </div>
  );
}
