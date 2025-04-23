import animalRepository from "../repositories/animal.repository.js";

async function getAnimal(id) {
  return await animalRepository.getAnimal(id);
}

async function getAnimais(proprietario_id) {
  if (proprietario_id) {
    return await animalRepository.getAnimaisByProprietarioId(proprietario_id);
  } else {
    return await animalRepository.getAnimais();
  }
}

export default {
  getAnimal,
  getAnimais,
};
