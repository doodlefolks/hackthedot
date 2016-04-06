(function() {
  var trees = ['Tree/bigTreeHD.jpg', 'Tree/blueTree.jpg', 'Tree/bonsaiTree.jpg', 'Tree/cherryTree.jpg', 'Tree/christmasTree.jpg', 'Tree/coconuteTree.jpg', 'Tree/csTree.jpg', 'Tree/deadTree.jpg', 'Tree/pineTree.jpg', 'Tree/treeOfLife.jpg'];
  var notTrees = ['http://www.placecage.com/300/200'];
  var score = 0;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function loadPics () {
    var treeIndex = getRandomInt(0, trees.length - 1);
    var notTreeIndex = getRandomInt(0, notTrees.length - 1);
    return { tree: trees[treeIndex], notTree: notTrees[notTreeIndex] };
  }

  $(document).ready(function () {
    var newPics = loadPics();
    $('.left').attr('src', newPics.tree);
    $('.right').attr('src', newPics.notTree);

    $('img').click(function () {
      var picked = $(this);
      var notPicked = $(this).closest('img');
      var parentClass = $(this).parent().attr('class');

      if (trees.indexOf(picked.attr('src')) == -1) {
        // you lose
      } else {
        score++;
        $('#score').html(score);
      }

      var newPics = loadPics();
      if (Math.random() > 0.5) {
        $('.left').attr('src', newPics.tree);
        $('.right').attr('src', newPics.notTree);
      } else {
        $('.right').attr('src', newPics.tree);
        $('.left').attr('src', newPics.notTree);
      }
    });
    window.setTimeout(function () {
      var message;
      if (score < 10) {
        message = 'Not a tree hugger...';
      }
      alert('Your score:' score);
      alert(message);
      document.location.reload(true);
    }, 10000);
  });
}())
