import config from "../../../utils/config.json";

const MakeInIndia = () => {
  return (
    <section className="page-section bg-primary1 1text-white" id="project">
      <div className="container px-4 px-lg-5 text-center">
        <h2 className="mt-5 mb-3 display-4">We are proud to present</h2>
        {/* <!-- <hr className="divider divider-dark" /> --> */}
        <img
          className="img-fluid mb-5"
          src="https://statics.thewildtoken.com/images/make-in-india.png"
          alt={config.token.symbol}
        />

        {/* <!-- Start of carousel --> */}
        <h3 className="mt-5 display-6">Launching soon on</h3>
        <hr className="divider divider-dark mb-0" />
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          {/* <!--
          <div className="carousel-indicators carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="pancake-swape"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="bitmart"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="kucoin"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="mxc"
            ></button>
          </div>
          --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://statics.thewildtoken.com/images/carousel/launch-soon/on-pancake-swape.png"
                className="img-fluid"
                alt="pancake-swape"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://statics.thewildtoken.com/images/carousel/launch-soon/on-bitmart.png"
                className="img-fluid"
                alt="bitmart"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://statics.thewildtoken.com/images/carousel/launch-soon/on-kucoin.png"
                className="img-fluid"
                alt="kucoin"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://statics.thewildtoken.com/images/carousel/launch-soon/on-mxc.png"
                className="img-fluid"
                alt="mxc"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- End of carousel --> */}
      </div>
    </section>
  );
};

export default MakeInIndia;
