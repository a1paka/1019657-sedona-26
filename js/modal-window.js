
    var link = document.querySelector(".search-hotels-sedona");
    var popup = document.querySelector(".modal-window");

    popup.classList.add("modal-window-show");
    link.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup.classList.toggle("modal-window-show");
    });
