import React, { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchInput from "./components/SearchInput";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pixabay.com/api/?key=29536835-e4c772172b65a8b03c66c72ae&q=yellow+flowers&image_type=photo"
      );
      const data = await response.json();
      setImages(data.hits);
    };
    fetchData().catch(console.error);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
