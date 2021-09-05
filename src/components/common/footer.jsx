import config from "../../utils/config.json";
import FooterLink from "./footer-link";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container 1px- px-lg-5">
        <div className="text-center text-light">
          <p className="">Get notifications</p>
          <FooterLink
            url="https://twitter.com/thewildtoken"
            title="Follow us on twitter"
            icon="bi-twitter"
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <FooterLink
            url="https://t.me/TheWildToken"
            title="Join our community on telegram"
            icon="bi-telegram"
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <FooterLink
            url="https://instagram.com/thewildtoken"
            title="Follow us on instagram"
            icon="bi-instagram"
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <FooterLink
            url="https://www.facebook.com/thewildtoken"
            title="Like us facebook"
            icon="bi-facebook"
          />
          <hr className="divider" />
          <img
            src="https://statics.thewildtoken.com/images/logo/logo-32.png"
            alt={config.token.symbol}
          />
          {config.token.nameLong} ({config.token.symbol})
          <br /> &copy; 2021
          {/* <!-- <br> &quot;  &quot; --> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
