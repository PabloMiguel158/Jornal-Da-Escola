document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.read-more');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const newsId = this.getAttribute('data-news');
        const newsArticle = document.getElementById(newsId);
  
        if (newsArticle) {
          newsArticle.classList.toggle('expanded');
        }
      });
    });
  });
  