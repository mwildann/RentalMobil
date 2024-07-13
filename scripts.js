// Fetch car data from REST API or local JSON file
document.addEventListener('DOMContentLoaded', function() {
    fetch('cars.json') // Ubah URL ini jika menggunakan REST API
        .then(response => response.json())
        .then(data => {
            const carList = document.getElementById('car-list');
            data.cars.forEach(car => {
                const carItem = document.createElement('div');
                carItem.className = 'col-md-4';
                carItem.innerHTML = `
                    <div class="card mb-4">
                        <img src="${car.image}" class="card-img-top" alt="${car.name}">
                        <div class="card-body">
                            <h5 class="card-title">${car.name}</h5>
                            <p class="card-text">${car.description}</p>
                            <a href="detail.html?id=${car.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                `;
                carList.appendChild(carItem);
            });
        });
});

// Fetch single car data based on ID (detail.html)
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const carId = params.get('id');

    if (carId) {
        fetch('cars.json') // Ubah URL ini jika menggunakan REST API
            .then(response => response.json())
            .then(data => {
                const car = data.cars.find(car => car.id === carId);
                if (car) {
                    document.getElementById('car-name').textContent = car.name;
                    document.getElementById('car-image').src = car.image;
                    document.getElementById('car-description').textContent = car.description;
                    document.getElementById('car-price').textContent = `$${car.price}`;
                }
            });
    }
});
