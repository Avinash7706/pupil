import { useEffect, useRef, useState } from "react";

const EyeTracker = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [gazeData, setGazeData] = useState({ x: 0, y: 0, time: 0 });
  const [detectionWarning, setDetectionWarning] = useState(false);
  const [isWebGazerLoaded, setIsWebGazerLoaded] = useState(false);
  const [calibrationStatus, setCalibrationStatus] = useState("Not Started");
  const [warningMessage, setWarningMessage] = useState("");
  const [frameState, setFrameState] = useState("black"); // black, red, or green
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const noDetectionTimeout = useRef(null);
  

  useEffect(() => {
    console.log("Component mounted - Initializing WebGazer");
    const script = document.createElement("script");
    script.src = "https://webgazer.cs.brown.edu/webgazer.js";
    script.async = true;
    
    script.onload = () => {
      console.log("WebGazer script loaded successfully");
      setIsWebGazerLoaded(true);
      window.webgazer.setGazeListener((data, elapsedTime) => {
        if (data) {
          console.log("Gaze data received:", {
            x: data.x.toFixed(2),
            y: data.y.toFixed(2),
            time: elapsedTime.toFixed(2)
          });
          setGazeData({
            x: data.x.toFixed(2),
            y: data.y.toFixed(2),
            time: elapsedTime.toFixed(2),
          });
          setCalibrationStatus("Calibrated");
        }
      }).begin();
    };

    script.onerror = () => {
      console.error("Failed to load WebGazer.js script");
      alert("Failed to load WebGazer.js. Please check your internet connection.");
    };

    document.body.appendChild(script);

    return () => {
      console.log("Component unmounting - Cleaning up");
      if (window.webgazer) {
        window.webgazer.end();
      }
      if (noDetectionTimeout.current) {
        clearTimeout(noDetectionTimeout.current);
      }
      document.body.removeChild(script);
    };
  }, []);

  const setupVideo = async () => {
    console.log("Setting up video stream");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        } 
      });
      console.log("Camera access granted");
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera access error:", error);
      alert(
        "Could not access the camera. Please ensure you've granted camera permissions and your camera is working properly."
      );
    }
  };

  const startTracking = () => {
    console.log("Starting eye tracking");
    if (!isWebGazerLoaded) {
      console.warn("WebGazer not loaded yet");
      alert(
        "WebGazer script is still loading. Please wait a moment and try again."
      );
      return;
    }

    setDetectionWarning(false);
    setWarningMessage("");
    setCalibrationStatus("Calibrating...");
    setFrameState("black"); // Start with black frame
    console.log("Calibration started");

    window.webgazer
      .setRegression("ridge")
      .setTracker("clmtrackr")
      .setGazeListener((data, elapsedTime) => {
        if (data) {
          console.log("Raw gaze data:", data);
          
          const gazeX = parseFloat(data.x);
          const gazeY = parseFloat(data.y);
          
          setGazeData({
            x: gazeX.toFixed(2),
            y: gazeY.toFixed(2),
            time: elapsedTime.toFixed(2),
          });

          const container = containerRef.current;
          if (container) {
            const rect = container.getBoundingClientRect();
            const tolerance = 20;
            const isInsideFrame =
              gazeX >= (rect.left - tolerance) &&
              gazeX <= (rect.right + tolerance) &&
              gazeY >= (rect.top - tolerance) &&
              gazeY <= (rect.bottom + tolerance);

            if (!isInsideFrame) {
              setFrameState("red");
              setDetectionWarning(true);
              setWarningMessage("See on Screen");
            } else {
              setFrameState("green");
              setDetectionWarning(false);
              setWarningMessage("");
            }
          }
        } else {
          setFrameState("black");
          setDetectionWarning(true);
          setWarningMessage("Please wait , Processing...");
        }
      })
      .begin()
      .showPredictionPoints(true);

    if (videoRef.current && canvasRef.current) {
      window.webgazer.params.imgWidth = 320;
      window.webgazer.params.imgHeight = 240;
    }

    setupVideo();
    setIsTracking(true);
    console.log("Eye tracking started successfully");
  };

  const stopTracking = () => {
    console.log("Stopping eye tracking");
    if (window.webgazer) {
      window.webgazer.end();
    }
    if (noDetectionTimeout.current) {
      clearTimeout(noDetectionTimeout.current);
    }
    setIsTracking(false);
    setDetectionWarning(false);
    setWarningMessage("");
    setCalibrationStatus("Not Started");
    setFrameState("black");
    console.log("Eye tracking stopped");
  };

  const resetCalibration = () => {
    console.log("Resetting calibration");
    if (window.webgazer) {
      window.webgazer.clearData();
      setCalibrationStatus("Not Started");
      console.log("Calibration data cleared");
      alert("Calibration data has been cleared. Please recalibrate by looking at different points on the screen.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto relative z-20">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          WebGazer.js Eye Detection Demo
        </h1>

        {detectionWarning && (
          <div className={`p-4 mb-6 rounded animate-pulse fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl shadow-lg ${
            frameState === "red" 
              ? "bg-red-100 border-l-4 border-red-500 text-red-700"
              : frameState === "black"
              ? "bg-gray-100 border-l-4 border-gray-500 text-gray-700"
              : "bg-green-100 border-l-4 border-green-500 text-green-700"
          }`}>
            <div className="flex items-center">
              <svg
                className="w-8 h-8 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="font-bold text-xl">Warning: </p>
            </div>
            <p className="ml-11 text-xl mt-2">
              {warningMessage}
            </p>
          </div>
        )}

        <div
          ref={containerRef}
          className={`relative mx-auto w-[400px] h-[300px] mb-32 border-4 rounded-lg shadow-md overflow-hidden ${
            frameState === "red"
              ? "border-red-500"
              : frameState === "green"
              ? "border-green-500"
              : "border-gray-500"
          }`}
        >
          <video
            ref={videoRef}
            id="webgazerVideo"
            width="520"
            height="540"
            autoPlay
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <canvas
            ref={canvasRef}
            id="plot"
            width="320"
            height="240"
            className="absolute top-0 left-0 w-full h-full"
          />
          {frameState === "red" && (
            <div className="absolute inset-0 bg-red-500 bg-opacity-30 flex items-center justify-center z-40">
              <div className="text-white text-2xl font-bold bg-red-600 bg-opacity-70 p-3 rounded-lg shadow-lg">
                See on screen
              </div>
            </div>
          )}
          {frameState === "black" && (
            <div className="absolute inset-0 bg-gray-500 bg-opacity-30 flex items-center justify-center z-40">
              <div className="text-white text-2xl font-bold bg-gray-600 bg-opacity-70 p-3 rounded-lg shadow-lg">
                Processing...
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={startTracking}
            disabled={isTracking || !isWebGazerLoaded}
            className={`px-6 py-2 rounded-lg font-medium ${
              isTracking || !isWebGazerLoaded
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Start Eye Tracking
          </button>
          <button
            onClick={stopTracking}
            disabled={!isTracking}
            className={`px-6 py-2 rounded-lg font-medium ${
              !isTracking
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            Stop Eye Tracking
          </button>
          <button
            onClick={resetCalibration}
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium"
          >
            Reset Calibration
          </button>
        </div>

        {isTracking && (
          <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              Gaze Prediction
            </h2>
            <p className="text-gray-600">
              X: {gazeData.x}, Y: {gazeData.y}
            </p>
            <p className="text-gray-600">Time: {gazeData.time} ms</p>
            <p className="text-gray-600 mt-2">
              Calibration Status: {calibrationStatus}
            </p>
          </div>
        )}

        {!isTracking && (
          <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto text-center">
            <p className="text-blue-700">
              {!isWebGazerLoaded 
                ? "Loading WebGazer.js..."
                : "Click 'Start Eye Tracking' to begin gaze detection. Make sure to look at different points on the screen for better calibration."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EyeTracker;
