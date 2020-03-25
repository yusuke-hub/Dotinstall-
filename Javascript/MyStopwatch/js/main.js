"use strict";

{
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  let startTime;
  let timeoutId;

  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener("click", () => {
    startTime = Date.now();
    countUp();
  });
  stop.addEventListener("click", () => {
    clearTimeout(timeoutId);
  });
  reset.addEventListener("click", () => {
    timer.textContent = "00:00:000";
  });
}
// 再代入するのでlet

// padStart(文字列の長さ, 余分な桁に当てる文字列)

// setTimeout:指定時間後に関数を実行する機能。この場合だと10ミリ秒後に処理を実行する
