class Product {
    constructor(id, title, price, src, container = '.boxfori'){
        this.id = id;
        this.title = title;
        this.price = price;
        this.src = src;
        this.container = container;
        this._render();
    }
    _render(){
        let $img;
        let $ahref;
        let $div;
        let $boxkarta;
        let $wrapper = $('<div/>', {
            class: 'item'
        });
        $ahref =  $(`<a href="#" class="product"></a>`);
        $img = $(`<img src="${this.src}" class="product-picture" alt="photo">`);
        $div = $(`<div class="protext"><p class="product-text">Mango People T-shirt</p>
        <p class="product-price productPrice">$52.00</p></div>`);

         $boxkarta = $('<div/>', {
            class: 'boxkarta'
        });

        let $buyBtn = $(`<a class="karta" href="#" data-id="${this.id}" data-price="${this.price}" 
        data-title="${this.title}"  data-src="${this.src}"> <img src="img/addto.svg" alt="addto-svg"> 
           <span class="margintol" > Add to cart</span></a>`);









        // Создаем структуру товара (верстку)
        $ahref.appendTo($wrapper);
        $img.appendTo($ahref);
        $div.appendTo($ahref);
        $boxkarta.appendTo($wrapper);
        $buyBtn.appendTo($boxkarta);
        $(this.container).append($wrapper);
    }
}



class Product1 {
    constructor(id, title, price, src, container = '.boxfori1'){
        this.id = id;
        this.title = title;
        this.price = price;
        this.src = src;
        this.container = container;
        this._render();
    }
    _render(){
        let $img;
        let $ahref;
        let $div;
        let $boxkarta;
        let $wrapper = $('<div/>', {
            class: 'item'
        });
        $ahref =  $(`<a href="#" class="product "></a>`);
        $img = $(`<img src="${this.src}" class="product-picture" alt="photo">`);
        $div = $(`<div class="protext"><p class="product-text">Mango People T-shirt</p>
        <p class="product-price product-price1">$52.00</p></div>`);

        $boxkarta = $('<div/>', {
            class: 'boxkarta'
        });



        let $simbol = $(`<div class="for2form"> 
                   <a href="#" class="karta karta__margin"><img src="img/forproduct/Forma_1.svg" alt="forma"></a>
                   <a href="#" class="karta"><img src="img/forproduct/Forma_heart.svg" alt="forma"></a>
                   </div></div>`);


        let $buyBtn = $(`<div class="for1form"><a class="karta" href="#" data-id="${this.id}" data-price="${this.price}"
        data-title="${this.title}"  data-src="${this.src}"> <img src="img/addto.svg" alt="addto-svg"> 
           <span class="margintol" > Add to cart</span></a></div>`);






        // Создаем структуру товара (верстку)
        $ahref.appendTo($wrapper);
        $img.appendTo($ahref);
        $div.appendTo($ahref);
        $boxkarta.appendTo($wrapper);
        $buyBtn.appendTo($boxkarta);
        $simbol.appendTo($boxkarta);
        $(this.container).append($wrapper);
    }
}





