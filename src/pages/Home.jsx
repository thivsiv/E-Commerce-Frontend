import BestSellers from "../components/BestSellers";  // Importing the BestSellers component
import Hero from "../components/Hero";  // Importing the Hero component
import LatestCollection from "../components/LatestCollection";  // Importing the LatestCollection component
import OurPolicy from "../components/OurPolicy";  // Importing the OurPolicy component
import NewsletterBox from "../components/NewsletterBox";  // Importing the NewsletterBox component
import NewArrivals from "../components/NewArrivals";  // Importing the NewArrivals component
import OurBrands from "../components/OurBrands";  // Importing the OurBrands component

// Functional Component Home
const Home = () => {
  return (
    <div>
      <Hero />  {/* Displaying the Hero section */}
      <LatestCollection />  {/* Displaying the Latest Collection section */}
      <NewArrivals />  {/* Displaying the New Arrivals section */}
      <OurBrands />  {/* Displaying the Our Brands section */}
      <BestSellers />  {/* Displaying the Best Sellers section */}
      <OurPolicy />  {/* Displaying the Our Policy section */}
      <NewsletterBox />  {/* Displaying the Newsletter Box section */}
    </div>
  );
};

export default Home;  // Exporting the Home component
