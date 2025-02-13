document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("addPr");
    const products = JSON.parse(localStorage.getItem("products")) || [];

    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const productName = document.getElementById("title").value;
        const productPrice = document.getElementById("price").value;
        const productImage = document.getElementById("image").value;

        const newProduct = {
            title: productName,
            price: productPrice,
            image: productImage,
        };

        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));

        alert("Mahsulot muvaffaqiyatli qo'shildi!");
        productForm.reset();
        displayProducts();
    });

    const displayProducts = () => {
        const productContainer = document.querySelector(".row");
        productContainer.innerHTML = '';
        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-3", "mt-2");
            productCard.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.price}$</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
    };

    displayProducts();
});