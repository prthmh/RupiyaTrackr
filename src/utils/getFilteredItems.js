const getFilteredItems = (itemsAry, { sort, category, reset }) => {
  let newAry = [...itemsAry];
  if (sort === "low to high") {
    newAry = [...newAry].sort((a, b) => a.amount - b.amount);
  } else if (sort === "high to low") {
    newAry = [...newAry].sort((a, b) => b.amount - a.amount);
  }

  if (category !== "") {
    newAry = [...newAry].filter((income) => income.category === category);
  }
  if (category === "all") {
    newAry = itemsAry;
  }
  if (reset) {
    newAry = itemsAry;
  }
  return newAry;
};

export default getFilteredItems;
