const categories = document.querySelectorAll(".categor-item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll(".categor-item-element");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
