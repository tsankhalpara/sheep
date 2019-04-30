function Pen() {
  this._pen = [];
};

Pen.prototype.add = function(sheep) {
  this._pen.push(sheep);
};

var pen = new Pen();

pen.add(sheep);
