// var url = "www.podcastrepublic.net";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", url);
//
//
//
// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};
//
// xhr.send();
var data =""
$.ajax({ url: 'https://cors-anywhere.herokuapp.com/https://www.podcastrepublic.net',  async:false, success: function(a) {
  // console.log(data)
   data = a
 }
});

var el = document.createElement( 'html' );
el.innerHTML = data;
var span  = el.getElementsByClassName("thumbnail")// Live NodeList of your anchor element
var caption  = el.getElementsByClassName("caption")
var urls = el.getElementsByTagName("a")
console.log(urls)

console.log(span.length)
var htr = document.getElementById("interface")
for(var i=12;i<span.length;i++){

  htr.innerHTML += '<div class="row gx-lg-5" > <div class="col-lg-6 col-xxl-4 mb-5" ><div class="card bg-light border-0 h-100" ><div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" >'+
                    '<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">'+ span[i].innerHTML+'</div><h2 class="fs-4 fw-bold">'+caption[i].innerHTML+'</h2>'+
                    '<p class="mb-0"></p></div></div></div>'
}
