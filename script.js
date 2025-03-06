document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".open-popup");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".popup .close");

    // open popup
    popupLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const popupId = this.getAttribute("data-popup");
            const popup = document.getElementById(`popup-${popupId}`);
            if (popup) {
                popup.classList.add("show");
            }
        });
    });

    // close popup
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".popup").classList.remove("show");
        });
    });

    // close without closbut
    popups.forEach(popup => {
        popup.addEventListener("click", function (e) {
            if (e.target === this) {
                this.classList.remove("show");
            }
        });
    });
});
