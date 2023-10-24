$(document).ready(function () {
    $("#pobierz-dane").click(function () {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: "json",
            success: function (data) {
                let daneProgramisty = "Imię: " + data.imie + "<br> Nazwisko: " + data.nazwisko + "<br> Zawód: " + data.zawod + "<br> Firma: " + data.firma;
                $("#dane-programisty").html(daneProgramisty);
            }
        });
    });
});