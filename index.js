(function() {
  var trees = [];
  var notTrees = [];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function loadPics () {
    var treeIndex = getRandomInt(0, trees.length - 1);
    var notTreeIndex = getRandomInt(0, notTrees.length - 1);
    return { tree: trees[treeIndex], notTree: notTrees[notTreeIndex] };
  }

  $(document).ready(function () {
    $('img').click(function () {
      var picked = $(this);
      var notPicked = $(this).closest('img');
      var parentClass = $(this).parent().attr('class');
      var parentIndex = parseInt(parentClass.split('set')[1]);
      var nextSection = 'set' + (parentIndex + 1);

      if (trees.indexOf(picked.attr('src')) == -1) {
        // you lose
      } else {
        // you win
      }

      $(nextSection).attr('display', 'block');
      $(this).parent().attr('display', 'none');
    });
  });
}())
