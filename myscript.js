function myFunction() {
    var first = document.getElementById("Natchathiram").value;
    var second = document.getElementById("Thithi").value;
    var third = document.getElementById("kizhamai").value;
    var fourth = document.getElementById("lagnam").value;

    var result = (first+second+third+fourth) % 9;

    document.getElementById("result").innerHTML = result;
  }