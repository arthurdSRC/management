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

  static async getAllService(req, res) {
    try {
      const response = await Service.find();
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ message: "Falha ao buscar serviços" })
    }
  }

}

export default ServiceController;