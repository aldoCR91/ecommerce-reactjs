
const data = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

export default data;