const NewsletterBox = () => {
  // Event handler for form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    // Logic for handling subscription can be added here
    console.log("Form submitted!");  // Temporary log message to indicate form submission
  };

  return (
    <div className="text-center pt-8 pb-8 mb-45"> 
      {/* Padding at top and bottom, and bottom margin added */}
      
      {/* Heading text */}
      <p className="text-2xl font-medium text-[#005EE3]">
        Subscribe now & get 15% off
      </p>
      
      {/* Description text */}
      <p className="text-gray-400 mt-3">
        Don’t miss out! Join our community and enjoy an exclusive 15% 
        discount on your first purchase. Be the first to hear about new arrivals, 
        special offers, and style tips straight to your inbox. Subscribe today and start saving!
      </p>
      
      {/* Form for subscription */}
      <form
        onSubmit={onSubmitHandler}  // Attach the submit event handler
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        {/* Email input field */}
        <input
          id="email"
          name="email"
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
          required  // HTML5 constraint to make sure the field is not empty
        />
        {/* Subscribe button */}
        <button 
          className="bg-[#001147] text-white text-xs px-10 py-4" 
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
      
    </div>
  );
};

export default NewsletterBox;
