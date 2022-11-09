function searchdiv(){
    const sb = document.getElementById("come");
    sb.style.display = "block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;}
function hidesearch(){document.location.reload()}
function darkmode(){
    const logosvgdown = document.getElementById("logosvgdown");
    logosvgdown.style.fill = '#333';
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    const moon = document.getElementById("moon")
    moon.style.display = "block";
    moon.style.marginLeft = "18rem";
    const sun = document.getElementById("sun")
    sun.style.display = "none";    
    const wavemenu = document.getElementById("visual");
    wavemenu.style.fill = "white";
    const menulinks = document.getElementById("menulinks");
    menulinks.style.color = "#333";
    const something = document.getElementById('mf');
    something.style.backgroundColor = "#FFFDFA";
    something.style.color = "#333";
}
function brightmode(){location.reload()}
function showwavemenu(){
    const wavemenu = document.getElementById('menudiv')
    wavemenu.style.display = 'block'}
    function closewavemenu(){
    const wavemenu = document.getElementById('menudiv')
    wavemenu.style.display = 'none'}
    function displaycategories(){
    const wavemenu = document.getElementById('menudiv')
    wavemenu.style.display = 'none'
    const categories = document.getElementById('cat')
    categories.style.display = 'block';}
function closecategories(){
    const categories = document.getElementById('cat')
    categories.style.display = 'none';} 
// <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
//<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

  