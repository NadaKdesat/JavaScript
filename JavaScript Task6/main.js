const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');

function ShowData() {
    // fetch('data.json')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         card1.innerHTML = `
    //         <p>${data[0].name}</p>
    //         <p><strong>Age: </strong>${data[0].age}</p>
    //         <p><strong>Email: </strong>${data[0].email}</p>
    //         <p><strong>Profession: </strong>${data[0].profession}</p>
    //         `
    //         card2.innerHTML = `
    //         <p>${data[1].name}</p>
    //         <p><strong>Age: </strong>${data[1].age}</p>
    //         <p><strong>Email: </strong>${data[1].email}</p>
    //         <p><strong>Profession: </strong>${data[1].profession}</p>
    //         `
    //         card3.innerHTML = `
    //         <p>${data[2].name}</p>
    //         <p><strong>Age: </strong>${data[2].age}</p>
    //         <p><strong>Email: </strong>${data[2].email}</p>
    //         <p><strong>Profession: </strong>${data[2].profession}</p>
    //         `
    //         card4.innerHTML = `
    //         <p>${data[3].name}</p>
    //         <p><strong>Age: </strong>${data[3].age}</p>
    //         <p><strong>Email: </strong>${data[3].email}</p>
    //         <p><strong>Profession: </strong>${data[3].profession}</p>
    //         `
    //         card5.innerHTML = `
    //         <p>${data[4].name}</p>
    //         <p><strong>Age: </strong>${data[4].age}</p>
    //         <p><strong>Email: </strong>${data[4].email}</p>
    //         <p><strong>Profession: </strong>${data[4].profession}</p>
    //         `
    //     })

    async function fetchData() {
        const response = await fetch('https://api.npoint.io/bd15b466e7e893d5f8e2');
        const data = await response.json();
        card1.innerHTML = `
            <p>${data[0].name}</p>
            <p><strong>Age: </strong>${data[0].age}</p>
            <p><strong>Email: </strong>${data[0].email}</p>
            <p><strong>Profession: </strong>${data[0].profession}</p>
            `
        card2.innerHTML = `
            <p>${data[1].name}</p>
            <p><strong>Age: </strong>${data[1].age}</p>
            <p><strong>Email: </strong>${data[1].email}</p>
            <p><strong>Profession: </strong>${data[1].profession}</p>
            `
        card3.innerHTML = `
            <p>${data[2].name}</p>
            <p><strong>Age: </strong>${data[2].age}</p>
            <p><strong>Email: </strong>${data[2].email}</p>
            <p><strong>Profession: </strong>${data[2].profession}</p>
            `
        card4.innerHTML = `
            <p>${data[3].name}</p>
            <p><strong>Age: </strong>${data[3].age}</p>
            <p><strong>Email: </strong>${data[3].email}</p>
            <p><strong>Profession: </strong>${data[3].profession}</p>
            `
        card5.innerHTML = `
            <p>${data[4].name}</p>
            <p><strong>Age: </strong>${data[4].age}</p>
            <p><strong>Email: </strong>${data[4].email}</p>
            <p><strong>Profession: </strong>${data[4].profession}</p>
            `
    }
    
    fetchData();
    document.getElementById('Cards').style.display = 'flex';
}