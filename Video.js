const video =document.querySelector('video')
video.addEventListener('canplay',function(){
    console.log("canplay")
})

video.addEventListener("play", function(){
    console.log("play")
})

//html
{/* <video width="500px" controls loop >
<source src="./vide01.mp4" type="video/mp4">
</video> */}
