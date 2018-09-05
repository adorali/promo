function renderProject(imageUrl, caption) {
    let project = document.createElement("div");
    project.classList.add("project-window");
    project.style = "background-image: url(" + imageUrl + ");";
    

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.textContent = caption;
    project.appendChild(overlay);
    
    return project;
}

let data = [{caption: "Author Bot", url: "img/author-bot.png"}, 
            {caption: "NASA Pic of the Day", url: "img/nasa.png"},
            {caption: "College Sexual Assault", url: "img/assault.png"},
            {caption: "WeFund", url: "img/fund.png"}];

function renderAll() {
    let list = document.createElement("div");
    list.classList.add("row");
    data.forEach(project => {
        list.appendChild(renderProject(project.url, project.caption));
    });

    document.querySelector(".projects").appendChild(list);
}

renderAll();