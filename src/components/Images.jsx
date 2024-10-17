import React, { useContext } from 'react';
import PixabayContaxt from '../context/PixabayContext';

const Images = () => {
  const {imageData} = useContext(PixabayContaxt);
  return (
    <div className="container mt-5">
      <div className='flex'>
        {imageData.map((image) =>
          <div key= {image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="no"></img>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Images