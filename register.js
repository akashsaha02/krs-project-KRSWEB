function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

var submit = document.getElementById("RegisterButton")
submit.onsubmit = function () {
    validateform();
}

function validateform() {
    var form = document.getElementById("myform")
    var name = form.name.value;
    var number = form.number.value;
    var email = form.email.value;
    var gender = form.gender.value;
    var qualification = form.qualification.value;
    var courses = form.courses.value;
    var checkboxes = document.getElementById("condition")
    var country = form.country.value
    var comment = form.comment.value;

    var nameErr = true;
    var emailErr = true;
    var numberErr = true;
    var qualificationErr = true;
    var genderErr = true;
    var coursesErr = true;
    var commentErr = true;
    var conditionErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }


    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        if (!email.includes("@")) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }



    if (number == "") {
        printError("numberErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(number) === false) {
            printError("numberErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("numberErr", "");
            numberErr = false;
        }
    }

    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }




    if (courses == "") {
        printError("coursesErr", "Please select your course");
    } else {
        printError("coursesErr", "");
        coursesErr = false;
    }




    if (qualification == "") {
        printError("qualificationErr", "Please select your qualification");
    } else {
        printError("qualificationErr", "");
        qualificationErr = false;
    }



    if (comment == "") {
        printError("commentErr", "Please fill this box");
    } else {
        printError("commentErr", "");
        commentErr = false;
    }



    if (checkboxes.checked == true) {

        printError("conditionErr", "");
        conditionErr = false;
    } else {
        printError("conditionErr", "Please select this box to submit this form")
    }




    if ((nameErr || emailErr || numberErr || coursesErr || genderErr || qualificationErr || commentErr || conditionErr) == true) {

        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview =
            "You've entered the following details: \n" +
            "Name: " +
            name +
            "\n" +
            "Email Address: " +
            email +
            "\n" +
            "Mobile Number: " +
            number +
            "\n" +
            "Qualification: " +
            qualification +
            "\n" +
            "Gender: " +
            gender +
            "\n" +
            "Courses: " + courses + "\n";
        console.log(dataPreview)
        alert(dataPreview);
    }
}
