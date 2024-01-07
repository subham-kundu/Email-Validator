let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "kundusubham3",
  "email": "kundusubham3@gmail.com",
  "score": 0.64,
  "state": "deliverable",
  "domain": "gmail.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "",
  "format_valid": true
}

submitBtn.addEventListener("click",async(e)=>{
  e.preventDefault()
  console.log("clicked...")
  resultContainer.innerHTML = `<img width="30" src="img/load.png" class="change-my-color">`
  let key = "ema_live_aySGNPZbiAK0a5kpfJ31pCGGWNDrTKd6Yp2Wd8T2"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    if (result[key]!=="" && result[key]!==" ") {
      str = str + `<div>${key}: ${result[key]}</div>`
    }
  }

  console.log(str)
  resultContainer.innerHTML = str
})

