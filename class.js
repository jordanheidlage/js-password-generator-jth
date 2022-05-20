document.querySelector("generate").addEventListener("click", writePassword);

var uppercase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
var lowercase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = [!, $,%,&,*]

var all = [uppercase, lowercase, number, specialChar]

var confirmLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSpecialchar;

function generatePassword() {
    var confirmLength = (prompt("How many characters would you like in your password between 8-128?"));
}
while (confirmLength < 8 === confirmLength > 128) {
    alert("Password length must be 8-128 characters, give it another shot");
    var confirmLength = ("How many characters would you like in your password between 8-128?");
}

function writePassword() {
    var password = generatePassword();
    var passText = document.querySelector("#password");

    passText.value = password;
}