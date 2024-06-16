  console.log(1)

  setTimeout(() => {
    console.log(2);
  }, 3000);

  console.log(3);

  // 비동기 작업들은 자바스크립트 엔진이 아닌
  // WebApis에서 