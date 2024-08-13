 // Load Header
fetch('/dynamic loaders/header.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('header').innerHTML = data;
 })
 .catch(error => console.error('Error loading header:', error));

// Load Footer
fetch('/dynamic loaders/footer.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('footer').innerHTML = data;
 })
 .catch(error => console.error('Error loading footer:', error));

 // Call the functions to load the header and footer
loadHeader();
loadFooter();
