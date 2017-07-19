window.onload = function() {
  $.ajax({
    url: "https://content.guardianapis.com/search?q=technology&api-key=3cacc75f-61ed-4cf7-b623-78c2af06d49d",
    success: function(data) {


      var articleObjArr = [];
      var storyTitleUrlArray = [];

      function randomTitleUrlGetter() {
        for (var i = 0; i < data.response.results.length; i++) {
          var articleObj = {};
          var retrievedData = data.response.results[i];
          var retrievedDataTitle = retrievedData.webTitle;
          var retrievedDataUrl = retrievedData.webUrl;

          articleObj.title = retrievedDataTitle;
          articleObj.url = retrievedDataUrl;
          //console.log(articleObj);
          articleObjArr.push(articleObj);
          //console.log(articleObjArr);
          storyTitleUrlArray.push(articleObjArr[i]);

        }
        var randomTitle = storyTitleUrlArray[Math.floor(Math.random() * storyTitleUrlArray.length)];
        console.log(randomTitle.title);
        console.log(randomTitle.url);
        return randomTitle;
      }
        randomTitleUrlGetter();

        document.getElementsByClassName("generateButton")[0].addEventListener("click", function() {
        var randomizedObject = randomTitleUrlGetter();
        document.getElementsByClassName("jumbotronText")[0].innerHTML = randomizedObject.title;
        document.getElementsByClassName("generateButton")[0].innerHTML = "Next Story";
        document.getElementsByClassName("linkText")[0].href = randomizedObject.url;
      });
    }
  });
};
