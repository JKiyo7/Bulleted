$(document).ready(function() {
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