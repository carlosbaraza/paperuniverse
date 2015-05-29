
window.app = {
  currentExample: null,
  clear: function clear() {
    paper.clear();
    var canvas = document.getElementById("myCanvas");
    paper.setup(canvas);
  },
  _pausedOnFrame: null,
  pause: function pause() {
    if (paper.view.onFrame === null || paper.view.onFrame === undefined) return;
    this._pausedOnFrame = paper.view.onFrame;
    paper.view.onFrame = undefined;
  },
  play: function play() {
    if (this._pausedOnFrame === null || this._pausedOnFrame === undefined) return;
    paper.view.onFrame = this._pausedOnFrame;
    this._pausedOnFrame = null;
  }
};

// Setup the canvas
window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  paper.setup(canvas);
};
