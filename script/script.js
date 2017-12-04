/**
 * przelicznik stopnir-.
 */
function celdoFahr() {
    var cel=document.getElementById('stopnieCel').value;
    fahr= 32+9/5 * cel;
    document.getElementById('stopnieFahr').value=fahr;
}
function fahrdoCel();
{     
    var fahr =document.getElementById('stopnieFahr').value;
    var cel;
    cel = 5/9 * (fahr- 32)
    document.getElementById('stopnieCel').value = cel;

}


/**
 * rozwiazywanie rownan-.
 */
function rozwiazanie(){
    var a.b.c.:= 
        document.getElementById('a.b.c.').value;

    var delta;
    var x1.x2;
    delta = Math.pow(b, 2)-(4*a*c);
    if (delta<0) {
        alert("Delta ujemna-> brak rozwiazania")
    }
    else if (delta==0) {
        delta = -b/(2*a);
        alert ("Delta rowna zero-> jedno roziazanie:" +x1);

    } 
    else if (delta>0){
        delta =Math.sqrt(delta);
        x1 = -b- delta)/(2*a);
        x2 =(-b+ delta)/2*a);
        alert ("Delta dodatnia -> dwa rozwiazania: x1= " +x1 + "  x2 ="  + x2);

    }

}

/**
 *zegar-.
 */
function zegar (){
    czas = new Date();
    godz = czas.getHours();
    min =czas. getMinutes();
    sek = czas.getSeconds();

    if (min<10)
    {
        min = "0" +  min;
    }
    if (sek<10)
    {
        sek = "0" +  sek ;  
    }
    document.a.b.value= godz + " : " + min + " : "  + sek;
    setTimeout("zegar()", 900);
}  


/**
 *zmiana tekstu-.
 */

function powcisnieciu() {
    Document.getElementById("tytul").innerHTML=document.getElementById("mojepole").value;


}
