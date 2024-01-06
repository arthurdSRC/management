import { Service } from "../models/serviceModel.js";

class ServiceController {

  static async createService(req, res) {

    try {
      const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      }
      const response = await Service.create(data)
      res.status(201).json({ message: "Serviço criado com  sucesso" })
    } catch (error) {
      res.status(500).json({ message: "Falha ao criar Serviço" })
    }

  }



}

export default ServiceController;