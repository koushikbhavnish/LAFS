const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const restaurants = document.querySelectorAll(".restaurant-card");

searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase();

    restaurants.forEach(function (restaurant) {

        const restaurantName = restaurant
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (restaurantName.includes(searchText)) {
            restaurant.style.display = "block";
        } else {
            restaurant.style.display = "none";
        }

    });

});
const restaurantCards = document.querySelectorAll(".restaurant-card");

restaurantCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const restaurantName = card.querySelector("h3").textContent;

        alert("You selected " + restaurantName);

    });

});