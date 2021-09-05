import config from "../../../utils/config.json";

const AirdropSignup = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container px-5 my-5">
        <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
          <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
            <div className="mb-4 mb-xl-0">
              <div className="fs-3 fw-bold1 text-white">
                Free airdrop, claim now
              </div>
              <div className="text-white-50">
                Our system will choose random 1000 people for free airdrop
              </div>
            </div>
            <div className="ms-xl-4">
              <form
                id="fs-frm"
                name="simple-contact-form"
                accept-charset="utf-8"
                action={config.formspree["air-drop"]}
                method="post"
              >
                <div className="input-group mb-2">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Email address..."
                    aria-label="Email address..."
                    aria-describedby="button-newsletter"
                    required="required"
                  />
                  <button
                    className="btn btn-outline-light"
                    id="button-newsletter"
                    type="submit"
                  >
                    Claim
                  </button>
                </div>
              </form>
              <div className="small text-white-50">
                We care about privacy, and will never share your data.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AirdropSignup;
