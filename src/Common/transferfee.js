export default function (amount) {
  if (amount <= 5000) {
    return +amount + 10;
  } else if (amount >= 5001 && amount <= 50000) {
    return +amount + 25;
  } else if (amount > 50000) {
    return +amount + 50;
  }
}
