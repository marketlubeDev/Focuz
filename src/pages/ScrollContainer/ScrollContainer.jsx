import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Service() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
                    <img
                      src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745679474/c0e1569ef69ced9e4ef913806e613167a7481a7c_2_1_istpof.jpg"
                      alt="service"
                    />
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
                  <img
                    src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745679469/8b1e5768f91ac77e31527f519bb6651434bc8b06_1_slsnxw.jpg"
                    alt="service"
                  />
                </div>
                {/* <p className="service__container__aside__title">Lorem ipsum</p> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="sticky-content-item"
          style={{ backgroundColor: "white" }}
        >
          <div className="service">
            <div className="service__container mobileser">
              <div
                className="service__container__aside"
                style={{
                  flexDirection: "column-reverse",
                }}
              >
                <div className="service__container__aside__image">
                  <img
                    src={
                      "https://res.cloudinary.com/dznxxalrb/image/upload/v1745679469/4df7a2120cea6f0fce3a8a32a4fd9f63a2579144_1_em9wie.jpg"
                    }
                    alt="service"
                  />
                </div>
                {/* <p className="service__container__aside__title">Lorem ipsum</p> */}
              </div>
              <div className="service__container__main">
                <h2
                  className="service__container__main__title newHead"
                  style={{}}
                >
                  Ayurveda
                </h2>
                <div
                  className="service__container__main__content rowReverse"
                  // style={{
                  //   flexDirection: "row-reverse",
                  // }}
                >
                  <div className="service__container__main__content__image">
                    <img
                      src={
                        isMobile
                          ? "https://res.cloudinary.com/dznxxalrb/image/upload/v1745833615/29e115a66fa97268038bf3eaac51390a5e038cd6_1_p3k7yv.jpg"
                          : "https://res.cloudinary.com/dznxxalrb/image/upload/v1745834068/29e115a66fa97268038bf3eaac51390a5e038cd6_1_a0flen.jpg"
                      }
                      alt="service"
                    />
                  </div>
                  <p className="service__container__main__content__description">
                    The Focuz Ayurcentre at Focuz Habitat offers a range of
                    authentic Ayurvedic treatments to promote wellness and
                    relaxation. The services are designed to rejuvenate the body
                    and mind, ensuring a holistic healing experience for guests.
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
                  Banquet Hall
                </h2>
                <div className="service__container__main__content">
                  <div className="service__container__main__content__image">
                    <img
                      src={
                        "https://res.cloudinary.com/dznxxalrb/image/upload/v1745679470/67c2fcd324753bc2207b275fe7066da20088fe26_1_ipumjc.jpg"
                      }
                      alt="service"
                    />
                  </div>
                  <p className="service__container__main__content__description">
                    The banquet hall at Focuz Habitat is designed to host a
                    variety of events, from corporate meetings to social
                    gatherings. It offers a spacious and elegant setting,
                    perfect for celebrations and conferences. The venue is
                    equipped with modern amenities to ensure a seamless event
                    experience.
                  </p>
                </div>
              </div>

              <div className="service__container__aside">
                <div className="service__container__aside__image">
                  <img
                    src={
                      "https://res.cloudinary.com/dznxxalrb/image/upload/v1745679468/cfa3a7b098611acfd30a6b3887c6efc173c9fb38_1_zrz1kf.jpg"
                    }
                    alt="service"
                  />
                </div>
                {/* <p className="service__container__aside__title">Lorem ipsum</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
