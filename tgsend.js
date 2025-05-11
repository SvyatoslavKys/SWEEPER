fetch("./telegram.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `👁 Новый визит в ${new Date().toLocaleString()}`
    })
  });