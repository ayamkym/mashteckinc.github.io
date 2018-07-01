function convertCurrency () {
  let output;
  let amt;
  let userinput = document.getElementById('fromCurrency').value;
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  let url = 'https://free.currencyconverterapi.com/api/v5/convert?q=' + from + '_' + to + '&compact=y';
  // var url = 'https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP&compact=y'
  fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    // console.log(data);
    output = data[from + '_' + to].val * userinput;
    console.log(output);
    document.getElementById('amt').innerText = output;
  });
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw/sw.js', { scope: '/sw/' })
    .then(function (reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}
