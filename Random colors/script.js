var index = 0;

function changeColors(){
    var colors = ["pink","red","green","hotpink", "blue", "orange", "yellow"];

    document.getElementsByTagName("body")[0].style.background=colors[index++];

    if(index > colors.length-1)
    index = 0;
}