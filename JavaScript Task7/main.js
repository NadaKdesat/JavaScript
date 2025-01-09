let table = document.getElementById('table'); //Select the table element by its ID and store it in a variable.
async function fetchData() { //Define an asynchronous function to fetch data.
    let response = await fetch('https://677f67de0476123f76a64435.mockapi.io/books'); // Wait for a response from the server after sending a request to the specified URL.
    let data = await response.json();  // Convert the response into JSON format (as String) into a JavaScript object.
    data.forEach(element => {    // Loop through each element in the retrieved data.
        table.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        </tr>
        `
        // Append a new row to the table containing the element's id and name using template literals
    });
}

fetchData(); // Call the function to fetch data and display it in the table when the page loads.

