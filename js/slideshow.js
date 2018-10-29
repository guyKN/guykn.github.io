var slidelist = [];
var order = [14 ,1, 5,  4, 9, 17, 15, 10, 11, 12, 16, 13, 2, 3, 6, 7, 8];
console.log("Hello");
var active_index = 0;
var timer = 0;
var delay = 5;

var setSlide = function(index, prev){
    slidelist[prev%order.length].fadeOut(1000);
    slidelist[index%order.length].fadeIn(1000);
    clearTimeout(timer);
    timer = setTimeout(nextSlide, 1000*delay);
    return index; 
};

var nextSlide = function(){
    active_index = setSlide(active_index+1, active_index);
    if(active_index >= order.length){
        active_index -= order.length; 
    }
}
var prevSlide = function(){
    active_index = setSlide(active_index-1, active_index);
    if(active_index <= 0){
        active_index += order.length; 
    }
}


for (var i=0;i<order.length;i++){
    slidelist.push($("#img" + order[i]));
}


timer = setTimeout(nextSlide, 1000*delay);

