function test(){

  var main_url = "https://cors-anywhere.herokuapp.com/"
  var url = "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=09f2cf0db8fa06a409034124e0a621399d7a91d3de74eabc7377afc5c8cb8c1d"
  $.ajax({ url: url,
    headers: {'Access-Control-Allow-Origin': '*' },
    async:false,
    success: function(a) {
      location.reload();
     },
  });
}
