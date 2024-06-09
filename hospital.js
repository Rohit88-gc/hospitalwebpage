let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");


let count = 0;

slide.forEach(function (slides, index) {
   slides.style.left = `${index * 100}%`
})

function myFun() {
   slide.forEach(function (curVal) {
      curVal.style.transform = `translateX(-${count * 100}%)`
   })
}
setInterval(function () {
   count++;
   if (count == slide.length) {
      count = 0;
   }
   myFun()
}, 20000)

const doctorDetails = {
   1: {
      name: "Dr. Vipin Kulkarni",
      description: "Dr. Vipin Kulkarni is an experienced neurologist known for his comprehensive approach to treating neurological disorders and his commitment to advancing neurological research.",
      imgSrc: "d1.jpg"
   },
   2: {
      name: "Dr. Rohan Gupta",
      description: "Dr. Rohan Gupta is a renowned cardiologist with over a decade of experience in treating complex heart conditions. His dedication and expertise have earned him numerous accolades in the medical community.",
      imgSrc: "d2.jpg"
   },
   3: {
      name: "Dr. Anjali Sharma",
      description: "Dr. Anjali Sharma is a skilled dentist known for her expertise in cosmetic and restorative dentistry. Her meticulous approach to dental care and her use of state-of-the-art technology ensure optimal results for her patients.",
      imgSrc: "d10.jpeg"
   }
};

document.querySelectorAll('.card').forEach(function (card) {
   card.addEventListener('click', function () {
      const doctorId = this.dataset.doctor;
      const detailElement = document.querySelector('.detail');
      const contentElement = document.querySelector('.content');
      const doctor = doctorDetails[doctorId];

      contentElement.innerHTML = `
           <img src="${doctor.imgSrc}" alt="${doctor.name}">
           <div class="contentText">
               <h1>${doctor.name}</h1>
               <p>${doctor.description}</p>
           </div>
       `;
      detailElement.style.display = 'block';
   });
});

document.querySelector('.closeBtn').addEventListener('click', function () {
   document.querySelector('.detail').style.display = 'none';
});

function validateForm() {
   // Get references to form elements
   var name = document.getElementById("name");
   var email = document.getElementById("email");
   var subject = document.getElementById("subject");
   var message = document.getElementById("message");

   // Check if name is empty
   if (name.value === "") {
      alert("Please enter your name.");
      return false;
   }

   // Basic check for email format
   if (!/\S+@\S+\.\S+/.test(email.value)) {
      alert("Please enter a valid email address.");
      return false;
   }

   // Check if subject is empty (optional)
   if (subject.value === "") {
      alert("Please enter a subject for your inquiry.");
      return false;
   }

   // Check if message is empty
   if (message.value === "") {
      alert("Please enter your message.");
      return false;
   }

   // If all validations pass, return true to allow form submission
   return true;
}

// JavaScript for HealthNexus website
document.addEventListener('DOMContentLoaded', function () {
   const bar = document.getElementById('bar');
   const navLinks = document.getElementById('nav-links');

   bar.addEventListener('click', () => {
      navLinks.classList.toggle('active');
   });

   const showMoreBtn = document.getElementById('showMoreBtn');
   showMoreBtn.addEventListener('click', () => {
      window.location.href = '#speciality';
   });

   // JavaScript for handling doctor details popup
   const doctorCards = document.querySelectorAll('.card');
   const detailPopup = document.querySelector('.detail');
   const closeBtn = detailPopup.querySelector('.closeBtn');

   doctorCards.forEach(card => {
      card.addEventListener('click', () => {
         const doctorName = card.querySelector('p:first-child').textContent;
         const doctorSpeciality = card.querySelector('p:last-child').textContent;
         detailPopup.querySelector('.content').innerHTML = `
               <h2>${doctorName}</h2>
               <p>${doctorSpeciality}</p>
           `;
         detailPopup.style.display = 'block';
      });
   });

   closeBtn.addEventListener('click', () => {
      detailPopup.style.display = 'none';
   });
});
