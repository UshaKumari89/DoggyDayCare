//asyn function to fetch api
async function fetchDoggies() {
  let data = await fetch("https://majazocom.github.io/Data/dogs.json");
  let dogs = await data.json();
  // loop through
  dogs.forEach((dog) => {
    //call a function which will return the dog
    createDogCard(dog);
  });
}
fetchDoggies();

// function to create a new dog with information about age sex and gender
function createDogCard(dog) {
  let dogsContainer = document.querySelector(".dogs-container");
  let article = document.createElement("article");
  let imgEl = document.createElement("figure");
  imgEl.style.background = `url('${dog.img}')`;
  article.appendChild(imgEl);

  let nameSexAgeWrapper = document.createElement("section");
  nameSexAgeWrapper.classList.add("name-sex-age");
  article.appendChild(nameSexAgeWrapper);

  let nameSexWrapper = document.createElement("div");
  nameSexAgeWrapper.appendChild(nameSexWrapper);
  // namn
  let nameEl = document.createElement("h2");
  nameEl.innerHTML = dog.name.toUpperCase();
  // namn
  let sexEl = document.createElement("h3");
  //age
  if (dog.sex === "female") {
    sexEl.innerHTML = `Gender : ${dog.sex
      .charAt(0)
      .toUpperCase()}${dog.sex.slice(1)}`;
  } else if (dog.sex === "male") {
    sexEl.innerHTML = `Gender : ${dog.sex
      .charAt(0)
      .toUpperCase()}${dog.sex.slice(1)}`;
  }

  let ageEl = document.createElement("h3");
  ageEl.innerHTML = dog.age + "yr";

  //breed
  let breedEl = document.createElement("h4");
  breedEl.innerHTML = `Breed : ${dog.breed
    .charAt(0)
    .toUpperCase()}${dog.breed.slice(1)}`;

  //breed
  let ownerEl = document.createElement("h4");
  ownerEl.innerHTML = `owner : ${dog.owner.name} ${dog.owner.lastName}`;

  nameSexWrapper.appendChild(nameEl);
  nameSexWrapper.appendChild(sexEl);
  nameSexWrapper.appendChild(breedEl);
  nameSexWrapper.appendChild(ownerEl);
  nameSexAgeWrapper.appendChild(ageEl);
  dogsContainer.appendChild(article);

 



}

article.onclick = () => {
  

      
   
    
}

