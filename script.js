function calculateModulus() {
    let a = parseInt(document.getElementById("numA").value);
    let b = parseInt(document.getElementById("numB").value);
    let resultText = "";

    if (isNaN(a) || isNaN(b)) {
        resultText = "Please enter valid numbers!";
    } else {
        let modulus = a % b;
        resultText = `The modulus of ${a} % ${b} is: ${modulus}`;
        
        if (a < b) {
            resultText += "<br> Since A is smaller than B, modulus is A itself.";
        }
    }

    document.getElementById("result").innerHTML = resultText;
}
