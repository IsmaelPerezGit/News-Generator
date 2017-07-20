window.onload = function() {

  $.ajax({
    url: "https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=404889df5a3445b1b4b458767f966e23",
    success: function(data) {
      console.log(data.articles[0]);
      var articleObjArr = [];
      var storyTitleUrlArray = [];

      function randomTitleUrlGetter() {
        for (var i = 0; i < data.articles.length; i++) {
          var articleObj = {};
          var retrievedData = data.articles[i];
          var retrievedDataTitle = retrievedData.title;
          var retrievedDataUrl = retrievedData.url;
          var retrievedDataImage = retrievedData.urlToImage;

          articleObj.title = retrievedDataTitle;
          articleObj.url = retrievedDataUrl;
          articleObj.image = retrievedDataImage;
          articleObjArr.push(articleObj);
          storyTitleUrlArray.push(articleObjArr[i]);
        }
        var randomArticle = storyTitleUrlArray[Math.floor(Math.random() * storyTitleUrlArray.length)];
        return randomArticle;
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
