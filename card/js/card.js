

let myCard = {
    poster: "poster.png",
    type: "blu_ray.png",
    sale: "action.png",
    title1: "Тайная жизнь",
    title2: "домашних животных",
    price: 50,
    sale_percent: 10,
    currency: "руб.",
    rating: 0,
    button: "button_buy.png",
    promotion: false
}

myCard.rating = + prompt ("Введите рейтинг");
myCard.promotion = confirm ("Нажмите 'ОК', если товар на акции");


// Формат полной стоимости
let fullPrice = `${myCard.price},00 ${myCard.currency}`;
let salePrice = "";
let visibility = "";

if (myCard.promotion == true) {
    myCard.sale_percent = + prompt("Введите процент скидки");
    // Формат стоимости с акицей
    salePrice = `${Math.round(myCard.price - myCard.price * myCard.sale_percent / 100)},00 ${myCard.currency}`;    
} else {fullPrice = "";
        salePrice =`${myCard.price},00 ${myCard.currency}`;
        visibility = "style ='visibility: hidden;'";
    }


// Расчет рейтинга
let rank = "";

switch (myCard.rating) {
    case 0:
        rank += "star_border star_border star_border star_border star_border";
        break;
    case 0.5:
        rank += "star_half star_border star_border star_border star_border";
        break;
    case 1:
        rank += "star star_border star_border star_border star_border";
        break;
    case 1.5:
        rank += "star star_half star_border star_border star_border";
        break;
    case 2:
        rank += "star star star_border star_border star_border";
        break;
    case 2.5:
        rank += "star star star_half star_border star_border";
        break;
    case 3:
        rank += "star star star star_border star_border";
        break;
    case 3.5:
        rank += "star star star star_half star_border";
        break;
    case 4:
        rank += "star star star star star_border";
        break;
    case 4.5:
        rank += "star star star star star_half";
        break;
    case 5:
        rank += "star star star star star";
        break;
    default:
        rank += "star_border star_border star_border star_border star_border";
}


let s = `<div class="card">
<div class="poster">
    <img src="images/${myCard.poster}" alt="">
    <img src="images/${myCard.sale}"${visibility}alt="">
    <img src="images/${myCard.type}" alt="">
</div>
<div class="title">
    <div>${myCard.title1}</div>
    <div>${myCard.title2}</div>
</div>
<div class="price">
    <div>${salePrice}</div>
    <div>${fullPrice}</div>
</div>
<div class="rating">
    <span class="material-icons">${rank}</span>
</div>

<div class="buy"><img src="images/${myCard.button}" alt=""></div>`;

cards.innerHTML = s;


    


    