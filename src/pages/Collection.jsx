import { useContext, useEffect, useState } from "react"; 
import { ShopContext } from "../context/ShopContext"; 
import { assets } from "../assets/assets"; 
import clsx from "clsx"; 
import Title from "../components/Title"; 
import ProductItem from "../components/ProductItem"; 

const Collection = () => {
  // Using useContext to access the products and other state from ShopContext
  const { products, search, showSearch } = useContext(ShopContext); 

  // Local state for managing the filter view
  const [showFilter, setShowFilter] = useState(false); 
  const [filterProducts, setFilterProducts] = useState(products || []); 
  const [category, setCategory] = useState([]); // State for category selection
  const [subCategory, setSubCategory] = useState([]); // State for sub-category selection
  const [sortType, setSortType] = useState('relevant'); // State for sorting type

  // Function to toggle category selection
  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value) ? prev.filter((item) => item !== e.target.value) : [...prev, e.target.value]
    );
  };

  // Function to toggle sub-category selection
  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value) ? prev.filter((item) => item !== e.target.value) : [...prev, e.target.value]
    );
  };

  // Function to apply the selected filters to the products
  const applyFilter = () => {
    let productsCopy = [...products];
    
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }
    
    setFilterProducts(productsCopy);
  };

  // Function to sort the filtered products based on sortType
  const sortProduct = () => {
    let sortedProducts = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProducts(sortedProducts);
  };

  // Apply filters whenever category, subCategory, search, or showSearch changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  // Sort products whenever sortType changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter section */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center gap-2 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} 
            src={assets.dropdown_icon} 
            alt="Toggle Filter"
          />
        </p>

        <div
          className={clsx(
            "border border-gray-300 pl-5 py-3 mt-6 sm:block",
            { hidden: !showFilter && "sm:hidden" }
          )}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* Displaying category options */}
            {['Men', 'Women', 'Kids'].map((item) => (
              <p className="flex gap-2" key={item}>
                <input className="w-3" type="checkbox" value={item} onChange={toggleCategory} /> {item}
              </p>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            "border border-gray-300 pl-5 py-3 my-5 sm:block",
            { hidden: !showFilter && "sm:hidden" }
          )}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* Displaying sub-category options */}
            {['Topwear', 'Bottomwear', 'Fullwear', 'Winterwear'].map((item) => (
              <p className="flex gap-2" key={item}>
                <input className="w-3" type="checkbox" value={item} onChange={toggleSubCategory} /> {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Main collection display */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {/* Rendering filtered products */}
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} {...item} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
