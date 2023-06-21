import styles from "./index.module.css";
import OwlCarousel from "react-owl-carousel";
import Footer from "../../Global/Footer";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Landing = () => {
  const options = {
    responsiveClass: true,
    center: true,
    dots: true,
    loop: true,
    autoplay: true,
    navText: ["", ""],
    smartSpeed: 500,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1366: {
        items: 3,
      },
    },
  };
  return (
    <div className="mainDiv">
      {/* banner section */}
      <div className={styles.bannerDiv}>
        <div className={styles.header}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className={styles.logoDiv}>
                  <img src={"mask-group5@2x.png"} />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className={styles.languageSwitchDiv}>
                  <div className={styles.langLabael}>English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bannerText}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Revolutionzing Sports</h1>
                <p>Delivering next-level sports experiences.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.downArrow}>
          <img src={"group-92@2x.png"} />
        </div>
      </div>
      {/* banner section */}

      {/* models carousel section */}
      <div className={styles.turfCarouselDiv}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className={styles.turfCarouselHeading}>Football turf</h1>
              <p className={styles.turfCarouselText}>
                The first-generation artificial turf surfaces were carpet-like
                in their look and feel, and thusly, a far harder surface than
                grass and soon became known as an unforgiving playing surface
                that was prone to cause more injuries.The first-generation
                artificial turf surfaces were carpet-like in their look and
                feel.
              </p>
              <br />
              <br />
              <div className={styles.butn}>
                <button className="btn">Create Your Own</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <OwlCarousel
              items={3}
              {...options}
              className="owl-theme"
              margin={60}
            >
              <div className="item">
                <img src={"hockey-1@2x.png"} />
              </div>
              <div className="item">
                <img src={"hockey-1@2x.png"} />
              </div>
              <div className="item">
                <img src={"hockey-1@2x.png"} />
              </div>
              <div className="item">
                <img src={"hockey-1@2x.png"} />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* models carousel section */}

      {/* journey section */}
      <div className={styles.journeyAbout}>
        <div className="container w-100 fullWidthContainer">
          <div className="row">
            <div className="col-lg-4 col-md-5 smPadding text-center">
              <div className={styles.journeyLeftDiv}>
                <h1>Athlex Journey</h1>
                <p>You Play, We Plant</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 smPadding greyBkgd">
              <div className="row about_div_txt">
                <div className="col-lg-3 col-md-3 col-sm-2">
                  <h1>About</h1>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-10">
                  <p>
                    The first-generation artificial turf surfaces were
                    carpet-like in their look and feel, and thusly, a far harder
                    surface than grass and soon became known as an unforgiving
                    playing surface that was prone to cause more injuries.The
                    first-generation artificial turf surfaces were carpet-like
                    in their look and feel.The first-generation artificial turf
                    surfaces were carpet-like in their look and feel, and
                    thusly, a far harder surface than grass and soon became
                    known as an unforgiving playing surface that was prone to
                    cause more injuries.The first-generation artificial turf
                    surfaces were.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* journey section */}

      {/* tabs section */}
      <div className="tabsDiv">
        <div className="container w-100 fullWidthContainer">
          <div className="row">
            <div className="col-md-9 padding0">
              <div className={styles.tabContentKw}>
                <div>
                  <h1>01</h1>
                  <h1>Know what you are buying </h1>
                  <p>
                    The first-generation artificial turf surfaces were
                    carpet-like in their look and feel, and thusly, a far harder
                    surface than grass and soon became known as an unforgiving
                    playing surface that was prone to cause more injuries.The
                    first-generation artificial turf surfaces were carpet-like
                    in their look and feel.The first-generation artificial turf
                    surfaces were carpet-like in their look and feel, and
                    thusly, a far harder surface than grass and soon became
                    known as an unforgiving playing surface that was prone to
                    cause more injuries.The first-generation artificial turf
                    surfaces were carpet-like in their look and feel.The
                    first-generation artificial turf surfaces were carpet-like
                    in their look and feel, and thusly, a far harder surface
                    than grass and soon became known as an unforgiving playing
                    surface that was prone to cause more injuries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 padding0">
              <div className={styles.tabHeadKw}>
                <h1>Know About Your Tracks </h1>
                <ul>
                  <li>Turf Description</li>
                  <li className="selectedli">Know what Are You Buying</li>
                  <li>Quality</li>
                  <li>Material</li>
                  <li>Process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tabs section */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Landing;
