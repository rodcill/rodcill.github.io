document.addEventListener("DOMContentLoaded", () => {
    const imageForm = document.getElementById("image-form");
    const imageUrl = document.getElementById("image-url");
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementsByClassName("close")[0];

    imageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addImage(imageUrl.value);
        imageUrl.value = "";
    });

    function addImage(url) {
        const div = document.createElement("div");
        div.className = "gallery-item";

        const img = document.createElement("img");
        img.src = url;
        img.alt = "Gallery Image";
        img.addEventListener("click", () => {
            openModal(url);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => {
            gallery.removeChild(div);
        });

        div.appendChild(img);
        div.appendChild(deleteBtn);
        gallery.appendChild(div);
    }

    function openModal(url) {
        modal.style.display = "block";
        modalImage.src = url;
    }

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
