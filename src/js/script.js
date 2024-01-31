$(document).ready(function (){
  $('.edit-button').on('click', function() {
    var $task = $(this).closest('.task');
    $task.find('.progress').addClass('hidden');
  });
});