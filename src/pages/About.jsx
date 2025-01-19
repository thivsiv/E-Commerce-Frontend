import Title from "../components/Title";  // Importing the reusable Title component
import { assets } from "../assets/assets";  // Importing asset images
import NewsletterBox from "../components/NewsletterBox";  // Importing the newsletter subscription box component

const About = () => {
  return (
    <div className="bg-gray-50 pb-16">  {/* Main container with background color and padding */}
      
      {/* About Us Section */}
      <div className="text-3xl text-center pt-8 border-t border-gray-200"> 
        {/* Title for the 'About Us' section */}
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      
      <div className="my-12 flex flex-col md:flex-row gap-16 items-center px-6 md:px-20">
        {/* Container for About Thivsiv */}
        <img
          className="w-full md:w-1/2 max-w-md object-contain rounded-lg shadow-lg" 
          src={assets.about_img} 
          alt="About Thivsiv" 
          // Image related to the 'About Thivsiv' content
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-700">
          {/* Text content for the About Thivsiv section */}
          <p>
            Welcome to <span className="text-blue-500 font-semibold">Thivsiv</span>, your one-stop destination for stylish and
            high-quality fashion. At Thivsiv, we believe every piece of clothing
            tells a story, and our mission is to help you express yours with
            confidence and elegance.
          </p>
          <p>
            Our carefully curated collections bring together timeless trends and
            modern comfort, offering something special for every occasion.
            Whether you're looking for casual essentials, sophisticated outfits,
            or bold statement pieces, we have it all.
          </p>
          <p>
            At Thivsiv, quality and customer satisfaction are at the heart of
            everything we do. We pride ourselves on delivering exceptional
            service, premium fabrics, and designs that celebrate individuality.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-3xl text-center py-8">
        {/* Title for the 'Why Choose Us' section */}
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="flex justify-center mt-2">
          {/* Heart symbols indicating affection */}
          <span className="text-blue-400 text-2xl">♥ ♥ ♥</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {/* Features why customers should choose Thivsiv */}
        <div className="border rounded-lg px-6 py-8 flex flex-col gap-4 shadow-md bg-white">
          <h3 className="font-semibold text-lg text-blue-600">Quality Assurance</h3>
          <p className="text-gray-600">
            At Thivsiv, we prioritize exceptional quality. Every piece is
            crafted with meticulous attention to detail, ensuring you receive
            nothing but the best.
          </p>
        </div>
        <div className="border rounded-lg px-6 py-8 flex flex-col gap-4 shadow-md bg-white">
          <h3 className="font-semibold text-lg text-blue-600">Convenience</h3>
          <p className="text-gray-600">
            Enjoy seamless shopping with our user-friendly website and
            easy-to-navigate categories. Your fashion needs are just a click
            away.
          </p>
        </div>
        <div className="border rounded-lg px-6 py-8 flex flex-col gap-4 shadow-md bg-white">
          <h3 className="font-semibold text-lg text-blue-600">
            Exceptional Customer Service
          </h3>
          <p className="text-gray-600">
            Our dedicated customer support team is here to assist you every step
            of the way. We’re committed to your satisfaction and happiness.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <NewsletterBox />
        {/* Section for newsletter subscription */}
      </div>
    </div>
  );
};

export default About;
