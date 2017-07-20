window.onload = function() {
  $.ajax({
    url: "https://content.guardianapis.com/search?q=world&api-key=3cacc75f-61ed-4cf7-b623-78c2af06d49d",
    success: function(data) {

      var articleObjArr = [];
      var storyTitleUrlArray = [];

      function randomTitleUrlGetter() {
        for (var i = 0; i < data.response.results.length; i++) {
          var articleObj = {};
          var retrievedData = data.response.results[i];
          console.log(retrievedData);
          var retrievedDataTitle = retrievedData.webTitle;
          var retrievedDataUrl = retrievedData.webUrl;

          articleObj.title = retrievedDataTitle;
          articleObj.url = retrievedDataUrl;
          articleObjArr.push(articleObj);
          storyTitleUrlArray.push(articleObjArr[i]);

        }
        var randomTitle = storyTitleUrlArray[Math.floor(Math.random() * storyTitleUrlArray.length)];
        return randomTitle;
      }
        randomTitleUrlGetter();

        document.getElementsByClassName("generateButton")[0].addEventListener("click", function() {
        var randomizedObject = randomTitleUrlGetter();
          document.getElementsByClassName("jumbotronText")[0].innerHTML = randomizedObject.title;
          document.getElementsByClassName("generateButton")[0].innerHTML = "Next Story";
          document.getElementsByClassName("jumbotronText")[0].href = randomizedObject.url;
      });

      document.getElementsByClassName("generateButton")[0].addEventListener("click", function() {
        this.blur();
      });
    }
  });
};
