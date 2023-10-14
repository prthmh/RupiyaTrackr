import "./FilterBar.css";

const FilterBar = ({ filters, setFilters, itemsAry }) => {
  const categories = itemsAry.map(({ category }) => category);
  const uniqueCategories = new Set(categories);
  const categoriesAry = [...uniqueCategories];

  const resetFilters = () => {
    setFilters({ sort: null, category: "", reset: true });
  };

  return (
    <div className="filter_bar">
      <h3>Filters:</h3>
      <section className="filters">
        <div>
          <input
            type="checkbox"
            checked={filters.sort === "low to high"}
            onChange={() =>
              setFilters((prevState) => ({
                ...prevState,
                sort: "low to high",
                reset: false,
              }))
            }
          />
          <label>Low to high (By amount)</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={filters.sort === "high to low"}
            onChange={() =>
              setFilters((prevState) => ({
                ...prevState,
                sort: "high to low",
                reset: false,
              }))
            }
          />
          <label>High to Low (By amount)</label>
        </div>
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters((prevState) => ({
              ...prevState,
              category: e.target.value,
              reset: false,
            }))
          }
        >
          <option value="">Select category</option>
          <option value="all">All</option>
          {categoriesAry.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
        <button onClick={resetFilters} className="reset_btn" >Reset Filters</button>
      </section>
    </div>
  );
};

export default FilterBar;
