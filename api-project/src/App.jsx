import { useState, useEffect } from "react";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import ImageList from "./components/imageList";

import "./App.css";

function App() {
  

  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
