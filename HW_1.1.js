const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const SeparateUserNames = userNames.map(userName => userName.split(" "))
const Initials =
    SeparateUserNames.map(userName => userName.map(name => name.charAt(0).toUpperCase()).join("."));

Initials.sort() 
console.log(Initials);
