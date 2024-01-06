import { Party } from "../models/partyModel.js";

class PartyController {

  static async create(req, res) {

    const checkPartyBudget = (budget, services) => {
      const price = services.reduce((sum, service) => sum + service.price, 0);

      console.log(price, budget)

      if (price > budget) {
        return false
      }
      return true;
    }

    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        budget: req.body.budget,
        service: req.body.service,
      }

      if (party.service && !checkPartyBudget(party.budget, party.service)) {
        res.status(406).json({ message: "Orçamento insuficiente" });
        return
      }

      const response = await Party.create(party);
      res.status(203).json({ message: "Festa criada com sucesso" })


    } catch (error) {
      res.status(500).json({ message: "Falha ao criar festa", error })
    }

  }

}


export default PartyController