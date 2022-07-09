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

export async function initNavigationPopup() {
    const query = `{examplesCollection(limit: 40) {
            items {
                title, 
                link,
                isReleased, 
                structureCollection (limit: 10) {
                    items{category{,title
                        }
                    }
                }
                toolsCollection{
                    items{
                        icon
                    }
                }
            }
        }
    }`;
    const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CUBE_EXAMPLES_SPACE_ID}?access_token=${process.env.CUBE_EXAMPLES_CONTENT_DELIVERY_API_TOKEN}&query=${query}`;
    const examplesList = (await (await fetch(url)).json()).data.examplesCollection.items;
    const examples = {};
    examplesList.forEach((item) => {
        const category = item.structureCollection.items[0].category.title;
        const icon = item.toolsCollection.items
            ? item.toolsCollection.items[0]
                ? item.toolsCollection.items[0].icon : ''
            : '';
        if (examples[category]) {
            examples[category].examples.push({
                name: item.title,
                link: item.link,
                icon: icon,
                isReleased: item.isReleased,
            });
        } else {
            examples[category] = {};
            examples[category].header = category;
            examples[category].examples = [{
                name: item.title,
                link: item.link,
                icon: icon,
                isReleased: item.isReleased,
            }];
        }
    });

    const examplesListsList = document.createElement("ul");
    examplesListsList.classList.add("Popup__list");

    Object.values(examples).forEach((item) => {
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
            exampleIcon.setAttribute("src", example.icon);
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
