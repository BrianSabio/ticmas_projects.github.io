
var zoom = document.getElementById('kevin');
zoom.addEventListener('mouseover', () => {
    zoom.style.transform = 'scale(1.2)';
});
zoom.addEventListener('mouseout', () => {
    zoom.style.transform = 'scale(1)';
});

var pop = document.getElementById('kevin');
pop.addEventListener('click', () => {
    alert("¡Esta es mi foto!");
});