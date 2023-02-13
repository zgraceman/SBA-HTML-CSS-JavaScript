class Car {
    constructor(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
 }

     drive() {
         console.log("Vroom Vroom")
     }

    break() {
        console.log(`car breaking is a ${this.make}`);
     }
}

 var c = new Car("Ford", "Focus", 2017);
 var c2 = new Car("BMW", "X3", 2018)
 
 var myArray = [44, c2, 33, "hello", 444, c];
 for (let i in myArray) {
    console.log(myArray[i]);
 }

 let object = "";
 for (let i in c) {
    object += c[i] + " ";
    };
 document.getElementById("printObject").innerHTML = object;





function formOptionInput() {

    var obj = document.getElementById("selectForm01");

    if (obj.options[obj.selectedIndex].text == "Runny Nose") {
        document.getElementById("illness").innerHTML = "Possible Illness: <b>Common Cold</b>";
        document.getElementById("urgency").innerHTML = "Urgency: <b>Mild</b>";
        document.getElementById("note").innerHTML =
        "It is likely you have the Common Cold." +
        " Be sure to drink plenty of fluids and carry around tissues.";
        document.getElementById("noteTextBox").className = "list-group-item list-group-item-primary";
    } else if (obj.options[obj.selectedIndex].text == "Fever") {
        document.getElementById("illness").innerHTML = "Possible Illness: <b>Influenza</b> ";
        document.getElementById("urgency").innerHTML = "Urgency: <b>Moderate</b>";
        document.getElementById("note").innerHTML =
        "It is possible that you have Infuenza (the Flu)." +
        " If your fever exceeds 103F, seek medical attention immediately!" +
        " Otherwise, drink plenty of water and get plenty of rest.";
        document.getElementById("noteTextBox").className = "list-group-item list-group-item-warning";
    } else if (obj.options[obj.selectedIndex].text == "Dizziness") {
        document.getElementById("illness").innerHTML = "Possible Illness: <b>Concussion</b>";
        document.getElementById("urgency").innerHTML = "Urgency: <b>Extreme</b>";
        document.getElementById("note").innerHTML =
        "It is possible that you may have a concussion! Please see a doctor immedietly or call your local emergency number!";
        document.getElementById("noteTextBox").className = "list-group-item list-group-item-danger";
    } 

}
