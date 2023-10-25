/**
 *
 * @param {Array} data an array containing all offers
 * @param {Object} filteringOptions an object containing the filtering option, this object is filled
 * when searching or clicking on price filtering button
 */
const filterData = (data, filteringOptions, setData) => {
  const { name, price } = filteringOptions;
  let newFilteredArray = [...data]; // Create a copy to avoid mutating original data

  if (name !== "") {
    newFilteredArray = newFilteredArray.filter((sub) =>
      sub.nom.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (price !== null) {
    if (price) {
      newFilteredArray = newFilteredArray
        .slice()
        .sort((a, b) => a.prix - b.prix);
    } else {
      newFilteredArray = newFilteredArray
        .slice()
        .sort((a, b) => b.prix - a.prix);
    }
  }

  setData(newFilteredArray); // Update the filtered array state
};

export default { filterData };
