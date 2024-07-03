document.addEventListener("DOMContentLoaded", function() {
    // Get the element for "Materiales" dropdown link
    var materialesLink = document.getElementById("materiales-link");

    // Define the URL you want to navigate to
    var materialesURL = "/productos/";  // Replace with your desired URL

    // Add a click event listener to the "Materiales" link
    materialesLink.addEventListener("click", function() {
        window.location.href = materialesURL;
    });
});

/*$(document).ready(function() {
    // Handle click on "Materiales" link
    $('.navbar-item.has-dropdown > .navbar-link').click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        // Redirect to specific page
        window.location.href = 'https://drop-materializa.bullet.site/productos/';
    });
});


/*Path:
<script src="path/to/your/DropMaterializa.js"></script>
*/
