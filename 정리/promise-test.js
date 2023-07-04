async function main() {
  function printfunc() {
    console.log("prinffunc가 실행되었습니다.");
  }

  const obj = new Object();
  const prom = new Promise(printfunc);
}
main();
