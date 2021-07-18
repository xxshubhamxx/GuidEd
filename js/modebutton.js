if (!localStorage.getItem('thisvarisgud4me')) {
    localStorage.setItem("thisvarisgud4me", "1");
}

document.getElementById("btn").addEventListener("click", change);
// var c = "true";
// if (!localStorage.getItem("clickc")) {
//     localStorage.setItem("clickc", c);
// }

function cmodemain(){
        // if (localStorage.getItem("clickc") == "false") {
    //     document.getElementById("btn").click();
    //     localStorage.setItem("clickc", "true");
    // } 
    // else if (localStorage.getItem("clickc") == "true") {
        if (localStorage.getItem('thisvarisgud4me') == '1') {
            localStorage.setItem("thisvarisgud4me", '0');
        } else {
            localStorage.setItem("thisvarisgud4me", '1');
        }
    
        var num = Number(localStorage.getItem('thisvarisgud4me'));
        var rnum = 0;
        if (num == 0) {
            rnum = 1;
            document.getElementById("textp1").innerText = "LM";
            document.getElementById("textp2").innerText = "LM";            
        }
        else if (num == 1) {
            rnum = 0;
            document.getElementById("textp1").innerText = "DM";
            document.getElementById("textp2").innerText = "DM";
        }
        let root = document.documentElement;
        root.style.setProperty("--numvar", num);
        root.style.setProperty("--revnum", rnum);
        // document.getElementsByTagName('iframe')[0].contentWindow.style.display="none";
        console.log(num);
    
        // if (num == 0) {
        //     window.addEventListener("beforeunload", function (event) {
        //         console.log("The page is redirecting")
        //         alert("Reload");
        //         localStorage.setItem("clickc", "false");
        //     });
        // }
        // }
        location.reload(); 
}

function change() {
    setTimeout(cmodemain, 230);
}
var num = Number(localStorage.getItem('thisvarisgud4me'));
var rnum = 0;
if (num == 0) {
    rnum = 1;
    document.getElementById("textp1").innerText = "LM";
    document.getElementById("textp2").innerText = "LM";
}
else if (num == 1) {
    rnum = 0;
    document.getElementById("textp1").innerText = "DM";
    document.getElementById("textp2").innerText = "DM";
}
let root = document.documentElement;
root.style.setProperty("--numvar", num);
root.style.setProperty("--revnum", rnum);

// document.getElementsByTagName('iframe')[0].contentWindow.document.documentElement.style.setProperty("--numvar", num);
