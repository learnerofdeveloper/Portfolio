$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    
    });
    function sendEmail() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
    
        // Create a mailto link
        const mailtoLink = `mailto:poswalmanavv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
    
        // Open the mail client
        window.location.href = mailtoLink;
    }