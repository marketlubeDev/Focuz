import React from "react";

// Add data structure
const serviceData = [
  {
    title: "Rooms and Suits",
    description:
      "Focuz Habitat offers a range of rooms and suites, including the Deluxe Suite, Two-Bedroom Suite, and Three-Bedroom Family Suite. All accommodations come with modern amenities such as free Wi-Fi, air conditioning, and in-room dining for a comfortable stay.",
    mainImage: "",
    asideImage: "",
    asideTitle: "Lorem ipsum",
  },
  // {
  //   title: "Ayurveda",
  //   description:
  //     "The Focuz Ayurcentre at Focuz Habitat offers a range of authentic Ayurvedic treatments to promote wellness and relaxation. The services are designed to rejuvenate the body and mind, ensuring a holistic healing experience for guests.",
  //   mainImage: "",
  //   asideImage: "",
  //   asideTitle: "Lorem ipsum",
  // },
  // {
  //   title: "Banquet Hall",
  //   description:
  //     "The banquet hall at Focuz Habitat is designed to host a variety of events, from corporate meetings to social gatherings. It offers a spacious and elegant setting, perfect for celebrations and conferences. The venue is equipped with modern amenities to ensure a seamless event experience.",
  //   mainImage: "",
  //   asideImage: "",
  //   asideTitle: "Lorem ipsum",
  // },
];

export default function Service() {
  return (
    <div className="service">
      {serviceData.map((item, index) => (
        <div key={index} className="service__container">
          <div className="service__container__main">
            <h2 className="service__container__main__title">{item.title}</h2>
            <div className="service__container__main__content">
              <div className="service__container__main__content__image">
                <img src={item.mainImage} alt="service" />
              </div>
              <p className="service__container__main__content__description">
                {item.description}
              </p>
            </div>
          </div>

          <div className="service__container__aside">
            <div className="service__container__aside__image">
              <img src={item.asideImage} alt="service" />
            </div>
            <p className="service__container__aside__title">
              {item.asideTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
