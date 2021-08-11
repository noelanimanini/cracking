// let array = [ {    name: “Latte”,    price: 3.95,    available: true,    image: { url: “https: //www.starbucks.com/images/latte.jpg”    }  }]

//Q) given an array of objects, return an array of products that are available
/*
approach: loop through the array and access the keys in the object for available that is true, if it is true, then push into an 
ans array the product name 
*/
const getProducts = (arr1) => {
  //make ans variable = array
  let ans = [];

  //loop through the object
  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    if (current.available) {
      ans.push(current.name);
    }
  }

  return ans;
};

getProducts(array);

const products = ({ products }) => {
  //create a nested function
  const loopProducts = (products) => {
    return (
      <div className="products">
        {products.name}
        <img src={products.image} style={{ borderRadius: "100%" }} />
      </div>
    );
  };

  return;
  <div></div>;
};

products();
