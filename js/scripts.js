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
//https://cors-anywhere.herokuapp.com/https://www.podcastrepublic.net
// xhr.send();
var exp = new Date();
exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000); //3天过期
document.cookie="region=" + "tr" + ";expires=" + exp.toGMTString() + ";path=/";

function get_data(){
  var data =""
  var url = "https://api.allorigins.win/get?url=https://www.podcastrepublic.net"
  $.ajax({ url: url,
    headers: {'Access-Control-Allow-Origin': '*'},
    async:false,
    success: function(a) {
      data = a
     },
  });
  // if (data === "") {
  //   test()
  // }
  var el = document.createElement( 'html' );
  el.innerHTML = data.contents;
  var span  = el.getElementsByClassName("thumbnail")// Live NodeList of your anchor element
  var caption  = el.getElementsByClassName("caption")
  var urls = el.getElementsByTagName("a")

  // var test = urls[25]
  // console.log("https://www.podcastrepublic.net"+test.getAttribute("href"))

  // urls[25].substring(urls[25].indexOf('cat_id') + 1);
  console.log(span.length)
  var htr = document.getElementById("interface")
  for(var i=12;i<span.length;i++){
    var url_cat ="https://www.podcastrepublic.net"
    htr.innerHTML += '<a href="./category_result.html" style=" text-decoration: none; color:black;" <div class="row gx-lg-5" id="https://www.podcastrepublic.net'+urls[i+13].getAttribute("href")+'" onclick="category_result(this)"> <div class="col-lg-6 col-xxl-4 mb-5" ><div class="card bg-light border-0 h-100" ><div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" >'+
                      '<div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">'+ span[i].innerHTML+'</div><h2 class="fs-4 fw-bold">'+caption[i].innerHTML+'</h2>'+
                      '<p class="mb-0"></p></div></div></div></a>'
  }
}
get_data()
