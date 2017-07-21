window.onload = function() {

  //Request Api Data
  $.ajax({
    url: "https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=404889df5a3445b1b4b458767f966e23",
    success: function(data) {

      var articleObjArr = [];
      var storyTitleUrlArray = [];

      //Create Object with Title, Url, and Image from api data
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

      var jumbotronText = document.getElementsByClassName("jumbotronText")[0];
      var articleButton = document.getElementsByClassName("getArticleButton")[0];
      var randomArticleButton = document.getElementsByClassName("randomButton")[0];

      randomTitleUrlGetter();

      function dateTime() {
        var dt = new Date();
        jumbotronText.innerHTML = "Tech News for " + dt.toLocaleDateString()
      }
      dateTime();

      // add functionality to article button
      // functionality gets random story on click
      articleButton.addEventListener("click", function() {
        var randomizedObject = randomTitleUrlGetter();
        var counter = 0;
        jumbotronText.innerHTML = randomizedObject.title;
        articleButton.innerHTML = "Next Story";
        jumbotronText.href = randomizedObject.url;
      });

      articleButton.addEventListener("click", function(){
        this.blur();
      });
      randomArticleButton.addEventListener("click", function(){
        this.blur();
      });

    }
  });
};
