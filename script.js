document.querySelector("button").addEventListener("click", function eqSub() {
  var x1;
  var x2;
  var two = "2";

  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var d = b ** 2 - 4 * a * c; //discriminant
  var ssq = "x" + "2".sup();

  x1 = (-b + d ** (1 / 2)) / (2 * a);

  x2 = (-b - d ** (1 / 2)) / (2 * a);

  if (a == "" || b == "" || c == "") {
    document.getElementById("eq").textContent =
      "Please fill in the blank value(s)!";
    document.getElementById("eq").style.color = "rgba(219, 0, 0, 0.78)";
  } else {
    document.getElementById("eq").textContent =
      "Your equation is " + a + "x^2" + " + " + b + "x +" + c;
    document.getElementById("eq").style.color = "#cccccc";

    if (d < 0) {
      document.getElementById("sol").textContent =
        "This equation has no real roots!";
      document.getElementById("sol").style.color = "rgba(219, 0, 0, 0.78)";
    } else {
      document.getElementById("sol").textContent =
        "The solutions to your equation for x are " + x1 + " and " + x2;
      document.getElementById("sol").style.color = "#cccccc";
      if (d == 0) {
        document.getElementById("sol").textContent +=
          " and since it's Discriminant is equal to 0, it's two roots are the same.";
      }
    }
  }
});
