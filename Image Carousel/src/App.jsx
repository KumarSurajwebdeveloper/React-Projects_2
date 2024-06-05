import React, { useState, useEffect } from 'react';
import ImageCarousel from './Component/ImageCarousel';
import './App.css'


const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');


  const getImages = async (searchQuery) => {
    try {
      const API_KEY = 'nWTNpNumyfu0K4JQiXsV4uTRA92N7ln2ZFKJwXCUxpUEzGScRhT8M89T';
      const totalPages = 8; // Number of pages to fetch (adjust as needed)
      const perPage = 5; // Number of images per page
      // const query = "nature";

      const allImages = [];

      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${perPage}&page=${page}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log('API response:', data)
          const pageImages = data.photos.map((photo) => photo.src.landscape);
          // console.log('Page Images:', pageImages);
          allImages.push(...pageImages);
        } else {
          console.error(`Failed to fetch images for page ${page}`);
        }
      }
      // console.log('All Images:', allImages);
      setImages(allImages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setIsLoading(false);
    }
  };



  useEffect(() => {
    getImages();
  }, [searchQuery]); // Empty dependency array ensures this effect runs only once on component mount
  // console.log('Images:', images);

  const handleSearch = () => {
    setIsLoading(true);
    getImages(searchQuery);
  };



  return (
    <div>
      <h1 style={{ textAlign: "center", color: 'rgb(0,0,0)', marginTop: '2vh' }}>Image Carousel</h1>
      <div className='search'>
        <input
          className='input'
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder ="Enter search query" style={{color:'crimson'}}
        />
        <button onClick={handleSearch} className='searchbtn'>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : images.length > 0 ? (
        <ImageCarousel images={images} />
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default App;
