// import Countdown from "../../common/countdown";
import config from "../../../utils/config.json";

const HeaderComponent = () => {
  return (
    <header className="bg-dark py-5 bg-header">
      <div className="container px-5">
        {/* <Countdown /> */}

        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-1 text-white mb-2">
                {config.token.nameShort}
              </h1>
              <h3 className="lead fw-normal text-white mb-4">
                Save it to cherish or leave it to perish.
                <br />
                <span className="small mt-3">
                  Wildlife is Mother Nature's greatest treasure, to protect it,
                  we must take every measure. All the creatures are in need, we
                  will help them, yes indeed.
                </span>
              </h3>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                {/* <!-- a className="btn btn-outline-light btn-lg px-4 me-sm-3" href="#features">Get Started</a> --> */}
                <a
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pre-sale"
                >
                  <i className="bi bi-cart-fill"></i> Pre Sale
                </a>

                <a
                  className="btn btn-light btn-lg px-4 me-sm-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.urls.bscscan}
                >
                  Explore
                </a>

                <a
                  className="btn btn-light btn-lg px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.urls.whitepaper}
                >
                  <i className="bi bi-file-earmark-text"></i> Read whitepapers
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center bg-wild">
            <img
              className="img-fluid rounded-3 my-5"
              src={config.logo[256]}
              alt={config.token.symbol}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
