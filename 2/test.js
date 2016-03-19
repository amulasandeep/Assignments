function animal (breed){
    this.breed = breed;
}

function hunt (target, forest){
    this.target=target;
    this.forest=forest;
}

hunt.prototype=new animal("tiger");

var hunting= new hunt("deer","nalla malla");
function die(){
    console.log(hello);
    var hello="helloworld";
    
}
function run() {

    console.log("The "+ hunting.breed+" is hunting "+hunting.target+" in "+hunting.forest+" forest");
    
}