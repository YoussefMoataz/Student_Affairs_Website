//search data
$(document).ready(function() {
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        if ($("#active").is(":checked")) {
            
        $("#tableBody tr.Active").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        } else {
            console.log("inactive");
        $("#tableBody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        }
    });

    $("#active").on("click", function() {
        $("#searchInput").trigger("keyup"); 
    });
    });

//show active only
    $(document).ready(function() {
        $("#active").on("click", function() {
          if ($(this).is(":checked")) {
              $("#tableBody tr").hide().filter(function() {
              return $(this).hasClass("Active");
              }).show();
          } else {
              $("#tableBody tr").show();
              
          }
        });
      });
