import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  if (!images) {
    images = ["http://pets-images.dev-apis.com/pets/none.jpg"];
  }

  const handleClick = (e) => {
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, idx) => (
          <img
            onClick={handleClick}
            key={photo}
            data-index={idx}
            src={photo}
            className={idx === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
