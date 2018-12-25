$(document).ready(() => {
   // Товары
   let product1 = new Product(123, 'Mango People T-shirt', 52 , 'img/p1.jpg');
   let product2 = new Product(456, 'Mango People T-shirt', 52 , "img/p2.jpg");
   let product3 = new Product(125, 'Mango People T-shirt', 52 , "img/p3.jpg");
   let product4 = new Product(126, 'Mango People T-shirt', 52 , 'img/p4.jpg');
   let product5 = new Product(127, 'Mango People T-shirt', 52 , "img/p5.jpg");
   let product6 = new Product(128, 'Mango People T-shirt', 52 , "img/p6.jpg");
   let product7 = new Product(129, 'Mango People T-shirt', 52 , "img/p7.jpg");
   let product8 = new Product(130, 'Mango People T-shirt', 52 , "img/p8.jpg");
   let product9 = new Product1(123, 'Mango People T-shirt', 52 , 'img/forproduct/Layer_43.jpg');
   let product10 = new Product1(456, 'Mango People T-shirt', 52 , "img/forproduct/Layer_44.jpg");
   let product11 = new Product1(125, 'Mango People T-shirt', 52 , "img/forproduct/Layer_45.jpg");
   let product12 = new Product1(126, 'Mango People T-shirt', 52 , 'img/forproduct/Layer_46.png');
   let product13 = new Product1(127, 'Mango People T-shirt', 52 , "img/forproduct/Layer_47.png");
   let product14 = new Product1(128, 'Mango People T-shirt', 52 , "img/forproduct/Layer_48.png");
   let product15 = new Product1(129, 'Mango People T-shirt', 52 , "img/forproduct/Layer_49.png");
   let product16 = new Product1(130, 'Mango People T-shirt', 52 , "img/forproduct/Layer_50.png");
   let product17 = new Product1(131, 'Mango People T-shirt', 52 , "img/forproduct/Layer_51.png");

   // Корзина
    let cart = new Cart('getCart.json');

    // Добавление товара в корзину
    $('.karta').click(e => {
        cart.addProduct(e.currentTarget);
    });
    let cart1 = new Cart1('getCart2.json');
    $('.karta').click(e => {
        cart1.addProduct(e.currentTarget);
    });

    if(window.location.one = "productcard.html"){
        let cart2 = new Cart2('getCart.json');
    }

});