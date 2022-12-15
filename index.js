$( document ).ready(function() {
;

console.log("I'm here, I'm here!!")

let audioSources = [
"recite/home.mp3",
"recite/bus.mp3",
"recite/grandcentral.mp3",
"recite/pleasant.mp3",
"recite/subway.mp3",
"recite/metronorth.mp3"
]

console.log("all audio sources: ", audioSources)


function randomAudioSrc() {
    randomNumber = Math.floor(Math.random()*audioSources.length)
    console.log("a random number between 0 and the number of sources i have: ", randomNumber)

    randomAudioSrc = audioSources[randomNumber]
    console.log("a randome source was chosen! ", randomAudioSrc)

    $("#sound1").attr("src", randomAudioSrc);
}

//calling the function on pageload
  randomAudioSrc();

//
//   setInterval(function() {
//   var d = new Date(),
//      hours = d.getHours(),
//      min = d.getMinutes(),
//      sec = d.getSeconds();
//   if (hours === 07 && min === 40 && sec === 01 && clicked == true) {
//     console.log("its showtime")
//      var audio = document.getElementsByTagName('audio')[0]
//      //add the time in seconds
//      audio.currentTime = 0;
//      audio.play();
//      audio.loop = true;
//      audio.autoplay = true;
//      audio.style.display = 'hidden'
//   }
// }, 1000)

  document.getElementById('div1').addEventListener('click', () => {
          // document.querySelector('audio').play();
          var audio = document.getElementsByTagName('audio')[0]
          //add the time in seconds
          audio.currentTime = 0;
          audio.play();
          audio.loop = true;
          audio.autoplay = true;
          audio.style.display = 'hidden'
          $("p").html(randomAudioSrc)
      })

 });


 //   setInterval(function() {
 //   var d = new Date(),
 //      hours = d.getHours(),
 //      min = d.getMinutes(),
 //      sec = d.getSeconds();
 //   if (hours === 07 && min === 40 && sec === 01 && clicked == true) {
 //     console.log("its showtime")
 //      var audio = document.getElementsByTagName('audio')[0]
 //      //add the time in seconds
 //      audio.currentTime = 0;
 //      audio.play();
 //      audio.loop = true;
 //      audio.autoplay = true;
 //      audio.style.display = 'hidden'
 //   }
 // }, 1000)
 //
 // let clicked = false;
 //
 //   document.getElementById('div4').addEventListener('click', () => {
 //           // document.querySelector('audio').play();
 //           clicked = true;
 //       })
 //
 //  });
