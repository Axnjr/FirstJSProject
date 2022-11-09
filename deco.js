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
function doit(){
    const mc = document.getElementById("mc");
    mc.style.transition = "line-height 3000ms ease";
    mc.style.lineHeight = '1'
    let w = window.innerWidth
    console.log(w)
    if (w>=800){
        setTimeout(function(){
            console.log("husss")
            document.getElementById("othercon").style.transition = "display 8000ms ease";
            document.getElementById("othercon").style.display = "block";
        },3000)
    }
    else{
        document.getElementById("othercon").style.transition = "display 8000ms ease";
        document.getElementById("othercon").style.display = "block"; 
    }
    
    const first = setTimeout(function(){document.getElementById("cit").innerHTML = "HEALTH";},3000);
    const sec = setTimeout(function(){document.getElementById("cit").innerHTML = "NATURAL";},7000);
    const third = setTimeout(function(){document.getElementById("cit").innerHTML = "EFFECTIVE";},11000);
    const fourth = setTimeout(function(){document.getElementById("cit").innerHTML = "HOME";},15000);     
    }


