import PropTypes from 'prop-types';  // Importing PropTypes for type checking

// Title Component: Displays a title with two text parts
const Title = ({ text1, text2 }) => {
    return (
        <div className="inline-flex gap-2 items-center mb-3">
            {/* Displaying text1 followed by text2 in a styled span */}
            <p className="text-blue-500">
                {text1} <span className="text-blue-700 font-medium">{text2}</span>
            </p>
        </div>
    );
};

// Defining PropTypes to enforce type checking and required fields
Title.propTypes = {
    text1: PropTypes.string.isRequired,  // Ensures text1 is a required string
    text2: PropTypes.string.isRequired,  // Ensures text2 is a required string
};

export default Title;  // Exporting the Title component
