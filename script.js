const toggleButtons = document.querySelectorAll('.month');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the corresponding content
        const expandableSection = this.nextElementSibling;

        // Toggle the active class
        if (expandableSection.classList.contains('active')) {
            expandableSection.classList.remove('active');
        } else {
            // Close any other open sections
            document.querySelectorAll('.month-content.active').forEach(section => {
                section.classList.remove('active');
            });
            expandableSection.classList.add('active');
        }
    });
});