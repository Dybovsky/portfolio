const Moscow = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3464472871!2d36.825139161142694!3d55.58152447742627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sil!4v1609839934401!5m2!1sru!2sil";
const TelAviv = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.904955211445!2d34.762226583612495!3d32.087999403010535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z0KLQtdC70Ywt0JDQstC40LI!5e0!3m2!1sru!2sil!4v1609840146176!5m2!1sru!2sil";
const Barcelona = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.33906381374!2d2.07872821983773!3d41.39489759327221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2z0JHQsNGA0YHQtdC70L7QvdCwLCDQmNGB0L_QsNC90LjRjw!5e0!3m2!1sru!2sil!4v1609840233001!5m2!1sru!2sil";
const Reykjavik = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55701.05494612212!2d-21.922481318192283!3d64.13354843771971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674b9eedcedc3%3A0xec912ca230d26071!2z0KDQtdC50LrRjNGP0LLQuNC6LCDQmNGB0LvQsNC90LTQuNGP!5e0!3m2!1sru!2sil!4v1609840285131!5m2!1sru!2sil";
const Pattaya = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124458.37913153473!2d100.85271964587787!3d12.886853335823506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310295924d31d7e3%3A0xa97ff301a9bd10ff!2z0J_QsNGC0YLQsNC50Y8sINCR0LDQvdC70LDQvNGD0L3Qsywg0KfQvtC90LHRg9GA0LggMjAxNTAsINCi0LDQuNC70LDQvdC0!5e0!3m2!1sru!2sil!4v1609840442083!5m2!1sru!2sil";


let index = 0;

let myCities = [Moscow, TelAviv, Barcelona, Reykjavik, Pattaya];

let currentCity = myCities[index];


const city = document.getElementsByTagName('iframe')[0];
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector('.next');

city.src = currentCity;




if(index === 0) {
	//prevButton.disabled=true
	prevButton.style.visibility='hidden';
	
}


function next(){
	//prevButton.disabled=false;
	prevButton.style.visibility='visible';
	
	if(index > 0) {
		//prevButton.disabled=false;
		prevButton.style.visibility='visible';
	}


	if(index >= 3){
		//nextButton.disabled=true;
		nextButton.style.visibility='hidden';
	}

	index++;


	
	
	if(index >= myCities.length){
		index = 0;
	}

	city.src = myCities[index]
	
}

	

function prev() {

	//nextButton.disabled=false;
	nextButton.style.visibility='visible';
	
	if(index <= 1){
		//prevButton.disabled=true;
		prevButton.style.visibility='hidden';
	}

	index--;
	
	if(index < 0 ) {
		index = myCities.length - 1;
	}

	city.src = myCities[index];
}



prevButton.addEventListener("click", function() {
	prev();
});


nextButton.addEventListener("click", function() {
	next();
});


// footer

let skills = [' CSS ', ' HTML ', ' JavaScript '];

let footerCont = document.getElementById('footer-cont');

footerCont.insertAdjacentHTML('beforeend', `<p>This site was created via: ${skills}</p>`)



