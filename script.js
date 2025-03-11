document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-name");
            const itemPrice = this.getAttribute("data-price");

            const item = { name: itemName, price: itemPrice };
            cartItems.push(item);

            localStorage.setItem("cart", JSON.stringify(cartItems));
            window.location.href = "cart.html";
        });
    });
});
