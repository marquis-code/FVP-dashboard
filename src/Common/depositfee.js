export default function (amount) {
  if (amount >= 133333) {
    return +amount + 2000;
  } else if (amount > 2500 && amount < 133333) {
    return +amount + (Math.abs(amount) * 0.015 + 100);
  } else if (amount < 2500) {
    return +amount + 37.5;
  }
  // return +amount + Math.abs(amount) * 0.01;
}
