const categoriesSum = document.querySelector("#categories");
const categoriesSecondeSum = categoriesSum.querySelectorAll("li.item");

const categoryCount = categoriesSecondeSum.length;
console.log(`numbers of categories: ${categoryCount}`);

categoriesSecondeSum.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElementsCount = categoryItem.querySelectorAll("ul li").length;

  console.log(`categories: ${categoryTitle}`);
  console.log(`elements: ${categoryElementsCount}`);
});
