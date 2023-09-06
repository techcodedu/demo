function fetchData() {
    const userId = document.getElementById('searchInput').value;

    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            displayUser(data);
        })
        .catch(err => {
            console.error("Error fetching data:", err);
        });
    }
}

function displayUser(user) {
    const resultsDiv = document.getElementById('results');
    
    const card = `
        <div class="card">
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p>Company: ${user.company.name}</p>
        </div>
    `;

    resultsDiv.innerHTML = card;
}
