var i = 0;

function timedCount() {
    i = i + 1;
    postMessage("count is something around : "+i);
    setTimeout("timedCount()",500);
}

timedCount()