let navbar = document.querySelector(".header .navbar");
let accountBox = document.querySelector(".header .account-box");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  accountBox.classList.remove("active");
};

document.querySelector("#user-btn").onclick = () => {
  accountBox.classList.toggle("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  accountBox.classList.remove("active");
};


document.querySelectorAll('.show-products .box-container .box .delete-btn').forEach(
  button => { button.addEventListener('click', function() { 
     this.closest('.show-products .box-container .box').style.display = 'none';
     })
  })
