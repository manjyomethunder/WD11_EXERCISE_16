const mmConvertion = () => {
  let meterInput = document.getElementById("meterInput").value;
  let result = Number(meterInput) * 1000;
  document.getElementById("mmOutput").value = result;
};
const inConvertion = () => {
  let meterInput = document.getElementById("meterInput").value;
  let result = Number(meterInput) * 39.3701;
  document.getElementById("inOutput").value = result.toFixed(2);
};
const cmConvertion = () => {
  let meterInput = document.getElementById("meterInput").value;
  let result = Number(meterInput) * 100;
  document.getElementById("cmOutput").value = result;
};
const dmConvertion = () => {
  let meterInput = document.getElementById("meterInput").value;
  let result = Number(meterInput) * 10;
  document.getElementById("dmOutput").value = result;
};
const kmConvertion = () => {
  let meterInput = document.getElementById("meterInput").value;
  let result = Number(meterInput) * 0.001;
  document.getElementById("kmOutput").value = result;
};