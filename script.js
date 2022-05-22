$(function () {
  console.log("ready!");

  $(".btn-danger").hover(
    function () {
      $(this).css({
        "background-color": "white",
        color: "#FA5757",
      });
    },
    function () {
      $(this).css({
        "background-color": "#FA5757",
        color: "white",
      });
    }
  );

  $(".btn-primary").hover(
    function () {
      $(this).css({
        "background-color": "white",
        color: "hsl(231, 69%, 60%)",
      });
    },
    function () {
      $(this).css({
        "background-color": "hsl(231, 69%, 60%)",
        color: "white",
      });
    }
  );

  $(".btn-light ").hover(
    function () {
      $(this).css({
        "background-color": "white",
        color: "gray",
      });
    },
    function () {
      const newColor = "white";
      $(this).css({
        "background-color": "lightgray",
        color: newColor,
      });
    }
  );

  $(".simple-book").on("click", function () {
    $(".simple").addClass("border-danger");
    $(".speedy").removeClass("border-danger ");
    $(".easy").removeClass("border-danger");
    $("#bookmark-onclik").show();
    $("#share-bookmark").removeClass("d-none");
    $("#intelligent-search").addClass("d-none");
    $("#share-bookmark").addClass("d-none");
  });

  $(".speedy-search").on("click", function () {
    console.log("çalıştı");
    $(".speedy").addClass("border-danger ");
    $(".simple").removeClass("border-danger");
    $(".easy").removeClass("border-danger");
    $("#bookmark-onclik").hide();
    $("#intelligent-search").removeClass("d-none");
    $("#intelligent-search").addClass("d-flex");
    $("#share-bookmark").addClass("d-none");
  });

  $(".easy-sharing").on("click", function () {
    $(".easy").addClass("border-danger");
    $(".speedy").removeClass("border-danger ");
    $(".simple").removeClass("border-danger");
    $("#share-bookmark").removeClass("d-none");
    $("#share-bookmark").addClass("d-flex");
    $("#intelligent-search").removeClass("d-flex");
    $("#intelligent-search").addClass("d-none");
    $("#bookmark-onclik").hide();
  });

 
   //input email validaiton
    (() => {
      "use strict";


      const forms = document.querySelectorAll(".needs-validation");

  
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
 
});
