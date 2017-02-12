$(document).ready(function() {

  $("#getQuote").on("click", function() {
    $.ajax({
      cache: false,
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      dataType: "json",
      success: function(data) {
        var quote = data[0];
        var quoteContent = quote.content.slice(3, quote.content.length - 5);
        var quoteTitle = quote.title;

        $(".quote-content").html(quoteContent);
        $(".quote-title").html("— " + quoteTitle.toUpperCase());
        $(".quote").removeClass("hide"); 
        $("#tweet").attr("href", "http://twitter.com/home?status=" + quoteContent + " — " + quoteTitle);
      }
    });
  });

});
