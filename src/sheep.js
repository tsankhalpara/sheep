function Sheep(name) {
  this.name = name;
};

Sheep.prototype.name = function() {
  return this.name;
};
