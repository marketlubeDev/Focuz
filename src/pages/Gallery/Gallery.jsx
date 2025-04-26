import React from "react";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__left">
          <div className="gallery__image gallery__image--top">
            <img
              src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745661809/3eb4708b4c4efa020b2ccfd5d83eca0114e2f0c6_httx6m.jpg"
              alt="Ayurvedic treatment"
            />
          </div>
          <div className="gallery__image gallery__image--middle">
            <img
              src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745677985/51c08ebc0a72f0146324574c0ac338b185e346b7_1_n4rwt9.jpg"
              alt="Living room"
            />
          </div>
          <div className="gallery__image gallery__image--bottom">
            <img
              src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745677985/43633923a0c799e38b949e759a1ba9c4c3a405a2_1_vsjuma.jpg"
              alt="Gym"
            />
          </div>
        </div>

        <div className="gallery__center">
          <div className="gallery__content">
            <p className="gallery__subtitle">with us</p>
            <h2 className="gallery__title">Ayurveda</h2>
            <p className="gallery__description">
              We offer traditional therapies focused on relaxation and
              well-being.Treatments are designed to restore balance naturally
              and gently.Enjoy a peaceful environment guided by experienced
              therapists.Reconnect with yourself through the timeless science of
              Ayurveda.Each session is thoughtfully curated to support your body
              and mind.Our centre is a serene space to unwind, recharge, and
              heal deeply.
            </p>
            <button className="gallery__button">Contact</button>
          </div>
        </div>

        <div className="last">
          <img
            src="https://res.cloudinary.com/dznxxalrb/image/upload/v1745677986/68c4b0904b783c3b8f74d4f0f464728df4f4cefb_1_ztgjaf.jpg"
            alt="Swimming Pool"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
