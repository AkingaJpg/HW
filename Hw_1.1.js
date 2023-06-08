const userNames = ["Seraphina Rivers", "Orion Stormwalker", "Luna Wildeyes"];
const SeparateUserNames = userNames.map(userName => userName.split(" "))
const Initials =
    SeparateUserNames.map(userName =>
        userName
        [0]
            .charAt(0)
            .toUpperCase() + (".") +
        userName
        [1]
            .charAt(0)
            .toUpperCase() + ("."));

Initials.sort() 
console.log(Initials); 