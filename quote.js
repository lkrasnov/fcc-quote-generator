$(document).ready(function() {

  $("#getQuote").on("click", function() {
    $.ajax({
      cache: false,
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      dataType: "json",
      success: function(data) {
        var quote = data[0];
        var quoteContent = quote.content.slice(3, quote.content.length - 6);
        var quoteTitle = quote.title;

        $(".quote-content").html(quoteContent);
        $(".quote-title").html("— " + quoteTitle.toUpperCase()); 
      }
    });
  });
  
});
