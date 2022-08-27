function Image() {
  return (
    <div className="border-2 border-gray-200">
      <img
        className="w-full"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="px-1 pt-2 pb-1 leading-6">
        <p className="text-purple-900">
          Likes: <span className="text-black">111</span>
        </p>
        <p className="text-purple-900">
          Views: <span className="text-black">111</span>
        </p>
        <p className="text-purple-900">
          Downloads: <span className="text-black">111</span>
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
