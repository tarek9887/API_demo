const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {
    const searchText = document.getElementById("searchField").value;
    const searchURL = "https://openapi.programming-hero.com/api/phones?search=" + searchText;

    fetch(searchURL).then(res => res.json())
        .then(data => displaySearchedPhones(data.data));

    document.getElementById("searchField").value = "";
})

function displaySearchedPhones(phones) {
    const nothingToShowText = document.getElementById("nothingText");
    nothingToShowText.classList.add("hidden");
    // console.log(phones[0].image)
    const phoneContainer = document.querySelector(".phone-container");
    phoneContainer.innerHTML = "";

    phones.forEach(phone => {
        const phoneDiv = document.createElement("div");
        phoneDiv.classList = "card bg-base-100 w-full shadow-xl";
        // <div class="">

        phoneDiv.innerHTML =
        `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h2 class="card-title">$Kidney</h2>
        <div class="card-actions">
            <button onclick="displayPhoneDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });
}
// onclick="displayPhoneDetails('iphone_mini_101')"

function displayPhoneDetails(slug)
{
    showDetailsModal.showModal();

    const phoneDetailURL = "https://openapi.programming-hero.com/api/phone/" + slug;
    
    fetch(phoneDetailURL).then(res => res.json())
        .then(data => showDetails(data.data));
}

function showDetails(phone)
{
    document.getElementById("phone-title").innerText = phone.name;
}



