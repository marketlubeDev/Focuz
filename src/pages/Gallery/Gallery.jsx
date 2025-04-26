import React from "react";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__left">
          <div className="gallery__image gallery__image--top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOF6Lojx2ESGN4mGyvHcT_5WxaKxhGOsGDw&s" alt="Ayurvedic treatment" />
          </div>
          <div className="gallery__image gallery__image--middle">
            <img src="https://images.trvl-media.com/lodging/82000000/81070000/81068600/81068516/8a3f6d11.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="Living room" />
          </div>
          <div className="gallery__image gallery__image--bottom">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/378084998.jpg?k=f9cfa1e2fe173ad184d0ec2017e53ec51c2701064a434fa6e0c970359ae1710e&o=&hp=1" alt="Gym" />
          </div>
        </div>

        <div className="gallery__center">
          <div className="gallery__content">
            <p className="gallery__subtitle">with us</p>
            <h2 className="gallery__title">Ayurveda</h2>
            <p className="gallery__description">
            We offer traditional therapies focused on relaxation and well-being.Treatments are designed to restore balance naturally and gently.Enjoy a peaceful environment guided by experienced therapists.Reconnect with yourself through the timeless science of Ayurveda.Each session is thoughtfully curated to support your body and mind.Our centre is a serene space to unwind, recharge, and heal deeply.
            </p>
            <button className="gallery__button">Contact</button>
          </div>
        </div>

        <div className="last">
          <img src="https://c4.wallpaperflare.com/wallpaper/159/802/513/room-interior-home-house-wallpaper-preview.jpg" alt="Swimming Pool" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
