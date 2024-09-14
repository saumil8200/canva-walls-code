/* eslint-disable react/prop-types */
const Button = ({ label, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 w-full rounded focus:outline-none ${className}`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  