//Dung for long nhau
/*let sout;
sout = "<table border='1' width='400' height='400' cellspacing='0' cellpadding='3'>";

for ( let i=1; i<=10; i++) {
    sout = sout + "<tr>";
    for (let j=1; j<=10; j++) {
        sout = sout + "<td>" + i*j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);*/

//Dung while long nhau
let sout, i, j;
sout = "<table border='1' width='400' height='400' cellspacing='0' cellpadding='3'>";
i=j=1;
while (i<=10) {
    sout = sout + "<tr>";
    while (j<=10) {
        sout = sout +"<td>" + j*i + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j=1;
    i++;
}
sout = sout + "</table>";
document.write(sout);