const zoo = require('./Rmp'); 

//access to module
zoo.addAnimal({animal: 'lion', nickname: 'Leo'});
zoo.addAnimal({animal: 'turtle', nickname: 'Schiggi'});
const human = {animal: 'human', nickname: 'Alex'};
zoo.addAnimal(human);
zoo.removeAnimal(human);

//leads to error
//zoo.getAnimals();

// log zoo members
console.log(zoo.getAllAnimals());