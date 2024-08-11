// Set a variable for the video tag
const cv = require("@techstark/opencv-js")
const video = document.getElementById("video");
// Function to stream video from the web cam
async function streamVideo() {
    // Set video parameters
    const constraints = {
        // no audio is required
        audio: false,
        // Set the video size
        video: {
            width: 1280, height: 720
        }
    };
    
    try {
        // Get the video stream
        
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        window.stream = stream;
        video.srcObject = stream; 
         
    } catch (e) {
        alert("An error occurred while accessing the web cam.");
    }   
}

// Function to draw a video frame onto the canvas
function drawCanvas() {
    // Get context and draw frame from video element
    var canvas = document.getElementById("streamCanvas")
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0); 
}

function edgeDetection() {
    
    // Start video stream
    streamVideo();
    
    // Set interval to repeat function every 42 milliseconds
    setInterval(() => {
        // Draw frame to the intermediate canvas
        drawCanvas();
        
        // Get the current frame from the intermediate canvas
        var src = cv.imread("streamCanvas");
        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
        cv.Canny(src, src, 50, 100, 3, false);
        cv.imshow("edgeDetectionCanvas", src);
        src.delete();
    }, 42);
}

// main function to clean up
function main() {
    // Hide the video tag
    video.style.display = "none";
    // Run edge detection
    function openCvReady() {
        cv['onRuntimeInitialized']=()=>{
            edgeDetection();
        };
      }
    openCvReady()
}
// Load main
main();