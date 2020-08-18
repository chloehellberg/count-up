$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());

    if (countTo && countBy && countTo>0 && countBy>0) {
      for (let index=countBy; index <= countTo; index+=countBy) {
        $("#overHere").append(" " + index);
      }
    } else {
      alert("Please enter a number.")
    }
  });
})