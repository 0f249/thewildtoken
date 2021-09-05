import config from "../../../utils/config.json";
import InputFloating from "../../common/inputs/input-floating";

const ContactForm = () => {
  const styles = {
    height: "10rem",
  };

  return (
    <section className="py-5">
      <div className="container px-5">
        {/* <!-- Contact form--> */}
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div className="text-center mb-5">
            <div className="feature bg-secondary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="display-4">Get in touch</h1>
            <h3 className="display-6 text-muted">We'd love to hear from you</h3>
          </div>

          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form
                id="fs-frm"
                name="simple-contact-form"
                acceptCharset="utf-8"
                action={config.formspree["contact-form"]}
                method="post"
              >
                <InputFloating
                  type="text"
                  name="name"
                  floatingText="Full name"
                />
                <InputFloating
                  type="email"
                  name="email"
                  floatingText="Email address"
                />
                <InputFloating
                  type="phone"
                  name="mobile"
                  floatingText="Phone / Mobile number"
                />
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Enter your message here..."
                    style={styles}
                    required="required"
                  ></textarea>
                  <label forhtml="message">Message</label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg disabled1"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
