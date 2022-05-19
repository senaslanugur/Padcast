var url = localStorage.getItem("url")

$.ajax({ url: url,
  headers: {'Access-Control-Allow-Origin': '*' },
  async:false,
  success: function(a) {
    var test = document.getElementById("test")
    var el = document.createElement( 'html' );
    el.innerHTML = a;
    var img  = el.getElementsByTagName("img")

    var header = el.getElementsByTagName("h4")
    var sub_header = el.getElementsByTagName("h6")

    var links = el.getElementsByClassName("album_frame")
    // console.log(links[0].getAttribute("href"))

    for(var i=0; i<img.length; i++){
          test.innerHTML += '<div class="col mb-5"> <div class="card h-100"><img class="card-img-top" src="'+img[i+1].getAttribute("src")+'" />'+
          '<div class="card-body p-4"> <div class="text-center"><h5 class="fw-bolder">'+header[i].textContent+'</h5>'+sub_header[i].textContent+'</div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
          '<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick=go_listen(this) id ="https://www.podcastrepublic.net'+links[i].getAttribute("href")+'"href="./listen.html">Start Listen</a></div></div></div>'
    }
   },
})

function go_listen(d){

  var podcasts = "https://cors-anywhere.herokuapp.com/" + d.id
  localStorage.setItem("podcasts",podcasts)
}
