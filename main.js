window.addEventListener('load', () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight*2;
    canvas.width = window.innerWidth;

    let painting = true;

    function startPosition(e) 
    {
        painting = true;
        draw(e);
    }
    function finishedPosition() 
    {
        painting = false;
        ctx.beginPath();

    }

    function draw(e) 
    {
        if(e.cancelable){e.preventDefault();}         
        if (!painting) return;
        let size = document.getElementById('size');
        let y = size.value;
        ctx.lineWidth = y;
        ctx.lineCap = "round";
        ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
        let clr = document.getElementById('clr');
        let x = clr.value;
        ctx.strokeStyle = x;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
    }

    function draw2(e) 
    {
        if (!painting) return;
        let size = document.getElementById('size');
        let y = size.value;
        ctx.lineWidth = y;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        let clr = document.getElementById('clr');
        let x = clr.value;
        ctx.strokeStyle = x;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }


    function jnjel() 
    {
        ctx.strokeStyle = "white";
    }

    function f() 
    {
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    let r = document.getElementById('r');

    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("touchend", finishedPosition);
    canvas.addEventListener("touchmove", draw);
    
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw2);
    r.addEventListener("click", f);
});