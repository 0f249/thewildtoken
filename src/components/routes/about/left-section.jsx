import config from "../../../utils/config.json";

const LeftSection = ({ imageUrl, title, description }) => {
  return (
    <section className="py-5 bg-light" id="scroll-target">
      <div className="container px-5 my-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            {/* <!-- <img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /> --> */}
            <img
              className="img-fluid rounded shadow mb-5 mb-lg-0"
              src={imageUrl}
              alt={config.token.symbol}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bolder1"> {title} </h2>
            <p className="lead fw-normal text-muted mb-0">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
