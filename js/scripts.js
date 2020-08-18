$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());

    let answer = [];

    for (let index=countBy; index <= countTo; index+=countBy) {
      console.log(index);
    }

    $("#story").show();

  });
})