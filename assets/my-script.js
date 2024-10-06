document.addEventListener("DOMContentLoaded", function() {
    // "hasClass" を "classList.contains" に変換
    if (document.querySelector("div.cart__check")) {

        // "attr" を "setAttribute" に変換
        document.querySelector(".cart__checkout-button").setAttribute("disabled", "disabled");

        // jQueryのclickイベントをJavaScriptのaddEventListenerに変換
        document.getElementById("cart_check").addEventListener("click", function() {
            // "prop" を JavaScriptの "checked" プロパティに変換
            if (!this.checked) {
                document.querySelector(".cart__checkout-button").setAttribute("disabled", "disabled");
            } else {
                document.querySelector(".cart__checkout-button").removeAttribute("disabled");
            }
        });
    }
});