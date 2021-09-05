const Feature = () => {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bolder mb-0">Stand up for wildlife</h2>
          </div>
          <div className="col-lg-8">
            <div className="row gx-5 row-cols-1 row-cols-md-2">
              <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-emoji-laughing"></i>
                </div>
                <h2 className="h5"> Make our yard wildlife friendly </h2>
                <p className="mb-0">
                  We update our policy regularly to keep them transparent
                </p>
              </div>

              <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h2 className="h5">Protect the environment</h2>
                <p className="mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>

              <div className="col mb-5 mb-md-0 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-globe"></i>
                </div>
                <h2 className="h5">Be an educated consumer</h2>
                <p className="mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>

              <div className="col h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-heart"></i>
                </div>
                <h2 className="h5">Protect endangered species</h2>
                <p className="mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
