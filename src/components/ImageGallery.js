import Image from "./Image";

function ImageGallery() {
  return (
    <div className="sm:w-9/12 mx-auto sm:grid grid-cols-3 gap-4">
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  );
}

export default ImageGallery;
