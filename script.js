
function changeContent(contentId) {
    var contents = document.querySelectorAll('#box > div');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
  }

changeContent('home');