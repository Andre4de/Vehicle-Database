document.addEventListener("DOMContentLoaded", function() {

    console.log("DOM fully loaded and parsed");
    // Your code here

document.getElementById('vehicleSrchForm').addEventListener('submit', (event2)=>{
    event2.preventDefault();
    displayThis("vehSearch","vehicleMain");
})


document.getElementById('pplLicenseForm').addEventListener('submit', (event1)=>{
    event1.preventDefault();
    displayThis("pplLicSearch","searchResults");
})











function displayThis(searchInput, searchResultsDiv)
{
    let searchIn = document.getElementById(searchInput).value;

    let divArea = document.getElementById(searchResultsDiv);

    divArea.innerHTML = '';

    let searchResultParagraph = document.createElement('p');

    searchResultParagraph.textContent = searchIn;

    divArea.appendChild(searchResultParagraph);
}

});





