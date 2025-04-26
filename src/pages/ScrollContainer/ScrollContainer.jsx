import React from "react";

export default function Service() {
  return (
    <div className="sectionFive" id="services">
      <div className="sticky-content">
        <div
          className="sticky-content-item"
          style={{ backgroundColor: "white" }}
        >
          <div className="service">
            <div className="service__container">
              <div className="service__container__main">
                <h2 className="service__container__main__title">
                  Rooms and Suits
                </h2>
                <div className="service__container__main__content">
                  <div className="service__container__main__content__image">
                    <img src={""} alt="service" />
                  </div>
                  <p className="service__container__main__content__description">
                    Focuz Habitat offers a range of rooms and suites, including
                    the Deluxe Suite, Two-Bedroom Suite, and Three-Bedroom
                    Family Suite. All accommodations come with modern amenities
                    such as free Wi-Fi, air conditioning, and in-room dining for
                    a comfortable stay.
                  </p>
                </div>
              </div>

              <div className="service__container__aside">
                <div className="service__container__aside__image">
                  <img src={""} alt="service" />
                </div>
                <p className="service__container__aside__title">Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sticky-content-item"
          style={{ backgroundColor: "white" }}
        >
          <div className="service">
            <div className="service__container">
              <div
                className="service__container__aside"
                style={{
                  flexDirection: "column-reverse",
                }}
              >
                <div className="service__container__aside__image">
                  <img src={""} alt="service" />
                </div>
                <p className="service__container__aside__title">Lorem ipsum</p>
              </div>
              <div className="service__container__main">
                <h2
                  className="service__container__main__title"
                  style={{
                    textAlign: "center",
                    paddingLeft: "18%",
                  }}
                >
                  Ayurveda
                </h2>
                <div
                  className="service__container__main__content"
                  style={{
                    flexDirection: "row-reverse",
                  }}
                >
                  <div className="service__container__main__content__image">
                    <img src={""} alt="service" />
                  </div>
                  <p className="service__container__main__content__description">
                    Focuz Habitat offers a range of rooms and suites, including
                    the Deluxe Suite, Two-Bedroom Suite, and Three-Bedroom
                    Family Suite. All accommodations come with modern amenities
                    such as free Wi-Fi, air conditioning, and in-room dining for
                    a comfortable stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sticky-content-item"
          style={{ backgroundColor: "white" }}
        >
          <div className="service">
            <div className="service__container">
              <div className="service__container__main">
                <h2 className="service__container__main__title">
                  Rooms and Suits
                </h2>
                <div className="service__container__main__content">
                  <div className="service__container__main__content__image">
                    <img src={""} alt="service" />
                  </div>
                  <p className="service__container__main__content__description">
                    Focuz Habitat offers a range of rooms and suites, including
                    the Deluxe Suite, Two-Bedroom Suite, and Three-Bedroom
                    Family Suite. All accommodations come with modern amenities
                    such as free Wi-Fi, air conditioning, and in-room dining for
                    a comfortable stay.
                  </p>
                </div>
              </div>

              <div className="service__container__aside">
                <div className="service__container__aside__image">
                  <img src={""} alt="service" />
                </div>
                <p className="service__container__aside__title">Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
