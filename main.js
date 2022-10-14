function dance() {

    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uQ2KmhkKx/model.json", modelloaded);

}

function modelloaded() {

    console.log("model loaded");
    classifier.classify(got_results);

}

function got_results(error, results) {

    if (error) {

        console.error(error);   
    }
    else {
        console.log(results);
        document.getElementById("label_hear").innerHTML = "I can Hear: " + results[0].label;
        document.getElementById("label_accuracy").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";



        

    }

}
