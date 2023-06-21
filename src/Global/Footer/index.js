import styles from "./index.module.css";
const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className="container fullWidthContainer">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-3 text-center">
            <img src={"mask-group4@2x.png"} />
          </div>
          <div className="col-lg-9 col-md-10 col-sm-9">
            <div className="bordr_botm">
              <div className="row">
                <div className="col-md-4">
                  <div className={styles.WMS}>
                    <h1>We Make Sports</h1>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className={styles.mailSend}>
                    <div>
                      <span>Connect With Us</span>
                      <input
                        type="text"
                        placeholder="Enter your e-mail address"
                        className="form-control"
                      />
                      <button className="btn">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.botm_menu}>
              <ul>
                <li>Home</li>
                <li>Configurator</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className={styles.bottomMostUl}>
            <li>Credits</li>
            <li>Policy</li>
            <li>Cookie Settings</li>
          </ul>
          <div className={styles.copywrightTxt}>
            @Copyright2022Aathlex-VAT number012354567890
            <div>
              <ul className={styles.socialmedia_ul}>
                <li>
                  <img src={"twitter.png"} />
                </li>
                <li>
                  <img src={"facebook.png"} />
                </li>
                <li>
                  <img src={"linkedin.png"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
