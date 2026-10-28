for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//==========================

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//===============-----====--===------

let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i; // sum = sum + i;
}
console.log("Yig'indi:", sum);
//=-===------=---=--=------========----------
let som = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    // yoki i % 2 == 1
    som += i;
  }
}
console.log("Toq sonlar yig'indisi:", som);
//==-------=--=--=--=======-----==--=-=--==-----==-==
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
    count++; // Har bir topilgan sonda hisoblagichni 1 taga oshiramiz
  }
}
console.log("3 ga bo'linadigan sonlar soni:", count);
//----------==-----=--==-=----===----=-==-=====--====--==
let number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}
//------===---======-------------=--=--=--=----===---
let raqam = -15;

if (raqam > 0) {
  for (let i = 1; i <= raqam; i++) {
    console.log(i);
  }
} else if (raqam < 0) {
  // Manfiy sonning modulini topish uchun unga minus (*) ishorasini beramiz
  let positiveNumber = -raqam;
  for (let i = 1; i <= positiveNumber; i++) {
    console.log(i);
  }
} else {
  console.log("Son nolga teng");
}
//---===-------=----=--=--=-==-----===---===--==

let secretNumber = 8;

for (let i = 1; i <= 10; i++) {
  if (i === secretNumber) {
    console.log("Son topildi");
    break;
  } else {
    console.log("Bu son emas");
  }
}
//-----==----=--==---===-------------=----=-==-===--
