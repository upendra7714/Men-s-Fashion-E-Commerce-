document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const proceedButton = document.getElementById("proceed-to-payment");

    function renderCart() {
        cartContainer.innerHTML = "";
        cart.forEach((product, index) => {
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>Price: $${product.price}</p>
                <button class="remove-item"  data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(item);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.dataset.index;
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });

        // Show or hide Proceed to Payment button
        proceedButton.style.display = cart.length > 0 ? "block" : "none";
    }

    proceedButton.addEventListener("click", function () {
        window.location.href = "payment.html"; // Redirect to payment page
    });

    renderCart();
});
