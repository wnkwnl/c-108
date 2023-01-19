function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/t3FnYl4yF/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_r=Math.floor(Math.random()* 255) + 1;
        random_g=Math.floor(Math.random()* 255) + 1;
        random_b=Math.floor(Math.random()* 255) + 1;
        document.getElementById("result_label").innerhtml='-I can hear-'+ results[0].label;
        document.getElementById("result_confidence").innerhtml='-I can hear-'+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById("alien1");
        img1=document.getElementById("alien3");
        if(results[0].label == "bell ringing"){
            img.src='aliens-01.gif';
            img1.src='aliens-03.png';
        } else if(results[0].label == "clapping"){
            img.src='aliens-03.gif';
            img1.src='aliens-01.png';
    }
}
}
