// Formulaire de contact du Directeur Général
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.querySelector('input[placeholder="Votre nom"]').value;
    const email = document.querySelector('input[placeholder="Votre email"]').value;
    const message = document.querySelector('textarea[placeholder="Votre message"]').value;

    // Configurer l'email du destinataire et le sujet
    const destinataire = "cabinetpolygroup@gmail.com";
    const sujet = "Message de contact de " + nom;

    // Créer le lien mailto avec les détails du message
    const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent("Nom : " + nom + "\nEmail : " + email + "\n\nMessage : " + message)}`;

    // Ouvrir le client de messagerie avec le lien mailto
    window.location.href = mailtoLink;
});

// Fonctionnalité de modal pour l'image
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Ouvre la modal en cliquant sur la photo
document.querySelector('.photo').addEventListener('click', function() {
    modal.style.display = 'flex'; // Affiche la modal
    modalImage.src = this.src; // Utilise l'image de la photo dans la modal
});

// Ferme la modal en cliquant sur le bouton "close"
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Cache la modal
});

// Ferme la modal en cliquant en dehors de l'image
modal.addEventListener('click', function(event) {
    if (event.target === modal) { // Vérifie si le clic est en dehors de l'image
        modal.style.display = 'none'; // Cache la modal
    }
});
