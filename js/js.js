let outer = document.querySelector("#out");
let inner = document.querySelector("#in");
let lists = document.querySelectorAll(".list");
let wrapPage = document.querySelectorAll(".wrap div");

let selected = null;
let selected2 = null;

for(let el of lists) {
    el.addEventListener("dragstart",(e) => {
        selected = e.target;
        selected2 = e.target.id;
    })
    inner.addEventListener("drop",() => {
        inner.append(selected);
        startEvent(selected2)
    })
    inner.addEventListener("dragover",(e) => {
        e.preventDefault();
    })
    outer.addEventListener("drop",() => {
        outer.append(selected);
        stopEvent(selected2)
    })
    outer.addEventListener("dragover",(e) => {
        e.preventDefault();
    })
}

let strong;
function startEvent(id) {
    strong = id.substr(4,1);
    let pages = document.querySelector(".page" + strong);
    pages.style.transform = "scale(1)";

    for(let i = 0; i < wrapPage.length; i++){
        if (wrapPage[i].classList.contains("page" + strong)) {
            wrapPage[i].classList.add("on");
        } else {
            wrapPage[i].classList.remove("on");
        }
    }
}

function stopEvent(id) {
    strong = id.substr(4,1);
    let pages = document.querySelector(".page" + strong);
    pages.style.transform = "scale(0)";

    for(let i = 0; i < wrapPage.length; i++){
        if (wrapPage[i].classList.contains("page" + strong)) {
            wrapPage[i].classList.remove("on");
        }
    }
}