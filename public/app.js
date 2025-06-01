const ham=document.getElementById("ham");
const mobile_menu=document.getElementById("mobile-menu");

ham.addEventListener("click",()=>{
    mobile_menu.classList.toggle("hidden")
})

const menuLinks=mobile_menu.querySelectorAll("a");
menuLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        mobile_menu.classList.add('hidden')
    })
})

// Smooth scroll for all nav links (both desktop and mobile)
document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
  link.addEventListener('click', function(event) {
    // Only handle if href is a hash link to a section on the page
    if (this.hash !== "") {
      event.preventDefault();

      const targetId = this.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
