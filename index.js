//không cho nhập chữ
function validate(evt) {
  var theEvent = evt || window.event;
  // Handle paste
  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /^-?\d*[.,]?\d*$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
//lấy dũ liệu
var arr = new Array();
let listen = document.querySelector("#btn-lesson");
let input = document.querySelector("#txt-input");
//bắt sự kiện click thì xóa rỗng ô input
listen.addEventListener("click", () => {
  input.value = " ";
  input.focus();
});
// bắt sự kiện nhấn enter của ô input
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    listen.click();
  }
});
// hàm xóa rỗng input
function clearThis(target) {
  if (target.value != "") {
    target.value = " ";
  }
}

// hàm thêm vào mảng
function addArr() {
  let a = parseFloat(document.querySelector("#txt-input").value);
  if (isNaN(a)) {
    arr.push(0);
  } else {
    arr.push(a);
  }

  document.querySelector("#lab-result").innerHTML = arr;
}

function ex1() {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  document.getElementById("lab-result-1").innerHTML = "Tổng Số Dương: " + total;
}

function ex2() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  if (count > 0) {
    document.getElementById("lab-result-2").innerHTML = "Số Dương: " + count;
  }
  else {
    document.getElementById("lab-result-2").innerHTML = "Không có số dương nào";
  }
}

function ex3() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  document.getElementById("lab-result-3").innerHTML = "Số Nhỏ Nhất: " + min;
}

function ex4() {
  var min = arr[0];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      min = arr[i];
      count++;
      break;
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < min) {
      min = arr[i];
    }
  }
  if (count > 0) {
    document.getElementById("lab-result-4").innerHTML = "Số Dương Nhỏ Nhất: " + min;
  }
  else{
    document.getElementById("lab-result-4").innerHTML = "Không có số dương nào";
  }
}

function ex5() {
  var last = 0;
  var dem = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      dem++;
      last = arr[i];
    }
  }
  if (dem > 0) {
    document.getElementById("lab-result-5").innerHTML = "Số Chẵn Cuối Cùng: " + last;
  }
  else {
    document.getElementById("lab-result-5").innerHTML = "Không có số chẵn nào";
  }
}

function ex6() {
  var number_1 = document.getElementById("txt-number-1").value;
  var number_2 = document.getElementById("txt-number-2").value;
  var temp = 0;
  var arr6 = [];
  temp = number_1;
  number_1 = number_2;
  number_2 = temp;
  arr6.push(number_1, number_2);

  document.getElementById("lab-result-6").innerHTML = "Sau Khi Đổi: " + arr6;
}

function ex7() {
  var index = "";
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var temp = arr[i];
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  document.getElementById("lab-result-7").innerHTML = "Kết Quả: " + arr;
}

function ex8() {
  var count = 0;
  var result = "";
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] >= 2) {
      count = 0;
      for (var j = 2; j <= arr[i] / 2; j++) {
        if (arr[i] % j === 0) {
          count++;
        }
      }
      if (count < 1) {
        result += " " + arr[i];
        //count ++
        document.getElementById("lab-result-8").innerHTML = result;
        break;
      }
      else {
        document.getElementById("lab-result-8").innerHTML = "Không Có số nguyên tố nào";
      }
    }
  }
}
// đếm số nguyên
var arr9 = new Array();
let listen9 = document.querySelector("#btn-lesson-9");
let input9 = document.querySelector("#txt-lesson-9");
//bắt sự kiện click thì xóa rỗng ô input
listen9.addEventListener("click", () => {
  input9.value = " ";
  input9.focus();
});
// bắt sự kiện nhấn enter của ô input
input9.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    listen9.click();
  }
});
// hàm xóa rỗng input
function clearThis(target) {
  if (target.value != "") {
    target.value = " ";
  }
}

// hàm thêm vào mảng
function addArr9() {
  let a = parseFloat(document.querySelector("#txt-lesson-9").value);
  if (isNaN(a)) {
    arr9.push(0);
  } else {
    arr9.push(a);
  }

  document.querySelector("#lab-result-9").innerHTML = arr9;
}
function ex9() {
  var count = 0;
  for (var i = 0; i < arr9.length; i++) {
    if (Number.isInteger(arr9[i])) {
      count++;
    }
  }
  document.getElementById("lab-result-9-1").innerHTML = "Đếm số Nguyên: " + count;
}

function ex10() {
  var countP = 0;
  var countM = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      countP++;
    }
    else if (arr[i] < 0) {
      countM++;
    }
  }
  if (countP > countM) {
    document.getElementById("lab-result-10").innerHTML = "Số Dương > Số Âm";
  }
  else if (countP < countM) {
    document.getElementById("lab-result-10").innerHTML = "Số Dương < Số Âm";
  }
  else {
    document.getElementById("lab-result-10").innerHTML = "Số Dương = Số Âm";
  }
}
