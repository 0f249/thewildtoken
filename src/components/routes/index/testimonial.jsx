const Testimonial = () => {
  return (
    <div className="py-5 bg-dark text-light">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-12">
            <div className="mb-2">
              <div className="display-5">Your voice matters!</div>
              <div className="fs-5 fst-italic">
                We will provide everything what our mother earth needed to save
                it from us.
                <br /> Our project will help all people / social workers / NGOs
                / communities around the glob to help our wildlife and its
                creatures.
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center1">
              {/* <!-- <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." /> --> */}
              <div className="fs-5 fw-bold1 fst-italic">
                {/* <!--
                    <div className="feature bg-primary bg-gradient text-white rounded-circle mb-3">
                        <i className="bi bi-person"></i>
                    </div>
                    --> */}
                {/* &horbar; */}
                {/* <!-- <span className="text-primary mx-1">/</span> --> */}-
                CEO, Wildlife token
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
