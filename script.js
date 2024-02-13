onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('iconoCarta').addEventListener('click', function() {
    window.location.href = 'carta.html';
  });
});
