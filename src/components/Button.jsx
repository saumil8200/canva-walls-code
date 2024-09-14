/* eslint-disable react/prop-types */
const Button = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="px-4 mx-2 py-2 bg-black text-white rounded hover:bg-gray-800 w-full"
      >
        {label}
      </button>
    );
  };
  
  export default Button;