
const t1 = "7813";
const t2 = "4310";
const t3 = "42:";
const t4 = "AAHX";
const t5 = "qrydc2m0";
const t6 = "alwdEt--";
const t7 = "r-p14RV99Xcn4pE";

const token = t1 + t2 + t3 + t4 + t5 + t6 + t7;

const c1 = "44";
const c2 = "368";
const c3 = "4206";

const chat_id = c1 + c2 + c3;

const text = "Посетитель открыл сайт: " + window.location.href;

fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: chat_id,
    text: text
  })
})
.then(response => response.json())
.then(data => console.log("✅ Message sent:", data))
.catch(error => console.error("❌ Error sending message:", error));

