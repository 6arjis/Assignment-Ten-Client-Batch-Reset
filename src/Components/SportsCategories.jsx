import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SportsCategories = () => {
  const allEquipments = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (allEquipments?.length) {
      const uniqueCategories = [
        ...new Set(
          allEquipments.map((e) => e.categoryName?.trim() || "Uncategorized")
        ),
      ];
      setCategories(uniqueCategories);
    }
  }, [allEquipments]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        Product Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-2 text-sm md:text-base rounded-lg transition-all "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SportsCategories;
