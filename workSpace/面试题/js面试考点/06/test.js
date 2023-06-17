for (let i = 1; i <= 5; i++) {
  // (function(j) {
  //   setTimeout(function() {
  //     console.log(j);
  //   }, j * 1000)
  // })(i)

  // setTimeout(
  //   function (j) {
  //     console.log(j);
  //   },
  //   i * 1000,
  //   i
  // )

  // var => let
  setTimeout(function () {
    console.log(i);
  }, i * 1000)
}


