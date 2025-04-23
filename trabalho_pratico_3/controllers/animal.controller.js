import animalService from "../services/animal.service.js";

async function getAnimal(req, res, next) {
  try {
    res.send(await animalService.getAnimal(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function getAnimais(req, res, next) {
  try {
    res.send(await animalService.getAnimais(req.query.proprietario_id));
  } catch {
    next(error);
  }
}

export default {
  getAnimal,
  getAnimais,
};
