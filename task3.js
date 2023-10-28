//Задача №3: Расчет скидки в магазине
//Напишите функцию calculateDiscount(price, discountPercentage), которая принимает цену товара и процент скидки, а затем возвращает сумму с учетом скидки.

function calculateDiscount(price, discountPercentage) {
    var discountAmount = (price * discountPercentage) / 100; //  сумма скидки вычисляется как произведение цены товара на процент скидки и делится на 100. Это представляет собой сумму, на которую снизится исходная цена.
    var discountedPrice = price - discountAmount; //
    return discountedPrice;
  }
  
//var price = 100;
//var discountPercentage = 20;
//var discountedAmount = calculateDiscount(price, discountPercentage);
//console.log("Discounted amount:", discountedAmount);