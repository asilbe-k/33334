let Pr = localStorage.getItem("products");
Pr = Pr ? JSON.parse(Pr) : [];

console.log(Pr);

let product = [];


if (Pr.length > 2) {
    product = Pr;
} else {
    console.log("Mahsulotlar ro'yxati kam. Yaratilmoqda...");

    product = [

    ];

    localStorage.setItem("products", JSON.stringify(product));
}

console.log(product);
