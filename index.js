const vize = 60;
if (vize < 0 || vize > 100) {
  console.log('Vize notunda problem var');
}
const final = 80;
if (final < 0 || final > 100) {
  console.log('Vize notunda problem var');
}

const donemNotu = vize * 0.3 + final * 15;
let harfNotu;

console.log(donemNotu);


let yas = 11;
if (yas >= 18) {
  console.log('Reşitsiniz');
} else {
  console.log('Reşit değilsiniz');
}

// if (donemNotu >= 90) {
//   harfNotu = 'A';
// } else if (donemNotu >= 80) {
//   harfNotu = 'B';
// } else if (donemNotu >= 70) {
//   harfNotu = 'C';
// } else if (donemNotu >= 60) {
//   harfNotu = 'D';
// } else if (donemNotu >= 50) {
//   harfNotu = 'E';
// } else {
//   harfNotu = 'F';
// }


if (donemNotu >= 90 && donemNotu <= 100) {
  harfNotu = 'A';
} else if (donemNotu >= 80 && donemNotu < 90) {
  harfNotu = 'B';
} else if (donemNotu >= 70 && donemNotu < 80) {
  harfNotu = 'C';
} else if (donemNotu >= 60 && donemNotu < 70) {
  harfNotu = 'D';
} else if (donemNotu >= 50 && donemNotu < 60) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}

function harfNotuHesapla(vize, final) {
  if (vize < 0 || vize > 100) {
    console.log('Vize notunda problem var');
  }

  if (final < 0 || final > 100) {
    console.log('final notunda problem var');
  }

  const donemNotu = vize * 0.3 + final * 0.7;
  let harfNotu;

  if (donemNotu >= 90) {
    harfNotu = 'A';
  } else if (donemNotu >= 80) {
    harfNotu = 'B';
  } else if (donemNotu >= 70) {
    harfNotu = 'C';
  } else if (donemNotu >= 60) {
    harfNotu = 'D';
  } else if (donemNotu >= 50) {
    harfNotu = 'E';
  } else {
    harfNotu = 'F';
  }

  return harfNotu;
}

const sonNot = harfNotuHesapla(40, 70);
