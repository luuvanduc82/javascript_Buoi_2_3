function bai1() {
    let num1 = +document.getElementById("Num1").value;
    let num2 = +document.getElementById("Num2").value;
    let result1 = document.getElementById("result1");
    result1.innerHTML = num1 * num2;
}

//bài 2
function bai2() {
    let num1_2 = +document.getElementById("Num1_2").value;
    let num2_2 = +document.getElementById("Num2_2").value;
    let num3_2 = +document.getElementById("Num3_2").value;
    let num4_2 = +document.getElementById("Num4_2").value;
    let num5_2 = +document.getElementById("Num5_2").value;
    let result2 = document.getElementById("result2");
    result2.innerHTML = (num1_2 + num2_2 + num3_2 + num4_2 + num5_2) / 5;
}

//bài 3
function bai3() {
    let num1_3 = +document.getElementById("Num1_3").value;
    let result3 = document.getElementById("result3");
    let total = new Intl.NumberFormat("vn-VN").format(23500 * num1_3)
    result3.innerHTML = total;
}

//bài 4
function bai4() {
    let num1_4 = +document.getElementById("Num1_4").value;
    let num2_4 = +document.getElementById("Num2_4").value;
    let result4 = document.getElementById("result4");
    let cv = (num1_4 + num2_4) * 2;
    let dt = num1_4 * num2_4;
    result4.innerHTML = `Diện tích: ${dt}, Chu vi: ${cv}`;
}

//bài 5
function bai5() {
    let num1_5 = +document.getElementById("Num1_5").value;
    let result5 = document.getElementById("result5");
    let total5 = 0;
    total5 += num1_5 % 10;
    num1_5 = Math.floor(num1_5 / 10);
    total5 += num1_5;
    result5.innerHTML = total5;
}