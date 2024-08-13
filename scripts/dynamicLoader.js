 // Load Header
fetch('https://deadcakemix.com/dynamic%20loaders/header')
 .then(response => response.text())
 .then(data => {
     document.getElementById('header').innerHTML = data;
 })
 .catch(error => console.error('Error loading header:', error));

// Load Footer
fetch('https://deadcakemix.com/dynamic%20loaders/footer')
 .then(response => response.text())
 .then(data => {
     document.getElementById('footer').innerHTML = data;
 })
 .catch(error => console.error('Error loading footer:', error));

 // Call the functions to load the header and footer
loadHeader();
loadFooter();
