
function Image({image}) {
  return (
    <div className="border-2 border-gray-200">
      <img
        className="w-full"
        src={image.previewURL}
        alt=""
      />
      <div className="px-1 pt-2 pb-1 leading-6">
        <p className="text-purple-900">
          Likes: <span className="text-black">{image.likes}</span>
        </p>
        <p className="text-purple-900">
          Views: <span className="text-black">{image.views}</span>
        </p>
        <p className="text-purple-900">
          Downloads: <span className="text-black">{image.downloads}</span>
        </p>
        <div className="pt-2 pb-1 overflow-auto">
          <span className="mr-2 bg-gray-100 p-1 text-blue-500">#cat</span>
          <span className="mr-2 bg-gray-100 p-1 text-blue-500">#beautiful</span>
          <span className="bg-gray-100 p-1 text-blue-500">#pet</span>
        </div>
      </div>
    </div>
  );
}

export default Image;
