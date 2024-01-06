import { Service } from "../models/serviceModel.js";

class ServiceController {

  static async getByService(req, res) {
    try {
      const { id } = req.params;
      const response = await Service.findById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Falha ao buscar", error })
    }
  }

  static async getAllService(req, res) {
    try {
      const response = await Service.find();
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ message: "Falha ao buscar serviços", error })
    }
  }

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
      res.status(500).json({ message: "Falha ao criar Serviço", error })
    }
  }

  static async deleteService(req, res) {

    try {
      const { id } = req.params;
      const response = await Service.findByIdAndDelete(id)
      res.status(200).json({ message: "Serviço deletado com sucesso" })
    } catch (error) {
      res.status(500).json({ message: "Falha ao deletar serviço" })
    }
  }

  static async updateService(req, res) {

    try {
      const { id } = req.params;

      const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      }

      const response = await Service.findByIdAndUpdate(id, data)

      res.status(200).json({ message: "Serviço atualizado com sucesso" })

    } catch (error) {
      res.status(500).json({ message: "Falha ao atualizar serviço" })
    }
  }
}

export default ServiceController;