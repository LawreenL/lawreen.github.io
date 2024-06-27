document.addEventListener('DOMContentLoaded', () => {
    const mapImage = document.getElementById('map-image');
    const details = document.getElementById('details');

    mapImage.addEventListener('mousemove', (e) => {
        const rect = mapImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        details.textContent = `Coordinates: (${x}, ${y})`;
    });

    mapImage.addEventListener('mouseleave', () => {
        details.textContent = 'Hover over the map to see details.';
    });
});
