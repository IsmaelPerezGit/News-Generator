document.addEventListener('load', function(){
  $.ajax({
  url: "http://content.guardianapis.com/search?section=technology&api-key=3cacc75f-61ed-4cf7-b623-78c2af06d49d",
  success: function(data){
    console.log(data);
    }
  });
});
