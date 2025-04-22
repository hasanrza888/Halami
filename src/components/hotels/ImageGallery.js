import React, { useState } from 'react';
import Modal from '../common/Modal';
import '../../assets/styles/imageGallery.css';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-gallery">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="img-fluid gallery-image"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Image Slider */}
      {selectedImage && (
        <Modal
          title="Gallery View"
          content={
            <div className="text-center">
              <img src={selectedImage} alt="Selected" className="img-fluid" />
            </div>
          }
          onClose={() => setSelectedImage(null)}
          isVisible={true}
        />
      )}
    </div>
  );
};

export default ImageGallery;