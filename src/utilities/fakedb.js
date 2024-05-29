// for managing data

const addToData = id =>{
   let shoppingCart = {};

//    get the shopping cart from localstorage

const storedCart = localStorage.getItem('shopping-cart');

if(storedCart){
    shoppingCart = JSON.parse(storedCart);
}




//    add the data
 const quantity = shoppingCart[id];
 if(quantity){
    const newQuantity = JSON.parse(quantity)+1;
    shoppingCart[id]=newQuantity
 }
 else{
    shoppingCart[id]=1;
 }

 localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}




// remove from the local storage


const removeToData = id => {

  const storedCart = localStorage.getItem('shopping-cart');
  
  if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
        
        const quantity = shoppingCart[id];

        if(quantity){
            const newQuantity = quantity-1;
            shoppingCart[id] = newQuantity;
            
        }
        else{         
                delete shoppingCart[id]
        }
        
        
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        
        
        
    }
    
  }
  

const getTotalPrice = products =>{
  const reducer = (previous, current)=>previous + current.price;
  
  const total = products.reduce(reducer, 0);
  return total;
}
    
}

export{addToData ,removeToData }