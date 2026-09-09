function sum(a, b) {
  return a - b;
}

module.exports = sum;

// Nếu chạy file trực tiếp thì in ra kết quả
if (require.main === module) {
  console.log("App đang chạy. Kết quả 5 + 7 =", sum(5, 7));
}
