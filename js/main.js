const navBar = document.getElementById("navbar");
let scrolled = false;
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navBar.classList.remove("top");
    if (!scrolled) {
      navBar.style.transform = "translateY(-70px)";
    }
    setTimeout(() => {
      navBar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navBar.classList.add("top");
    scrolled = false;
  }
};
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

const nameEl = document.getElementById("name").value = "";
const emailEl = document.getElementById("email").value = "";
const messageEl = document.getElementById("message").value = "";
const sendBtn = document.getElementById("send-btn")
 
function SendMail() {
    emailjs.init("9VCG56vcY2byZ2JqC");

    var params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

  var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;

  if (name == "" || name == null) {
    alert("Name must be filled out");
    return false;
  } else if (email == ""  || email == null) {
        alert("email must be filled out");
            return false;
  } else if (message == "" || message == null) {
        alert("message must be filled out");
        return false;
  } else {
     emailjs
       .send("service_4w9iozk", "template_kv7vr4h", params)
       .then(function (res) {
         alert("success!" + res.status);
       });
  }
}