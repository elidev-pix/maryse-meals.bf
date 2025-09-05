const menuIcon = document.getElementById("list-icon");
const menu = document.querySelector(".menu_content");

menuIcon.addEventListener("click", () => {
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});


  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_5bqv7x6', 'template_lz3q61l', this)
      .then(() => {
        alert('✅ Commentaire envoyé avec succès !');
        this.reset(); 
      })
      .catch(err => {
        console.error('Erreur EmailJS :', err);
        alert('❌ Erreur : ' + JSON.stringify(err));
      });
  });

