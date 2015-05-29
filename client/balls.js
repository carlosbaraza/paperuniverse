

app.examples.balls = function balls() {
  app.clear();
  
  var objs = [];

  for (var i = 1; i <= 20; i++) {
    var obj = {
      path: new paper.Path.Circle({
        center: [75, 75],
        radius: 50,
        strokeColor: 'black'
      }),
      speed: {
        x: Math.random() * 10,
        y: Math.random() * 10
      },
      radius: 70
    };

    objs.push(obj);
  }

  paper.view.onFrame = function onFrame(event) {
    objs.forEach(function(obj) {
      if ((obj.path.position.x + obj.radius / 2) > paper.view.size.width ||
         (obj.path.position.x - obj.radius / 2) < 0) {
        obj.speed.x = obj.speed.x * -1;
      }
      if ((obj.path.position.y + obj.radius / 2) > paper.view.size.height ||
          (obj.path.position.y - obj.radius / 2) < 0) {
        obj.speed.y = obj.speed.y * -1;
      }

      obj.path.translate(obj.speed);
    });
  };
};
