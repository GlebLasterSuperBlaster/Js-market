class Cart {
    constructor(source, container = '.megamenu3'){
        this.source = source;
        this.container = container;
        this.countGoods = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общее стоимость товаров в корзине
        this.cartItems = []; // Массив со всеми товарами
        this._init(this.source);
    }
    _render(){
        let $cartItemsDiv = $('<div/>', {
            class: 'korzinaMain'
        });
        let $totalProducts = $(`<div class="total500 cart-summary sum-price"><span class="tota">TOTAL </span> 
        <span class="total"> &#36 104</span></div>`);

        let $totalPrice = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        let $buttonContainer = $(`<div class="Checkout"><a  class="buttonDecore1" 
         href="chekout.html"> Checkout</a></div>`);
        let $buttonContainer1 = $(`<div class="gocart"><a  class="buttonDecore" 
         href="productcard.html"> Go to cart</a></div>`);


        $cartItemsDiv.appendTo($(this.container));
        $totalProducts.appendTo($(this.container));
        $totalPrice.appendTo($(this.container));
        $buttonContainer.appendTo($(this.container));
        $buttonContainer1.appendTo($(this.container));
    }
    _init(source){
        this._render();
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents){
                    this.cartItems.push(product);
                    this._renderItem(product)
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum();
            })
    }
    _renderSum(){
        $('.total').text(`$${this.amount}`);


    }
    _renderItem(product){
        let $obertka = $('<div/>', {

            class: 'korzina1',
            'data-product': product.id_product
        });
        let $container = $('<div/>', {
            class: 'forimage',
            'data-product': product.id_product
        });

        let $fortextin = $('<div/>', {
            class: 'fortextin',
            'data-product': product.id_product
        });


        $container.append($(`<img class="minImg" src="${product.src}" alt="image">`));
        $fortextin.append($(`<span class="rebox">${product.product_name}</span>`));

        let $delBtn = $('<div class="krest"> <i class="fas fa-star clorstar"></i>' +
            '<i class="fas fa-star clorstar"></i><i class="fas fa-star clorstar"></i><i class="fas fa-star clorstar">' +
            '</i><i class="fas fa-star clorstar"></i>' +
            '<i class="fas fa-times-circle krest-color imgkresr"></i></div>');
        $fortextin.append($delBtn);
        $fortextin.append($(`<div class="for250">
        <div class="product-quantity" >${product.quantity}x</div><div class="product-price">$${product.price}.</div>
        </div>`));
        $delBtn.on('click','.imgkresr',() => {
            this._remove(product.id_product);
        });
        $obertka.append($container);
        $obertka.append($fortextin);
        $obertka.appendTo($('.korzinaMain'));

    }
    _updateCart(product){
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(`${product.quantity}x`);
        $container.find('.product-price').text(`$${product.quantity*product.price}`);
    }
    addProduct(element){
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find){
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
        } else {
            let product = {
                id_product: productId,
                src: $(element).data('src'),
                price: +$(element).data('price'),
                product_name: $(element).data('title'),
                quantity: 1
            };
            this.cartItems.push(product);
            this.countGoods++;
            this.amount += product.price;
            this._renderItem(product);
        }
        this._renderSum();
    }
    _remove(idProduct){
        // TODO: удаление товара из корзины
        let find = this.cartItems.find(product => product.id_product === idProduct);
        if(find.quantity > 1){
            find.quantity--;
            this._updateCart(find)
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            $(`div[data-product="${idProduct}"]`).remove();
        }
        this.countGoods--;
        this.amount -= find.price;
        this._renderSum();
    }
}

class Cart1 {
    constructor(source, container = '.megamenu31'){
        this.source = source;
        this.container = container;
        this.countGoods = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общее стоимость товаров в корзине
        this.cartItems = []; // Массив со всеми товарами
        this._init1(this.source);
    }
    _render1(){
        let $cartItemsDiv = $('<div/>', {
            class: 'korzinaMain1'
        });
        let $totalProducts = $(`<div class="total500 cart-summary sum-price"><span class="tota">TOTAL </span> 
        <span class="total"> &#36 104</span></div>`);

        let $totalPrice = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        let $buttonContainer = $(`<div class="Checkout"><a  class="buttonDecore1" 
         href="chekout.html"> Checkout</a></div>`);
        let $buttonContainer1 = $(`<div class="gocart"><a  class="buttonDecore" 
         href="productcard.html"> Go to cart</a></div>`);


        $cartItemsDiv.appendTo($(this.container));
        $totalProducts.appendTo($(this.container));
        $totalPrice.appendTo($(this.container));
        $buttonContainer.appendTo($(this.container));
        $buttonContainer1.appendTo($(this.container));
    }
    _init1(source){
        this._render1();
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents){
                    this.cartItems.push(product);
                    this._renderItem(product)
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum();
            })
    }
    _renderSum(){
        $('.total').text(`$${this.amount}`);


    }
    _renderItem(product){
        let $obertka = $('<div/>', {
            'data-product': product.id_product,
            class: 'korzina1'
        });
        let $container = $('<div/>', {
            class: 'forimage',
            'data-product': product.id_product
        });

        let $fortextin = $('<div/>', {
            class: 'fortextin',
            'data-product': product.id_product
        });


        $container.append($(`<img class="minImg" src="${product.src}" alt="image">`));
        $fortextin.append($(`<span class="rebox">${product.product_name}</span>`));

        let $delBtn = $('<div class="krest"> <i class="fas fa-star clorstar"></i>' +
            '<i class="fas fa-star clorstar"></i><i class="fas fa-star clorstar"></i><i class="fas fa-star clorstar">' +
            '</i><i class="fas fa-star clorstar"></i>' +
            '<i class="fas fa-times-circle krest-color imgkresr"></i></div>');
        $fortextin.append($delBtn);
        $fortextin.append($(`<div class="for250">
        <div class="product-quantity" >${product.quantity}x</div><div class="product-price">$${product.price}.</div>
        </div>`));
        $delBtn.on('click','.imgkresr',() => {
            this._remove(product.id_product);
        });
        $obertka.append($container);
        $obertka.append($fortextin);
        $obertka.appendTo($('.korzinaMain1'));

    }
    _updateCart(product){
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(`${product.quantity}x`);
        $container.find('.product-price').text(`$${product.quantity*product.price}`);
    }
    addProduct(element){
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find){
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
        } else {
            let product = {
                id_product: productId,
                src: $(element).data('src'),
                price: +$(element).data('price'),
                product_name: $(element).data('title'),
                quantity: 1
            };
            this.cartItems.push(product);
            this.countGoods++;
            this.amount += product.price;
            this._renderItem(product);
        }
        this._renderSum();
    }
    _remove(idProduct){
        // TODO: удаление товара из корзины
        let find = this.cartItems.find(product => product.id_product === idProduct);
        if(find.quantity > 1){
            find.quantity--;
            this._updateCart(find)
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            $(`div[data-product="${idProduct}"]`).remove();
        }
        this.countGoods--;
        this.amount -= find.price;
        this._renderSum();
    }
}

class Cart2 {
    constructor(source, container = '.megamenu39'){
        this.source = source;
        this.container = container;
        this.countGoods = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общее стоимость товаров в корзине
        this.cartItems = []; // Массив со всеми товарами
        this._init(this.source);
    }
    _render(){
        let $cartItemsDiv = $('<div/>', {
            class: 'korzinaMain2'
        });
        let $totalPrice = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        let $flexbuttom = $('<div/>', {
            class: 'flex__button'
        });
        let $buttonContainer = $(`<div class="button1"> CLEAR SHOPPING CART</div>`);
        let $buttonContainer1 = $(`<div class="button1" ><a  class="buttonDecore" 
         href="productjs.html"> CONTINUE SHOPPING</a></div>`);
        $flexbuttom.append($buttonContainer);
        $flexbuttom.append($buttonContainer1);
        $buttonContainer.click(() => {
            $cartItemsDiv.remove()
        });

        $cartItemsDiv.appendTo($(this.container));
        $totalPrice.appendTo($(this.container));
        $flexbuttom.appendTo($(this.container));
    }
    _init(source){
        this._render();
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents){
                    this.cartItems.push(product);
                    this._renderItem(product)
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum();
            })
    }
    _renderSum(){
        $('.greyspace__text').text(`Sub total $${this.amount}`);
        $('.greyspace__text_1_red').text(`$${this.amount}`);


    }
    _renderItem(product){
        let $obertka = $('<div/>', {
            'data-product': product.id_product,
            class: "picture"
        });
        let $obertaLeft = $('<div/>', {
            'data-product': product.id_product,
            class: "text_space"
        });
        let $container = $('<div/>', {
            class: 'forimage',
            'data-product': product.id_product
        });

        let $fortextin = $('<div/>', {
            class: 'marginBlock',
            'data-product': product.id_product
        });

        let $textin = $('<div/>', {
            class: 'margintextnear',
            'data-product': product.id_product
        });
        let $price = $('<div/>', {
            'data-product': product.id_product
        });
        let $quantity = $('<div/>', {
            class: "borderfor2",
            'data-product': product.id_product
        });

        let $shipping = $('<div/>', {
            class: 'shipping',
            'data-product': product.id_product
        });
        let $total = $('<div/>', {
            class: "productPrice",
            'data-product': product.id_product
        });
        let $delBtn = $('<div/>', {
            'data-product': product.id_product
        });


        $container.append($(`<img class="minImg" src="${product.src}" alt="image">`));
        $fortextin.append($(`<span class="textnearpicture1">${product.product_name}</span>`));
        $textin.append($(`<div class="textnearpicture2"><span class="colorblack">Color:</span> Red</div>
        <div class="textnearpicture2"> <span class="colorblack"> Size:</span> Xll </div></div>`));
        $container.append($fortextin);
        $fortextin.append($textin);
        $price.append(`$${product.price}`);
        $quantity.append(`${product.quantity}`);
        $shipping.text('FREE');
        $total.append(`$${product.quantity*product.price}`);
        $delBtn.append($('<i class="fas fa-times-circle krest-color imgkresr"></i>'));
        $obertaLeft.append($price);
        $obertaLeft.append($quantity);
        $obertaLeft.append($shipping);
        $obertaLeft.append($total);
        $obertaLeft.append($delBtn);
        $delBtn.click(() => {
            this._remove(product.id_product);
        });
        $obertka.append($container);
        $obertka.append($obertaLeft);
        $obertka.appendTo($('.korzinaMain2'));

    }
    _updateCart(product){
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(`${product.quantity}x`);
        $container.find('.product-price').text(`$${product.quantity*product.price}`);
    }
    addProduct(element){
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find){
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
        } else {
            let product = {
                id_product: productId,
                src: $(element).data('src'),
                price: +$(element).data('price'),
                product_name: $(element).data('title'),
                quantity: 1
            };
            this.cartItems.push(product);
            this.countGoods++;
            this.amount += product.price;
            this._renderItem(product);
        }
        this._renderSum();
    }
    _remove(idProduct){
        // TODO: удаление товара из корзины
        let find = this.cartItems.find(product => product.id_product === idProduct);
        if(find.quantity > 1){
            find.quantity--;
            this._updateCart(find)
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            $(`div[data-product="${idProduct}"]`).remove();
        }
        this.countGoods--;
        this.amount -= find.price;
        this._renderSum();
    }
}




