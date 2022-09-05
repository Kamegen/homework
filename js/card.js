

let myCard = [ {
    poster: "poster.png",
    type: "blu_ray.png",
    sale: "action.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 50,
    sale_percent: 10,
    currency: "руб.",
    rating: 4,
    button: "button_buy.png",
    promotion: true
},
{
    poster: "toy4.jpg",
    type: "blu_ray.png",
    sale: "action.png",
    title1: "История игрушек 4",
    title2: "Приключение Вилкинса",
    price: 60,
    sale_percent: 10,
    currency: "руб.",
    rating: 2.5,
    button: "button_buy.png",
    promotion: true
},
{
    poster: "ferd.jpg",
    type: "blu_ray.png",
    sale: "action.png",
    title1: "Фердинанд",
    title2: "Побег из коровника",
    price: 40,
    sale_percent: 10,
    currency: "руб.",
    rating: 4.5,
    button: "button_buy.png",
    promotion: true
},
]

for (i=0; i<myCard.length; i++) {

// myCard.rating = + prompt ("Введите рейтинг");
// myCard.promotion = confirm ("Нажмите 'ОК', если товар на акции");


// Формат полной стоимости
let fullPrice = `${myCard[i].price},00 ${myCard[i].currency}`;
let salePrice = "";
let visibility = "";

if (myCard[i].promotion == true) {
    // myCard.sale_percent = + prompt("Введите процент скидки");
    // Формат стоимости с акицей
    salePrice = `${Math.round(myCard[i].price - myCard[i].price * myCard[i].sale_percent / 100)},00 ${myCard[i].currency}`;    
} else {fullPrice = "";
        salePrice =`${myCard[i].price},00 ${myCard[i].currency}`;
        visibility = "style ='visibility: hidden;'";
    }


// Расчет рейтинга
let rank = "";

switch (myCard[i].rating) {
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
    <img src="images/${myCard[i].poster}" alt="">
   <!-- <img src="images/${myCard[i].sale}"${visibility}alt="">
    <img src="images/${myCard[i].type}" alt="">
    -->
</div>
<div class="title">
    <div>${myCard[i].title1}</div>
    <div>${myCard[i].title2}</div>
</div>
<div class="price">
    <div>${salePrice}</div>
    <div>${fullPrice}</div>
</div>
<div class="rating">
    <span class="material-icons">${rank}</span>
</div>

<div class="buy"><img src="images/${myCard[i].button}" alt=""></div>`;

cards.innerHTML += s;

}


    


    