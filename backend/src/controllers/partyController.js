import { Party } from "../models/partyModel.js";

class PartyController {

  static async getByParty(req, res) {
    try {
      const { id } = req.params
      const response = await Party.findById(id);
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ message: "Falha ao buscar por festa" })
    }
  }

  static async getAllParty(req, res) {
    try {
      const response = await Party.find();
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ message: "Falha ao buscar", error })
    }
  }

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

  static async deleteParty(req, res) {
    try {
      const { id } = req.params;
      await Party.findByIdAndDelete(id);
      res.status(200).json({ message: "Festa deletada com sucesso" })

    } catch (error) {
      res.status(500).json({ message: "falha ao deletar festa", error })
    }
  }
}


export default PartyController