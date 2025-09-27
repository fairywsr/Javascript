const QRInput = document.getElementById("qr-input");
const QRbutton = document.getElementById("qr-button");
const QRImage = document.getElementById("qr-image");

console.log(QRImage, QRbutton, QRInput);

QRbutton.addEventListener("click", () => {
  const inputValue = QRInput.value;

  if (!inputValue) {
    alert("Please enter a valid url image");
    return;
  } else {
    QRImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    QRImage.alt = `QR code for ${inputValue}`;
  }
});
