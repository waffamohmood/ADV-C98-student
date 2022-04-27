var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}

recognition.onresult=function run(event){
    console.log(event);
    var content=event.result[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML=content;
    if(content =="take my selfie"){
        console.log("Taking selfie ");
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data='taking your selfie in 5 seconds';
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").scr;
    link.href=image;
    link.click();
}