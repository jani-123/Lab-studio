
var calculator = {
    sum: 0,
    add: function(value){
        this.sum += value;
        console.log(value);
        console.log(this.sum);
    },
    subtract: function(value){
        this.sum -= value;
        console.log(value);
        console.log(this.sum);
    },
    multiply: function(value){
        this.sum * value;
        console.log(value);
        console.log(this.sum * value);
    },
    dibide: function(value){
        this.sum / value;
        console.log(value);
        console.log(this.sum / value);

    },
    clear: function(){
        this.sum = 0;   
    },
    equals: function(){
        return this.sum;
    }

}
