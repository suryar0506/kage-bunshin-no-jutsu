Webcam.set({
width: 350,
height: 300,
img_format: 'png',
png_quality: 90
});
camera = document.getElementById("webcam_display_div");
Webcam.attach('#webcam_display_div');

function take_a_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_display_div").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xteJgfeWU/model.json',modelLoaded);

function modelLoaded(){
    console.log("The model is all set. Over.")
}



