const HeaderComponent = () => {
  return (
    <header className="py-5">
      <div className="container px-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
            <div className="text-center my-5">
              <h1 className="display-1 mb-3">Stand up for wildlife</h1>
              <p className="lead fw-normal mb-1">
                Wildlife is Mother Nature's greatest treasure, to protect it, we
                must take every measure. All the creatures are in need, we will
                help them, yes indeed.
              </p>
              <p className="lead fw-normal mb-5">
                We will provide everything what our mother earth needed to save
                it from us. Our project will help all people / social workers /
                NGOs / communities around the glob to help our wildlife and its
                creatures.
              </p>
              <a
                className="btn btn-outline-primary btn-lg"
                href="#scroll-target"
              >
                <i className="bi bi-file-earmark-text"></i>Read our story
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
