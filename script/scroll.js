const scrollBtn = document.querySelector('#help-btn');

function scrollToSection() {
    document.getElementById("with-form").scrollIntoView({
      behavior: "smooth"
    });
  }

scrollBtn.addEventListener('click', scrollToSection)  