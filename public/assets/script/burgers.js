$(document).ready(function () {

    //Button handler and AJAX call for NEW BURGER
    $(".create-form").on("submit", function (stuff) {
        stuff.preventDefault();

        var newBurger = { //New burger object from form
            burgerName: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val() //Boolean shouldn't need .trim() ??
        };
        console.log(newBurger); //TODO comment this out...

        $.ajax("/api/burgers", { //POST new burger to burgers_controller for handling
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload(); //reload page to force updated list to write to DOM
        })
    });//END New burger creation handler & call

    //Button Handler and AJAX call to 'devour' a specific burger
    $(".eatIt").on("click", function (stuff) {

        var id = $(this).data("id"); //id from dynamically created button
        var hasEaten = { //object created to pass in new value to AJAX call
            devoured: /*$(this).data("eaten")*/ 1
        };
        console.log(id); //TODO comment this out...
        console.log(hasEaten); //TODO comment this out...

        $.ajax("/api/burgers/" + id, { //Change value of selected burger
            type: "PUT",
            data: hasEaten
        }).then(function () {
            location.reload(); //Burger should move to right (eaten) column
        })
    })//end devour logic & call


}) //END DOCUMENT READY FUNCTION