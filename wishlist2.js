document.getElementById("wishlistForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var itemInput = document.getElementById("itemInput");
  var shopInput = document.getElementById("shopInput");
  var priceInput = document.getElementById("priceInput");

  var item = itemInput.value.trim();
  var shop = shopInput.value.trim();
  var price = priceInput.value.trim();

  if (item !== "" || shop !== "" || price !== "") {
    var li = document.createElement("li");

    var itemInfo = document.createElement("div");

    var itemName = document.createElement("p");
    itemName.textContent = "Item: " + item;
    itemInfo.appendChild(itemName);

    var itemShop = document.createElement("p");
    itemShop.textContent = "Shop: " + shop;
    itemInfo.appendChild(itemShop);

    var itemPrice = document.createElement("p");
    itemPrice.textContent = "Price: $" + price;
    itemInfo.appendChild(itemPrice);

    li.appendChild(itemInfo);

    document.getElementById("wishlistItems").appendChild(li);

    itemInput.value = "";
    shopInput.value = "";
    priceInput.value = "";
  }
});