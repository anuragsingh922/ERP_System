
function displaytime(){
    // time = new Date();
    document.getElementById('timee').innerHTML = new Date();
}

setInterval(displaytime,1000);




var mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { stringify } = require("querystring");


mongoose.connect('mongodb://localhost:27017/anurag',
    {
        useNewUrlParser: true,
    }
);



var Practicum = mongoose.model('Practicum', contactSchema);





const {email} = req.body
Practicum.findOne({ email: emaill}, (err, user) => {
    if(user){
    newname = emaill;
    document.getElementById('namespan').innerHTML = newname;
    }
})

document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var video = document.getElementById("vid");
    var mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    but.addEventListener("click", () => {

      // Accessing the user camera and video.
      mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {

          // Changing the source of video to current stream.
          video.srcObject = stream;
          video.addEventListener("loadedmetadata", () => {
            video.play();
          });
        })
        .catch(alert);
    });
  });



