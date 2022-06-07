var url = localStorage.getItem("url")

// $.ajax({ url: url,
//   headers: {'Access-Control-Allow-Origin': '*' },
//   async:true,
//   success: function(a) {
//     var test = document.getElementById("test")
//     var el = document.createElement( 'html' );
//     el.innerHTML = a;
//     var img  = el.getElementsByTagName("img")
//
//     var header = el.getElementsByTagName("h4")
//     var sub_header = el.getElementsByTagName("h6")
//
//     var links = el.getElementsByClassName("album_frame")
//     // console.log(links[0].getAttribute("href"))
//
//     for(var i=0; i<img.length; i++){
//           test.innerHTML += '<div class="col mb-5"> <div class="card h-100"><img class="card-img-top" src="'+img[i+1].getAttribute("src")+'" />'+
//           '<div class="card-body p-4"> <div class="text-center"><h5 class="fw-bolder">'+header[i].textContent+'</h5>'+sub_header[i].textContent+'</div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
//           '<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick=go_listen(this) id ="https://www.podcastrepublic.net'+links[i].getAttribute("href")+'"href="./listen.html">Start Listen</a></div></div></div>'
//     }
//    },
// })


var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var test = document.getElementById("test")
        var el = document.createElement( 'html' );
        el.innerHTML = myArr.contents;
        var img  = el.getElementsByTagName("img")

        var header = el.getElementsByTagName("h4")
        var sub_header = el.getElementsByTagName("h6")

        var links = el.getElementsByClassName("album_frame")
        // console.log(links[0].getAttribute("href"))

        for(var i=0; i<img.length; i++){
              test.innerHTML += '<div class="col mb-5"> <div class="card h-100"><img class="card-img-top" src="'+img[i+1].getAttribute("src")+'" />'+
              '<div class="card-body p-4"> <div class="text-center"><h5 class="fw-bolder">'+header[i].textContent+'</h5>'+sub_header[i].textContent+'</div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
              '<div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick=go_listen(this) id ="https://www.podcastrepublic.net'+links[i].getAttribute("href")+'">Start Listen</a></div></div></div>'
        }
    }else{

      let timerInterval
      Swal.fire({
        toast:true,
        title: 'Loading',
        html: ' thay will be avaliable after <b style="color:blue"></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        imageUrl: 'assets/podcast.png',
        imageAlt: 'Custom image',
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    }
};

xmlhttp.open('GET', document.location.protocol + '//api.allorigins.win/get?url='+escape(url, true));
xmlhttp.send();



function go_listen(d){

  var podcasts = d.id
  localStorage.setItem("podcasts",podcasts)
  window.location.href= "./listen.html"
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("test");
    li = ul.getElementsByClassName("mb-5");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
