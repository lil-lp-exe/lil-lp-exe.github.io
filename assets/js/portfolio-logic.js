function openModal(url) {
    document.getElementById('projectFrame').src = url;
    document.getElementById('projectModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
    document.getElementById('projectFrame').src = "";
    document.body.style.overflow = "auto";
}