import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    //navigate("/");
    navigate(-1); // go back to previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Not Found.</h1>
      <button
        className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 hover:cursor-pointer"
        onClick={handleClick}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
