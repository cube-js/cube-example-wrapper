window.addEventListener("DOMContentLoaded", () => {
    const buttonOpen = document.getElementById("navigation_popup_open_button");
    const buttonClose = document.getElementById("navigation_popup_close_button");
    const popup = document.getElementById("navigation_popup");

    buttonOpen.addEventListener("click", (e) => {
        e.stopPropagation();
        popup.classList.toggle("Popup--open");
        document.body.classList.add("popupWasOpened");
        document.body.classList.toggle("popupIsOpen");
    });

    buttonClose.addEventListener("click", (e) => {
        e.stopPropagation();
        popup.classList.toggle("Popup--open");
        document.body.classList.toggle("popupIsOpen");
    });
});

export function initNavigationPopup() {
    const examplesListsList = document.createElement("ul");
    examplesListsList.classList.add("Popup__list");
    [
        {
            header: "Header",
            examples: [
                {
                    name: "Name",
                    link: "linkTo",
                    icon: "react",
                }
            ]
        },
        {
            header: "Header2",
            examples: [
                {
                    name: "Name2",
                    link: "linkTo",
                    icon: "reac2t",
                }
            ]
        },
        {
            header: "Header2",
            examples: [
                {
                    name: "Name2",
                    link: "linkTo",
                    icon: "reac2t",
                }
            ]
        }
    ].forEach((item) => {
        const listElement = document.createElement("li");

        const headerElement = document.createElement("h2");
        headerElement.innerHTML = item.header;
        headerElement.classList.add("Popup__examplesListHeader");
        listElement.appendChild(headerElement);
        const examplesList = document.createElement("ul");
        item.examples.forEach((example) => {
            const exampleElement = document.createElement("li");
            exampleElement.classList.add("Popup__exampleItem");

            const exampleIcon = document.createElement("img");
            exampleIcon.classList.add("Popup__exampleIcon");
            exampleIcon.setAttribute("src", `https://static.cube.dev/icons/${example.icon}.svg`);
            exampleIcon.setAttribute("alt", example.icon);
            exampleElement.appendChild(exampleIcon);

            const exampleLink = document.createElement("a");
            exampleLink.innerHTML = example.name;
            exampleLink.classList.add("Popup__exampleLink");
            exampleLink.setAttribute("href", example.link);
            exampleElement.appendChild(exampleLink);

            examplesList.appendChild(exampleElement);
        });

        listElement.appendChild(examplesList);
        examplesListsList.appendChild(listElement);
    });

    return examplesListsList;
}
