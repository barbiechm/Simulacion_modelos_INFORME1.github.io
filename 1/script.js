document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".open-modal");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalText.textContent = this.dataset.info; // Obtiene la info del atributo data-info
            modal.style.display = "flex"; // Muestra el modal
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Oculta el modal
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
