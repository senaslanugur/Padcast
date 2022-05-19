function test(){

  var main_url = "https://cors-anywhere.herokuapp.com/"
  var url = main_url + "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=b1a9b16710cb1d713b45ae3706afd8d0ec2fc987da236db538a93d9924d576ac"
  $.ajax({ url: url,
    headers: {'Access-Control-Allow-Origin': '*' },
    async:false,
    success: function(a) {
      location.reload();
     },
  });
}
