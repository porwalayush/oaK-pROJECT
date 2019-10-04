var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("my");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1500); // Change image every 2 seconds
}
//http://projectcsi3.s3-website.ap-south-1.amazonaws.com/index.html
$( document ).ready(function() {
  var hamburger = $('#hamburger-icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     return false;
  });
});

