import { expect, test } from "vitest";

const COINS = <const>[64, 16, 4, 1];

function coinChange(rest: number, idx: number): number {
  console.log(` 现在还剩下 ${rest}，当前的硬币面值是 ${COINS[idx]}`);

  if (rest > COINS[idx]) {
    rest = rest - COINS[idx];
    return 1 + coinChange(rest, idx);
    // FIXME: 如果当前剩余的货币 正好等于币值 则直接返回找1个硬币 退出判断
  } else if (rest > 0 && rest !== COINS[idx]) {
    // FIXME: idx应该递增，而不是一直写死
    // return coinChange(rest, +idx);
    idx = idx + 1;
    console.log("now idx", idx);
    return coinChange(rest, idx);
  }

  return 1;
}

// const coinChangeInput
// function main() {
//   // let n = parseInt(input.value);
//   let ans = coinChange(1024 - n, 0);
//   alert(ans);
// }

test("测试返回值", () => {
  const n = 200;
  expect(coinChange(1024 - n, 0)).toBe(17);
});
