var seed = 0
var nouns = ["'a ' + Adjective() + ' Bog'", 
"'Bog'", 
"'Yog'", 
"'Kob'", 
"'Terry'", 
"'Tyler'", 
"'Thomas'", 
"'Herv'", 
"'Fib'", 
"'Pig'",
"'Dog'"
];
var adjectives = ["'fat'", 
"'ugly'", 
"'stupid'", 
"'idiotic'", 
"'baby'", 
"'local'", 
"'angry'", 
"'sad'", 
"'depressed'", 
"'crying'"
];
var events = [
    "'9/11'",
    "'North Korea'"
]
var verbs_past = [
    "'was caught ' + eval(VerbPresent())",
    "'killed ' + eval(Noun())",
    "'beat up ' + Number(1,25) + ' ' + eval(Noun())+'s'", 
    "'attacked ' + Number(1,25) + ' ' + eval(Noun())+'s'", 
    "'recreated ' + Event()", 
    "'put ' + eval(Noun()) + ' in a '", 
    "'ate ' + Number(1,50) + ' ' + eval(Noun())+'s'", 
    "'obliterated ' + eval(Noun())", 
    "'murdered ' + eval(Noun())",
    "'died'"
]
var verbs_present = [
    "'murdering ' + eval(Noun())",
    "'eating ' + Number(1,50) + ' ' + eval(Noun())+'s'",
    "'in 4k ' + eval(VerbPresent())"
]
var conjunctions = [
    "+', and then ' + eval(VerbPast())",
    "+', and so they ' + eval(VerbPast())",
    "+', and because of this ' + eval(Noun()) + ' ' + eval(VerbPast())"
]
function Adjective()
{
    return eval(adjectives[Math.floor(rand()*adjectives.length)]);
}
function Event()
{
    return eval(events[Math.floor(rand()*events.length)]);
}
function Noun()
{
    return nouns[Math.floor(rand()*nouns.length)];
}
function Number(min,max)
{
    return String(Math.floor(rand() * (max - min) + min));
}
function VerbPresent()
{
    return verbs_present[Math.floor(rand()*verbs_present.length)];
}
function Conjunction()
{
    return conjunctions[Math.floor(rand()*conjunctions.length)];
}
function VerbPast()
{
    return verbs_past[Math.floor(rand()*verbs_past.length)];
}
function Generate()
{
    let str = "''+" + Noun() + "+' '+" + VerbPast();
    if(rand() <= 0.5)
    {
        str += Conjunction()
    }
    console.log(str)
    return eval(str) + ".";
}
function rand() 
{
    let value = seed;
    value = (value * 9301 + 49297) % 233280;
    seed += 1
    return value / 233280;
}
function getDateFormatted(offsetDays = 0) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - offsetDays);
  
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
  
    return `${month}/${day}/${year}`;
  }
function daysSince2000(date) {
  const year2000 = new Date(2000, 0, 1);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  
  const timeDifference = date - year2000;
  const daysSince = Math.floor(timeDifference / millisecondsPerDay);
  
  return daysSince;
}

// Example usage
var currentDate = new Date(); // Current date
var days = daysSince2000(currentDate);
seed = days
console.log(seed)
document.getElementById("TEXT").innerHTML = "<h2>Today's News</h2><br>" + getDateFormatted(0) + "<br><br>" + Generate() + "<br><br><hr><br><h2>Last Month's News</h2><br><br><hr><br>";

for (let index = 1; index < 31; index++) {
    seed = daysSince2000(currentDate)-index
    document.getElementById("TEXT").innerHTML += getDateFormatted(index) + "<br><br>" + Generate() + "<br><br><hr><br>";
}