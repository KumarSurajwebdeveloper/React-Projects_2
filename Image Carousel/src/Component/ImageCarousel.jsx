import React from 'react';
import './ImageCarousel.css'

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleClickImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="image-carousel">
            <img
                className="carousel-image"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                style={{
                    minWidth: '500px', // Set maximum width
                    minHeight: '300px', // Set maximum height
                    width: '100%', // Ensure image fills container width
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '8px', // Optional: Add border radius
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add box s
                    marginBottom: '16px', // Optional: Add bottom margin
                    marginRight: '70px',
                    display: 'flex',
                    justifyContent:'center'
                }}
            />

            <div className="navigation-buttons">
                <button onClick={goToPrevious} className="btnleft">Previous</button >
                <button onClick={goToNext} className="btnright">Next</button>
            </div>
            <div className="thumbnail-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleClickImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
