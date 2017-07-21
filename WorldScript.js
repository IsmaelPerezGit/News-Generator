window.onload = function() {
  $.ajax({
    url: "https://content.guardianapis.com/search?q=world&api-key=3cacc75f-61ed-4cf7-b623-78c2af06d49d",
    success: function(data) {
      var articleObjArr = [];
      var storyTitleUrlArray = [];
      console.log(data.response.results);
      function randomTitleUrlGetter() {
        for (var i = 0; i < data.response.results.length; i++) {
          var articleObj = {};
          var retrievedData = data.response.results[i];
          var retrievedDataTitle = retrievedData.webTitle;
          var retrievedDataUrl = retrievedData.webUrl;
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
      var button = document.getElementsByClassName("getArticleButton")[0];
      var randomArticleButton = document.getElementsByClassName("randomButton")[0];

      randomTitleUrlGetter();

      function dateTime() {
        var dt = new Date();
        jumbotronText.innerHTML = "World News for " + dt.toLocaleDateString()
      }
      dateTime();

      button.addEventListener("click", function() {
      var randomizedObject = randomTitleUrlGetter();
      var  counter = 0;
      jumbotronText.innerHTML = randomizedObject.title;
      button.innerHTML = "Next Story";
      jumbotronText.href = randomizedObject.url;
      });

      randomArticleButton.addEventListener("click", function() {
        var myVar;
        myVar = setInterval(function() {
          var randomizedObject = randomTitleUrlGetter();
          var counter = 0;
          jumbotronText.innerHTML = randomizedObject.title;
          articleButton.innerHTML = "Next Story";
          jumbotronText.href = randomizedObject.url;
        }, 4000);
      });

      button.addEventListener("click", function(){
        this.blur();
      });
      randomArticleButton.addEventListener("click", function(){
        this.blur();
      });

    }
  });
};
