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
$.ajax({ url: 'https://cors-anywhere.herokuapp.com/https://podcastrepublic.net', success: function(data) { console.log(data); } });
