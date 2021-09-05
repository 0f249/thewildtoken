import { Link } from "react-router-dom";
import config from "../../utils/config.json";

const Http404 = () => {
  return (
    <div className="container px-5 px-lg-5">
      <div className="row g-0">
        {/* <!-- <div className="col-lg-4 col-sm-12 text-center"> --> */}
        <div className="col-lg-12 text-center">
          <img src={config.logo[256]} height="200" alt={config.token.symbol} />
        </div>

        {/* <!-- <div className="col-lg-8 col-sm-12"> --> */}
        <div className="col-lg-12 text-center1">
          <h1 className="display-2"> http://404 </h1>
          <hr />
          <h1 className="display-5">Resource not found</h1>

          <p className="display-6 text-muted">
            <small>
              The requested resource could not be found but may be available
              again in the future.
            </small>
          </p>

          <Link to="/" className="btn btn-primary my-3">
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Http404;
