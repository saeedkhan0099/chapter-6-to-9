//Q1Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
 var a = 10;

 var result = "";
 result += "The initial value of a is: " + a + "<br>";
 result += "The value after ++a is: " + (++a) + "<br>";
 result += "The value after --a is: " + (--a) + "<br>";
 document.getElementById("result").innerHTML = result;

//Q2  2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result)

//Q3Write a program that takes input a name from user &
// greet the user.

function greetUser() {
        var userName = document.getElementById("nameInput").value;
        var greeting = "Hello, " + userName + "! Welcome!";
        document.getElementById("greetingMessage").textContent = greeting;
    }

//Q5Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Function to display the multiplication table
function displayTable() {
        // Get the user's input value. If empty, default to 5.
        var number = document.getElementById("numberInput").value || 5;

        // Initialize an empty string to hold the table
        var table = "Multiplication Table of " + number + "";

        // Generate the multiplication table for the number
        for (var i = 1; i <= 10; i++) {
            table += "" + number + " x " + i + " = " + (number * i) + "";
        }
        table += "";

        // Display the generated table in the browser
        console.log("tableDisplay".innerHTML = table);
    }

    //Q6 Take (a) (b) (c) (d)

 // a) Take three subjects name from the user and store them in 3 different variables
 var subject1 = prompt("Enter the name of the first subject:");
 var subject2 = prompt("Enter the name of the second subject:");
 var subject3 = prompt("Enter the name of the third subject:");

 // b) Total marks for each subject is 100
 var totalMarksPerSubject = 100;

 // c) Take obtained marks for the first subject from user
 var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

 // d) Take obtained marks for the remaining 2 subjects
 var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
 var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

 // Calculate total obtained marks and total marks
 var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
 var totalMarks = totalMarksPerSubject * 3;

 // Calculate the percentage
 var percentage = (totalObtainedMarks / totalMarks) * 100;

 // e) Show the result in browser using a table
 var resultTable = "<table border='1' cellpadding='10' cellspacing='0'>";
 resultTable += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
 resultTable += "<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>";
 resultTable += "<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>";
 resultTable += "<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>";
 resultTable += "<tr><td><strong>Total</strong></td><td>" + totalMarks + "</td><td>" + totalObtainedMarks + "</td></tr>";
 resultTable += "<tr><td colspan='3'><strong>Percentage: </strong>" + percentage.toFixed(2) + "%</td></tr>";
 resultTable += "</table>";

 // Display the table in the browser
 document.getElementById("resultTable").innerHTML = resultTable;

 //Q7

