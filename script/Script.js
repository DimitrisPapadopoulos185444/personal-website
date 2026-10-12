document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Επιλογές για τα άλλα στοιχεία
    const headerElement = document.querySelector('header');
    const navElement = document.querySelector('nav');
    const h1Element = document.querySelector('h1');
    const h2Element = document.querySelectorAll('h2'); // Αλλάξαμε σε querySelectorAll για όλα τα h2
    const h3Element = document.querySelectorAll('h3'); // Αλλάξαμε σε querySelectorAll για όλα τα h3
	const h4Element = document.querySelectorAll('h4'); // Αλλάξαμε σε querySelectorAll για όλα τα h4
    const pElements = document.querySelectorAll('p'); // Αλλάξαμε σε querySelectorAll για όλα τα p
    const glassElement = document.querySelector('.glass');
    const buttonElement = document.querySelector('.button');
    const rbContainer = document.querySelector('.rb-container'); // Προσθήκη rb-container
    const tabsMenu = document.querySelector('.tabs-menu'); // Προσθήκη tabs-menu

    // Ελέγχουμε αν το θέμα έχει αποθηκευτεί στο τοπικό αποθηκευτικό χώρο του χρήστη
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        headerElement.classList.add('dark-mode');
        navElement.classList.add('dark-mode');
        h1Element.classList.add('dark-mode');
        h2Element.forEach(el => el.classList.add('dark-mode')); // Προσθέτουμε σε όλα τα h2
        h3Element.forEach(el => el.classList.add('dark-mode')); // Προσθέτουμε σε όλα τα h3
		h4Element.forEach(el => el.classList.add('dark-mode')); // Προσθέτουμε σε όλα τα h4
        pElements.forEach(el => el.classList.add('dark-mode')); // Προσθέτουμε σε όλα τα p
        glassElement.classList.add('dark-mode');
        buttonElement.classList.add('dark-mode');
        rbContainer.classList.add('dark-mode'); // Προσθήκη κλάσης για το timeline
        tabsMenu.classList.add('dark-mode'); // Προσθήκη κλάσης για το μενού καρτελών
        themeIcon.src = 'images/Sun_Icon.png'; // Αλλαγή στο εικονίδιο σεληνιακής λειτουργίας
    } else {
        themeIcon.src = 'images/Moon_Icon.png'; // Εικονίδιο ήλιου για φωτεινό θέμα
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        headerElement.classList.toggle('dark-mode');
        navElement.classList.toggle('dark-mode');
        h1Element.classList.toggle('dark-mode');
        h2Element.forEach(el => el.classList.toggle('dark-mode')); // Εναλλαγή για όλα τα h2
        h3Element.forEach(el => el.classList.toggle('dark-mode')); // Εναλλαγή για όλα τα h3
		h4Element.forEach(el => el.classList.toggle('dark-mode')); // Εναλλαγή για όλα τα h4
        pElements.forEach(el => el.classList.toggle('dark-mode')); // Εναλλαγή για όλα τα p
        glassElement.classList.toggle('dark-mode');
        buttonElement.classList.toggle('dark-mode');
        rbContainer.classList.toggle('dark-mode'); // Εναλλαγή για το timeline
        tabsMenu.classList.toggle('dark-mode'); // Εναλλαγή για το μενού καρτελών

        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/Sun_Icon.png'; // Σελήνη για νυχτερινό θέμα
            localStorage.setItem('theme', 'dark'); // Αποθήκευση νυχτερινού θέματος
        } else {
            themeIcon.src = 'images/Moon_Icon.png'; // Ήλιος για φωτεινό θέμα
            localStorage.setItem('theme', 'light'); // Αποθήκευση φωτεινού θέματος
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Αφαιρούμε την active κλάση από όλες τις καρτέλες και περιεχόμενα
            tabLinks.forEach(item => item.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Προσθέτουμε την active κλάση στην επιλεγμένη καρτέλα και το σχετικό περιεχόμενο
            this.classList.add("active");
            document.getElementById(this.getAttribute("data-tab")).classList.add("active");
        });
    });
});
