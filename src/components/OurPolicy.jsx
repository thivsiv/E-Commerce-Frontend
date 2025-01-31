import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {/* Policy Item 1: Easy Exchange Policy */}
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange Icon" />
        <p>Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle-free exchange policy</p>
      </div>

      {/* Policy Item 2: 7 Days Return Policy */}
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Quality Icon" />
        <p>7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>

      {/* Policy Item 3: Best Customer Support */}
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Customer Support Icon" />
        <p>Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer service support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
