const slackService = require("../services/slack");

class SlackController {
  hello(req, res) {



    console.log(req.body);

    console.log({headers: req.headers});
    slackService.postTextMessage({
      channel: "teste-api-slack", // Canal de sua preferência
      text: "Olá, mundo!\n"+req.body.text,
    });

    res.status(200).send(`Mensagem "${req.body.text}" enviada com sucesso!`);
  }
}

module.exports = new SlackController();