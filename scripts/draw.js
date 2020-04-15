
window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // variables used by draw function

    let currentlyPainting = false;
    let linewidth = 20;
    let strokeColour = "red";
    var stage = new createjs.Stage("canvas");
    // var g = new createjs.Graphics();

    
    // keep canvas occupying 95 percent of the screen

    function resizeCanvas() {
        canvas.height = window.innerHeight * 0.95;
        canvas.width = window.innerWidth * 0.95;
        stage.update();
    }

    resizeCanvas();

    // Drawing functions

    function startPainting(event) {
        currentlyPainting = true;
        g.BeginPath();
        draw(event);
    }

    function draw(event) {
        if (currentlyPainting == false) {
            return;
        }
        g.lineWidth = linewidth;
        g.lineCap = "round";
        g.strokeColour = strokeColour;
        g.LineTo(event.clientX, event.clientY);
        g.Stroke();
        g.BeginPath();
        g.MoveTo(event.clientX, event.clientY);
    }

    function finishPainting() {
        currentlyPainting = false;
    }


    // SETTING UP SOME EVENTS

    canvas.onmousedown = startPainting;
    canvas.onmouseup = finishPainting;
    canvas.onmousemove = draw;
    canvas.onmouseout = finishPainting;
    window.onresize = resizeCanvas;

    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    var g = new createjs.Graphics();
    g.setStrokeStyle(1);
    g.beginStroke("#000000");
    g.beginFill("red");
    g.drawCircle(0,0,30);
    stage.addChild(g);
    stage.update();

};

