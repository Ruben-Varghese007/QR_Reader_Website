// JAVASCRIPT FILE
  
function executeOnDomReady(callback) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(callback, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

executeOnDomReady(function () {

    // Callback function when QR code is detected
    function handleScanSuccess(decodedText, decodedResult) {
        alert("Your QR code is: " + decodedText);
    }

    let qrCodeScanner = new Html5QrcodeScanner(
        "qr-reader-area",
        { fps: 10, qrbox: 250 }
    );
    qrCodeScanner.render(handleScanSuccess);
});
