let lenyek = [];
let osztalyokTanulok = [];
let menuSzoveg;

$(function () {

    $.ajax(
            {url: "osztalyokTanulok.json",
                success: function (result) {
                    osztalyokTanulok = result.osztalyok;
                    lenyek = result.allatlista;
                    console.log("ajax hivasban");
                    osztalyLegorduloMegjelenit();

                }
            }
    );
});
function osztalyLegorduloMegjelenit() {
    console.log(osztalyokTanulok[0]);
    $("article #osztaly2").append("<option >-</option>");
    for (const x in osztalyokTanulok[0]) {
        $("article #osztaly2").append("<option >" + x + "</option>");
    }

}
function megjelenit() {/*adatok megjelenitese*/
    let szoveg;
    $("section").empty();
        osztalyokTanulok[0][menuSzoveg].forEach((a)=>{
            console.log(a);
    });
    console.log(menuSzoveg);
    $("section").append("<table></table>");
    szoveg = "<tr id='fejléc'><th>OSZTALY</th><th>TANULO</th><th>ALLAT1</th><th>ALLAT2</th><th>ALLAT3</th></tr>";
    for (var a in osztalyokTanulok[0][menuSzoveg]) {
        szoveg += "<tr id='" + a + "'>";
        szoveg += "<td id='" + a + "'>";
        szoveg += menuSzoveg;
        szoveg += "</td>";
        szoveg += "<td id='" + a + 1 + "'>";
        szoveg += osztalyokTanulok[0][menuSzoveg][a];
        szoveg += "</td>";
        szoveg += randomSzamok();
        console.log(randomSzamok());
        console.log(" ");
        szoveg += "</tr>";
    }
    $("section table").append(szoveg);
}

function kattint() {
    let id = document.getElementById("osztaly2");
    menuSzoveg = id.options[id.selectedIndex].text;
    megjelenit();
}
function randomSzamok() {
    let kiegeszit = "";
    let randomSzamok = [];
    while (randomSzamok.length < 3) {
        let kijeloltSzam = Math.floor(Math.random() * lenyek.length);
        if (randomSzamok.indexOf(kijeloltSzam) === -1)
            randomSzamok.push(kijeloltSzam);
    }
    for (let i = 0; i < 3; i++) {
        kiegeszit += "<td id='" + randomSzamok[i] + "'>";
        kiegeszit += lenyek[randomSzamok[i]];
        kiegeszit += "</td>";
    }
    return kiegeszit;
}
