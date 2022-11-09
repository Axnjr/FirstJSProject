function darkmode(){
    document.body.style.backgroundColor = "rgb(2,9,23)";
    document.body.style.color = "white";
    const moon = document.getElementById("moon")
    moon.style.display = "block";
    moon.style.marginLeft = "18rem";
    const sun = document.getElementById("sun")
    sun.style.display = "none";    
    const wavemenu = document.getElementById("visual");
    wavemenu.style.fill = "white";
    const menulinks = document.getElementById("menulinks");
    menulinks.style.color = "#001122";
    const blog_content = document.getElementById("blog_content")
    blog_content.style.backgroundColor = 'black';
    document.getElementById('f').style.backgroundColor = "#FFFDFA";
    document.getElementById('f').style.color = "#333";
    document.getElementById("logosvgdown").style.fill = "#333"}
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
function chosefont(){
    const blog_para = document.getElementById("blog_content") 
    swal("Choose Font Size", {
buttons: {
    catch: {
    text: "XL",
    value: "catch",
    },
    sec_opt: {
    text: "2XL",
    value: "sec_opt",
    },
    thr_opt: {
    text: "3XL",
    value: "thr_opt",
    },
    fou_opt: {
    text: "4XL",
    value: "fou_opt",
    },
    Cancel: true,
},
})
.then((value) => {
switch (value) {
    case "catch":
    blog_para.style.fontSize = "1.25rem"
    swal("Font is set to XL !!");
    break;
    case "sec_opt":
        blog_para.style.fontSize = "1.5rem"
        blog_para.style.lineHeight = "200%"
    swal("Font is set to 2XL !!");
    break;
    case "thr_opt":
        blog_para.style.fontSize = "1.875rem"
        blog_para.style.lineHeight = "210%"
    swal("Font is set to 3XL !!");
    break;
    case "fou_opt":
        blog_para.style.fontSize = "2.25rem"
        blog_para.style.lineHeight = "210%"
    swal("Font is set to 4XL !!");
    break;
}
});}
// color section
function chosecolor(){
    const blog_para = document.getElementById("blog_content") 
    swal("Choose Text Color", {
buttons: {
    catch: {
    text: "Teal",
    value: "catch",
    },
    sec_opt: {
    text: "Pink",
    value: "sec_opt",
    },
    thr_opt: {
    text: "Amber",
    value: "thr_opt",
    },
    fou_opt: {
    text: "Lime",
    value: "fou_opt",
    },
    fiv_opt: {text: "Red",value: "fiv_opt",}},})
.then((value) => {
switch (value) {
    case "catch":
    blog_para.style.color = "#14b8a6"
    swal("Text is now Teal !!");
    break;
    case "sec_opt":
        blog_para.style.color = "#d946ef"
    swal("Text color is now Pink !!");
    break;
    case "thr_opt":
        blog_para.style.color = "#fcd34d"
    swal("Text color is now Amber !!");
    break;
    case "fou_opt":
        blog_para.style.color = "#84cc16"
    swal("Text is color now Lime !!");
    break;
    case "fiv_opt":
        blog_para.style.color = "#dc2626"
    swal("Text is color now Red !!");
    break;}});}
   
function showfeedgood(){
    swal("!! 🥳 GLAD 🤩 Your Upvote Added !!"," Share it with others ", {buttons: {
            share: {
            text: "SHARE",
            value: "catch",
            },
            close: {
            text: "Close",
            value: "close",
            },}})
    .then((value) => {
        switch(value){
            case "catch":
                swal(" Here's the Link ! ",window.location.href ,{buttons: {
                catch: {
                text: "Copy",
                value: "copy",
                },}})
                .then((value) => {
                    navigator.clipboard.writeText(window.location.href);
                    swal("! URL Link Copied ! ")})
            break;
            case "close":
                swal.close()
            }})}

function showfeedbad(){
    swal("! 😥 I DEEPLY REGRET 😓 !"," What was the reason ?", {buttons: {
        nwfm: {
        text: "DID'NT WORKED FOR ME",
        value: "not",
        },
        sideeffects: {
        text: "GOT SIDE EFFECTS ",
        value: "side",
        },
        other: {
        text: " SOME OTHER REASON ",
        value: "other",
        },
    }})
    .then((value) => {
        switch (value) {
            case "not":
            swal("Will get it corrected and working","Thanks for your feedback !");
            break;
            case "side":
            swal(" Oh extreamly Sorry for that . Although its strange will see to it .","Thanks for your feedback !");
            break;
            case "other":
            swal("Can You Specify Your Reason ","It will help in improving please ",{content: "input",});
            break;}})}  



