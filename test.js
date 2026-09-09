const assert = require('assert');
const sum = require('./index');

console.log("Đang chạy kiểm thử (Test)...");

try {
  // Test case 1: 1 + 2 phải bằng 3
  assert.strictEqual(sum(1, 2), 3);
  
  // Test case 2: -1 + 1 phải bằng 0
  assert.strictEqual(sum(-1, 1), 0);

  console.log("✅ Tất cả các test đều PASS!");
  process.exit(0); // Báo cho CI biết là test thành công
} catch (error) {
  console.error("❌ Test FAILED:", error.message);
  process.exit(1); // Báo cho CI biết là test thất bại
}
