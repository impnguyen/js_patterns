var zoo = (function() {
    // private members
    var animals = [];

    // private methods
    function addAnimal(object) {
        animals.push(object);
    }

    function removeAnimal(object) {
        var index = animals.indexOf(object);
        if (index >= 0) {
            animals.splice(index, 1);
        }
    }

    function getAnimals() {
        return JSON.parse(JSON.stringify(animals));
    }

    // public api
    return {
        addAnimal: addAnimal,
        removeAnimal: removeAnimal,
        getAllAnimals: getAnimals
    };
})();

module.exports = zoo;