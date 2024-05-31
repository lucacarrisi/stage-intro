console.log("Hallo World!");

// Richiesta GET
fetch('https://retoolapi.dev/b1oAD5/information')
    .then(response => response.json())
    .then(data => {
        createCard(data);
    })
    .catch(err => console.log('Request Failed', err));


// variabili e costanti
let data = [];
const cardBanner = document.querySelector(".card-banner");
const cardsContainer = cardBanner.querySelector(".card-container");
const orderSelect = cardBanner.querySelector("#order");
const deleteBtns = cardBanner.querySelectorAll(".delete");
const editBtns = cardBanner.querySelectorAll(".edit");
const deleteAllBtn = cardBanner.querySelector(".delete-all");

// creo card
function createCard(data) {
    const template = cardBanner.querySelector("#template");

    data.forEach((item, index) => {
        if (template) {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector(".card");
            card.setAttribute("id", "item-" + index);

            card.querySelector(".image").innerHTML = item.image;
            card.querySelector(".date").innerText = item.date;
            card.querySelector(".card-title").value = `${item.name} ${item.surname}`;
            card.querySelector(".card-description").value = item.description;

            let editBtn = card.querySelector(".edit");
            editBtn.addEventListener("click", () => {
                editCard(index);
            });

            let deleteBtn = card.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                deleteCard(index);
            });

            cardsContainer.appendChild(clone);
        }
    });
}


// aggiorno il container
function updateCardContainer(newData) {
    cardsContainer.innerHTML = '';
    createCard(newData);
}

// modifico il titolo e la descrizione
function editCard(index) {
    const card = cardBanner.querySelector(`#item-${index}`);
    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");
    const editBtn = card.querySelector(".edit");
    const saveBtn = card.querySelector(".save");

    editBtn.addEventListener("click", () => {
        title.disabled = false;
        description.disabled = false;
        title.focus();
        description.focus();
        saveBtn.classList.add("active");
    });

    saveBtn.addEventListener("click", () => {
        const newTitle = title.value;
        const newDescription = description.value;

        if (newTitle !== "") {
            const [newName, newSurname] = newTitle.split(" ");
            data[index].name = newName;
            data[index].surname = newSurname;
            title.disabled = true;
        }

        if (newDescription !== "") {
            data[index].description = newDescription;
            description.disabled = true;
        }

        saveBtn.classList.remove("active");
        updateCardContainer(data);
    });
}


// elimino una card
function deleteCard(index) {
    const cardsContainer = cardBanner.querySelector(".card-container");
    const cardIndex = cardsContainer.querySelector(`#item-${index}`);

    if (cardIndex) {
        cardsContainer.removeChild(cardIndex);
        data.splice(index, 1);
    } else {
        console.log("Card non trovata");
    }
}


// elimino tutte le card
function deleteAllCards() {
    data.length = 0;
    updateCardContainer(data);
}


// ordino le card
function orderCards() {
    const orderSelect = cardBanner.querySelector("#order");
    const cardContainer = cardBanner.querySelector(".card-container");
    const cards = cardBanner.querySelectorAll(".card");

    orderSelect.addEventListener("change", function () {
        const selectedOption = orderSelect.value;

        if (selectedOption === "dateC") {
            const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            const dateClass = selectedOption === "dateC";
            const sortedCards = Array.from(cards).sort((a, b) => {
                const dateA = new Date(a.querySelector(dateClass).innerText.trim());
                const dateB = new Date(b.querySelector(dateClass).innerText.trim());
                return dateA - dateB;
            });

            cardContainer.innerHTML = "";
            sortedCards.forEach((card) => {
                const dateElement = card.querySelector(dateClass);
                const formattedDate = new Date(dateElement.innerText.trim()).toLocaleDateString('en-US', options);
                dateElement.innerText = formattedDate;
                cardContainer.appendChild(card);
            });

        } else if (selectedOption === "dateD") {
            const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            const dateClass = selectedOption === "dateD";
            const sortedCards = Array.from(cards).sort((a, b) => {
                const dateA = new Date(a.querySelector(dateClass).innerText.trim());
                const dateB = new Date(b.querySelector(dateClass).innerText.trim());
                return dateB - dateA;
            });

            cardContainer.innerHTML = "";
            sortedCards.forEach((card) => {
                const dateElement = card.querySelector(dateClass);
                const formattedDate = new Date(dateElement.innerText.trim()).toLocaleDateString('en-US', options);
                dateElement.innerText = formattedDate;
                cardContainer.appendChild(card);
            });

        } else if (selectedOption === "az") {
            const sortedCards = Array.from(cards).sort((a, b) => {
                const titleA = a.querySelector(".card-title").value;
                const titleB = b.querySelector(".card-title").value;
                return titleA.localeCompare(titleB);
            });

            cardContainer.innerHTML = "";
            sortedCards.forEach((card) => {
                cardContainer.appendChild(card);
            });

        } else if (selectedOption === "za") {
            const sortedCards = Array.from(cards).sort((a, b) => {
                const titleA = a.querySelector(".card-title").value;
                const titleB = b.querySelector(".card-title").value;
                return titleB.localeCompare(titleA);
            });

            cardContainer.innerHTML = "";
            sortedCards.forEach((card) => {
                cardContainer.appendChild(card);
            });
        }
    });
}


// collego i tasti dell'HTML
editBtns.forEach((editBtn, index) => {
    editBtn.addEventListener("click", () => {
        const cardWrapper = cardBanner.querySelector(`#item-${index}`);
        if (cardWrapper) {
            editCard(index);
        } else {
            alert("Nessun elemento da modificare");
        }
    });
});

deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
        const cardWrapper = cardBanner.querySelector(`#item-${index}`);
        if (cardWrapper) {
            deleteCard(index);
        } else {
            alert("Nessun elemento da rimuovere.");
        }
    });
});


orderSelect.addEventListener("change", () => {
    orderCards()
});

deleteAllBtn.addEventListener("click", () => {
    deleteAllCards();
});