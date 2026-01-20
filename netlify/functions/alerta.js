exports.handler = async () => {
  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: "🚨 ALERTA: CLIENTE DETECTADO"
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};
