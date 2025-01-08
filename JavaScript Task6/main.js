const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const cardsContainer = document.getElementById('Cards');

function ShowData() {
    const cards = [card1, card2, card3, card4, card5];
    fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            cards.forEach((card, index) => {
                card.innerHTML = `
                <p>${data[index].name}</p>
                <p><strong>Age: </strong>${data[index].age}</p>
                <p><strong>Email: </strong>${data[index].email}</p>
                <p><strong>Profession: </strong>${data[index].profession}</p>
                `;
            });
        });

    // async function fetchData() {
    //     const response = await fetch('https://api.npoint.io/bd15b466e7e893d5f8e2');
    //     const data = await response.json();
    //     cardsContainer.innerHTML = '';

    //     data.forEach(user => {
    //         const card = document.createElement('div');
    //         card.className = 'card';
    //         card.innerHTML = `
    //             <p>${user.name}</p>
    //             <p><strong>Age: </strong>${user.age}</p>
    //             <p><strong>Email: </strong>${user.email}</p>
    //             <p><strong>Profession: </strong>${user.profession}</p>
    //         `;
    //         cardsContainer.appendChild(card);
    //     });
    // }
    // fetchData();
    
    cardsContainer.style.display = 'flex';
}