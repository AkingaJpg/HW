//obj w rand props and funcs (connect to the context+protected+call in timer)

let myDog = {
name: 'Kira',
residency: 'Kyiv',
gender: 'dog',
age: 6,
hobby: 'eat',
defaultMood: 'bark',
currentMood: 'notbark',
favouriteFood: 'trash',
introduce() {
console.log(`Woof ${this.name} and I am a ${this.gender}`);
},
prognose() {
console.log(`I hope that next year I'm gonna be ${this.age+1}`);
},
describeMyMood(){
console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
},
plans() {
    console.log(`Now ${this.name} will eat some ${this.favouriteFood}`);
}
}

myDog.introduce();
myDog.prognose();
myDog.describeMyMood();

let securedSelfIntroduce = myDog.introduce.bind(myDog);
let securedSelfPrognose = myDog.prognose.bind(myDog);
let securedSelfDescribeMyMood = myDog.plans.bind(myDog);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfPrognose, 2000); 
setTimeout(securedSelfDescribeMyMood, 3000); 

