import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  // Extract productId from the URL parameters using useParams hook
  const { productId } = useParams();
  
  // Access ShopContext to get product data, currency, and addToCart function
  const { products, currency, addToCart } = useContext(ShopContext);
  
  // State to store fetched product data, selected image, and size
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // Function to fetch product data based on productId
  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Setting the first image by default
    }
  };

  // Fetch product data whenever the productId changes
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  // If productData is available, render the product details
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      
      {/* Product Details Section */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal">
            {/* Loop through each product image */}
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}  // Update selected image on click
                src={item}
                key={index}
                className="w-[50%] sm:w-100 sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product image ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            {/* Main product image */}
            <img className="w-full h-auto" src={image} alt="Product main view" />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          
          {/* Product Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(1024)</p>
          </div>
          
          {/* Product Price */}
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          
          {/* Product Description */}
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          
          {/* Product Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}  // Update selected size on click
                  className={`border py-2 px-4 ${
                    item === size ? 'border-[#005EE3] bg-[#005EE3-100]' : 'border-gray-300'
                  }`}
                  key={index}
                  disabled={item === size}  // Disable button if size is already selected
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={() => addToCart(productData._id, size)} 
            className="bg-[#001147] text-white px-8 py-3 text-sm hover:bg-gray-700 active:bg-gray-800 rounded-lg"
          >
            ADD TO CART
          </button>

          {/* Product Information */}
          <hr className="mt-8 sm:w-4/5" />
          <p>100% Original product.</p>
          <p>Cash on delivery is available for this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Reviews (1024)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>minus facere veniam doloribus asperiores vel, voluptatem, numquam praesentium maiores laborum nihil vero rem accusamus similique assumenda modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum hic facere exercitationem autem tempora porro nesciunt, ipsum dolor facilis sunt incidunt ullam magni odit rerum fuga provident? Minima, iste?</p>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
