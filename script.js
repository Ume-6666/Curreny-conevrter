(async function () {
    let response = await fetch("./code.json");
    let data = await response.json();
  
    data.forEach((element) => {
      let a = document.createElement("option");
      a.innerText = element.Currency;
      a.value = element.Currency_Code + element.Country_Code;
      if (element.Currency_Code == "inr") {
        a.selected = true;
        document.getElementById(
          "flag"
        ).src = 'https://flagsapi.com/IN/flat/64.png';
      }
      document.getElementById("country").appendChild(a);
    });
  })();
  
  function getFlag() {
    let abc = document.getElementById("country").value;
    abc = abc.slice(3);
    console.log(abc);
    document.getElementById(
      "flag"
    ).src = 'https://flagsapi.com/${abc}/flat/64.png';
  }
  
  (async function () {
    let response = await fetch("./code.json");
    let data = await response.json();
  
    data.forEach((element) => {
      let a = document.createElement("option");
      a.innerText = element.Currency;
      a.value = element.Currency_Code + element.Country_Code;
      if (element.Currency_Code == "inr") {
        a.selected = true;
        document.getElementById(
          "flag1"
        ).src = 'https://flagsapi.com/IN/flat/64.png';
      }
      document.getElementById("country1").appendChild(a);
    });
  })();
  
  function getFlag1() {
    let abc = document.getElementById("country1").value;
    abc = abc.slice(3);
    console.log(abc);
    document.getElementById(
      "flag1"
    ).src = 'https://flagsapi.com/${abc}/flat/64.png';
  }
  
  async function Convert() {
    let Apikey = "5a806955abbc5c11cb0bc523";
    let formCurrency = document.getElementById("country").value.slice(0, 3);
    let ToCurrency = document
      .getElementById("country1")
      .value.slice(0, 3)
      .toUpperCase();
    const amount = Number(document.getElementById("enteramount").value);
    //   let amountVal = amount.value;
    //   if (amountVal == "" || amountVal == "") {
    //     amountVal = amount.value;
    //     amountVal = amount.value;
    //   }
    let url = ` https://v6.exchangerate-api.com/v6/${Apikey}/latest/${formCurrency}`;
    let response = await fetch(url);
    let data = await response.json();
    let rates = data["conversion_rates"][ToCurrency];
    formCurrency = formCurrency.toUpperCase();
  
  
    document.getElementById("display").innerText=` 
    ${amount} ${formCurrency} = ${rates * amount} ${ToCurrency}
    `;
  
  
  }
  
  document.getElementById("exchange").addEventListener("click", Convert);