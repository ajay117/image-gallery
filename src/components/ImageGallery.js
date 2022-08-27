import Image from "./Image";

function ImageGallery({ images }) {
  let image = images.map((image) => {
     return <Image key={image.id} image={image} />;
  });
  return <div className="sm:w-9/12 mx-auto sm:grid grid-cols-3 gap-4">
    {image}
  </div>;
}

export default ImageGallery;
