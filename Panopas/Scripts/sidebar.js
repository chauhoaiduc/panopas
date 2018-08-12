/* Set the width of the side navigation to 250px */
function openNavLeft() {
    var width = window.innerWidth;
    if (width >= 768 && width <= 991)
    {
        $(".sidebar-contain").css("width", "35%");
    }
    else {
        $(".sidebar-contain").css("width", "70%");
    }
    
    $(".overlay").css("width", "100%");
    $(".overlay").css("opacity", "0.8");
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    $(".sidebar-contain").css("width", "0px");
    $(".overlay").css("width", "0%");
}