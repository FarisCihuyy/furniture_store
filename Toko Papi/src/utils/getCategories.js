export default function getCategoryName(products) {
  return ["Semua", ...new Set(products.map((product) => product.category))];
}
