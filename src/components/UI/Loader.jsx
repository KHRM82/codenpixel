const Loader = ({ size = "medium" }) => {
  const sizes = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizes[size]} border-4 border-primary border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loader;
