import config from "../../../utils/config.json";

const RightSection = ({ imageUrl, title, description }) => {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6 order-first order-lg-last">
            <img
              className="img-fluid shadow rounded mb-5 mb-lg-0"
              src={imageUrl}
              alt={config.token.symbol}
            />
          </div>
          <div className="col-lg-6">
            <h2 className=""> {title} </h2>
            <p className="lead fw-normal text-muted mb-0"> {description} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
