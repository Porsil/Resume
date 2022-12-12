function sendMail(contactForm) {
    emailjs.send("service_arguzro", "Rosie", {
        project_request: contactForm.name.value,
        from_name: contactForm.emailaddress.value,
        from_email: contactForm.projectsummary.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false;  
}
