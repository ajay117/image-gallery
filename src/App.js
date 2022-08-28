import React, { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchInput from "./components/SearchInput";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [keyword, setKeyword] = useState("");
  const apiKey = process.env.REACT_APP_PIXELBAY_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo`
      );
      const data = await response.json();
      setImages(data.hits);
    };
    fetchData().catch(console.error);
  }, [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(searchTerm);
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <SearchInput
        onChange={handleChange}
        onSubmit={handleSubmit}
        searchTerm={searchTerm}
      />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
