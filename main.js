function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QNmskF159/model.json",modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,getResults);
}

function modelLoaded(){
    console.log("Model has been activated! Yay!");
}

function getResults(error,results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence;
    }
}