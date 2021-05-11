

const GITHUB_URL = "https://api.github.com/users/Dybovsky";

fetch(GITHUB_URL)
  .then(function(response) {
    
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById("my-name");
    const myLastName = GITHUB_URL.split('/')[4];
    myName.innerText = `${data.name} ${myLastName} `
  })





const card = document.getElementById('card');







card.addEventListener("mouseover", function() {
	card.classList.add('spiner');
});

card.addEventListener("mouseout", function() {
  card.classList.remove('spiner');
  card.classList.remove('rotate');
});

card.addEventListener("click", function() {

  card.classList.add('rotate')
  
     
});


// footer

let skills = [' CSS ', ' HTML ', ' JavaScript '];

let footerCont = document.getElementById('footer-cont');

footerCont.insertAdjacentHTML('beforeend', `<p>This site was created via: ${skills}</p>`)

