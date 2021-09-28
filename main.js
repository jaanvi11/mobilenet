Webcam.set({
    width:300,height:300,image_format:'png',png_quality:90,
    constraints:{facingMode:"environment"}
});
var webcam=document.getElementById("webcam");
Webcam.attach(webcam);
function take_snapshot()
{
Webcam.snap(function(snapshot)
{
    document.getElementById("snapshot").innerHTML='<img src="'+snapshot+'" id="snap_img">';
});

}
console.log(ml5.version);
var storage=ml5.imageClassifier('MobileNet',modelloaded);
function modelloaded()
{
    console.log("model initialized");
}
function identify_snapshot()
{
    var image= document.getElementById("snap_img");
    storage.classify(image,classify_results);

}
 function classify_results(error,results)
 {
if (error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("object_names").innerHTML=results[0].label
}
 }
