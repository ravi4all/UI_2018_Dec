window.addEventListener("load", initEvents);

function initEvents() {
    showProducts();
}

function showProducts() {
    var ul = document.querySelector("#productsList");
    for (var i = 0; i < productsList.length; i++) {
        var li = document.createElement("li");
        var id_span = document.createElement("span");
        id_span.innerHTML = productsList[i].p_id;
        var img = document.createElement("img");
        img.setAttribute("src", productsList[i].p_image);
        var name_span = document.createElement("span");
        name_span.innerHTML = productsList[i].p_name;
        var price_span = document.createElement("span");
        price_span.innerHTML = productsList[i].p_price;

        var btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        btn.className = 'btn btn-primary w-100';

        li.appendChild(id_span);
        li.appendChild(img);
        li.appendChild(name_span);
        li.appendChild(price_span);
        li.appendChild(btn);

        ul.appendChild(li);
    }
}