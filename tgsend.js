fetch("/telegram.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `👁 Новый визит в ${new Date().toLocaleString()}`
    })
  })
  .then(response => response.json())
  .then(data => console.log("Успешно отправлено:", data))
  .catch(error => console.error("Ошибка:", error));