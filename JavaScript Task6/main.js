const cardsContainer = document.getElementById('Cards');
function ShowData() {
    // fetch('data.json')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         cardsContainer.innerHTML = '';
    //         data.forEach(user => {
    //             cardsContainer.innerHTML += `
    //             <div>
    //             <p>${user.name}</p>
    //             <p><strong>Age: </strong>${user.age}</p>
    //             <p><strong>Email: </strong>${user.email}</p>
    //             <p><strong>Profession: </strong>${user.profession}</p>
    //             </div>
    //             `;
    //         });
    //     });

    async function fetchData() {
        const response = await fetch('https://api.npoint.io/bd15b466e7e893d5f8e2');
        const data = await response.json();
        cardsContainer.innerHTML = '';
        data.forEach(user => {
            cardsContainer.innerHTML += `
                <div>
                <p>${user.name}</p>
                <p><strong>Age: </strong>${user.age}</p>
                <p><strong>Email: </strong>${user.email}</p>
                <p><strong>Profession: </strong>${user.profession}</p>
                </div>
                `;
        });
    }
    fetchData();
}