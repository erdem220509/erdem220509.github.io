let startTime, endTime;
let imageSize = '';
let image = new Image();
let bitspeed = document.getElementById("bits");
let kbspeed = document.getElementById("kbs");
let mbspeed = document.getElementById("mbs");
let info = document.getElementById("info");
let btn = document.getElementById("test-button");

let totalBitSpeed = 0;
let totalKbSpeed = 0;
let totalMbSpeed = 0;
let numTests = 5;
let testComplated = 0;

let imageApi = "https://source.unsplash.com/random?topic=nature";

image.onload = async function() {
  endTime = new Date().getTime();

  await fetch(imageApi).then((response) => {
    imageSize = response.headers.get("content-length");
    calculateSpeed();
  });
};

function calculateSpeed() {
  let timeDuration = (endTime - startTime) / 1000;

  let loadedBits = imageSize * 8;
  let speedInBts = loadedBits / timeDuration;
  let speedInKbs = speedInBts / 1024;
  let speedInMbs = speedInKbs / 1024;

  totalBitSpeed += speedInBts;
  totalKbSpeed += speedInKbs;
  totalMbSpeed += speedInMbs;

  testComplated++;

  if(testComplated == numTests) {
    let averageSpeedInBts = (totalBitSpeed / numTests).toFixed(2);
    let averageSpeedInKbs = (totalKbSpeed / numTests).toFixed(2);
    let averageSpeedInMbs = (totalMbSpeed / numTests).toFixed(2);

    bitspeed.innerHTML += `${averageSpeedInBts}`;
    kbspeed.innerHTML += `${averageSpeedInKbs}`;
    mbspeed.innerHTML += `${averageSpeedInMbs}`;
    info.innerHTML = "Test Completed! ";

  } else {
    startTime = new Date().getTime();
    image.src = imageApi;
  };

};

const init = async () => {
  info.innerHTML = "Testing...";
  startTime = new Date().getTime();
  image.src = imageApi;
}

btn.addEventListener("click", () =>{
  for(let i = 0; i < numTests; i++) {
    init();
  }
})