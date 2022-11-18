var test = +prompt("To'plagan balingizni kiriting");

if (test >= 80 && test <= 100) {
  alert(`Siz super kontrakga qabul qilindingiz`);
} else {
  alert(`Afsus super kontrakda  ham o'qiy olmaysiz`);
}

var money = +prompt("Super Kontrakt narxi 3000$. Sizda qancha pul bor?");
if (money >= 3000) {
  alert(`Pulingiz yetarli `);
} else {
  alert(
    `Afsuski pulingiz yetarli emas. Sizga yanam ${3000 - money} kerak bo'ladi`
  );
}