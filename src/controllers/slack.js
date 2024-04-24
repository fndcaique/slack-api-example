const slackService = require("../services/slack");
const path = require("path");
class SlackController {
  handle(req, res) {
    const { command, text } = req.body;
    switch (command) {
      case "/message":
        slackService.postTextMessage({
          channel: "teste-api-slack", // Canal de sua preferência
          text,
        })
          .then(() => res.status(200).send(`Mensagem "${text}" enviada com sucesso!`))
          .catch((err) => res.status(500).send(err.message))
        break;
      case "/file":
        slackService.postFile()
          .then(() => res.status(200).send(`Arquivo enviado com sucesso!`))
          .catch((err) => res.status(500).send(err.message))
        break;
      default:
        res.status(400).send('Comando inválido');
        break;
    }
  }
}

module.exports = new SlackController();