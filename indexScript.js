window.onload = function(){
  $.ajax({
  url: "https://content.guardianapis.com/search?q=technology&api-key=3cacc75f-61ed-4cf7-b623-78c2af06d49d",
  success: function(data){

    var articleArr = [];
    var storyTitleArray = [];

    function randomTitleGetter() {
      for (var i = 0; i < data.response.results.length; i++) {
        var retrievedData = data.response.results;
        var retrievedDataTitle = data.response.results[0].webTitle;
        articleArr.push(retrievedData[i]);
        storyTitleArray.push(articleArr[i].webTitle);
        }
        var randomTitle = storyTitleArray[Math.floor(Math.random() * storyTitleArray.length)];
        return randomTitle;
        console.log(randomTitle);
    }
        console.log(randomTitleGetter());
        document.getElementsByClassName("jumbotronText")[0].innerHTML = randomTitleGetter();
      }
  });
};
