

// $(document).ready(function(){
//     $(document.body).on("click",'#tableBody tr',function(){
//         // window.location.href="app/profile/"+$(this).attr("id");
//         let id=$(this).attr("id");
//         window.location.href="{% url 'ShowProfile' 20230001 %}";
//         // console.log($(this).attr("id"));
//         // alert($(this).attr("id"));
//     })
// })
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
