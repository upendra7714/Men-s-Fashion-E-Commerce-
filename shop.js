document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", function () {
            const product = {
                name: this.dataset.name,
                price: this.dataset.price,
                image: this.dataset.image
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product added to cart!");
        });
    });
});
