var seed = 0
var nouns = [
"'a ' + Adjective() + ' bog'", 
"'a ' + Adjective() + ' dog'", 
"'a ' + Adjective() + ' pig'",
"'a ' + Adjective() + ' giraffe'",  
"'a ' + Adjective() + ' kob'", 
"'a ' + Adjective() + ' duck'", 
"'a ' + Adjective() + ' can of soup'",
"'a ' + Adjective() + ' pasta'",
"'a ' + Adjective() + ' spaghetti'",   
"'a ' + Adjective() + ' pizza'",
"'a ' + Adjective() + ' fork'",
"'a ' + Adjective() + ' spoon'",
"'a ' + Adjective() + ' book'",
"'a ' + Adjective() + ' shit'",
"'a ' + Adjective() + ' witness'",
"'Bog'", 
"'Yog'", 
"'Kob'", 
"'Terry'", 
"'Tyler'", 
"'Thomas'", 
"'Herv'", 
"'Fib'", 
"'Pig'",
"'Dog'",
];
var adjectives = [
"'fat'", 
"'ugly'", 
"'Floridian'", 
"'stupid'", 
"'idiotic'", 
"'baby'", 
"'local'", 
"'angry'", 
"'demonic'", 
"'french'", 
"'sad'", 
"'depressed'", 
"'crying'",
"'little'",
"'high calorie'",
"''",
"eval(Noun()) + 'phobic'",
"Adjective() + 'phobic'",
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
    "'put ' + eval(Noun()) + ' in a ' + Place()", 
    "'ate ' + Number(1,50) + ' ' + eval(Noun())+'s'", 
    "'obliterated ' + eval(Noun())", 
    "'murdered ' + eval(Noun())",
    "'died'",
    "'was screaming ' + Quote()",
    "'was calmly saying ' + Quote()",
    "'was on fire, yelling ' + Quote()",
    "'was walking when, ' + Generate()",
    "'was walking to ' + Place() + ' when ' + Generate()",
    "'blew up a ' + Place()", 
]
var verbs_present = [
    "'murdering ' + eval(Noun())",
    "'eating ' + Number(1,50) + ' ' + eval(Noun())+'s'",
    "'in 4k ' + eval(VerbPresent())",
    "'screaming ' + Quote()",
    "'calmly saying ' + Quote()",
    "'on fire, yelling ' + Quote()",
    "'walking when, ' + Generate()",
    "'walking to ' + Place() + ' when ' + Generate()",
    "'blowing up a ' + Place()", 
]
var conjunctions = [
    "+', and then, ' + eval(VerbPast())",
    "+', and, ' + eval(VerbPast())",
    "+', and so, they ' + eval(VerbPast())",
    "+', and because of this, ' + eval(Noun()) + ' ' + eval(VerbPast())",
    "+'. Later that day,' + Generate()",
]
var quotes = [
    "'\"Fuck you!\"'",
    "'\"HO HO HO MOTHER FUCKER!\"'",
    "'\"I love eating!\"'",
    "'\"GAERGJOJOJAWFOPJOJ!\"'",
    "'\"If two mind readers read each other’s minds, who’s mind are they reading?\"'",
    "'\"Would you rather have unlimited bacon, but no games, or games, unlimited games, but no games?\"'",
]
var places = [
    "'a ' + Adjective() + ' hole'",
    "'a ' + Adjective() + ' pit'",
    "'a ' + Adjective() + ' room'",
    "'a ' + Adjective() + ' jail'",
    "'a ' + Adjective() + ' prison'",
    "'a ' + Adjective() + ' school'",
    "'a ' + Adjective() + ' cupboard'",
    "'a ' + ' hole'",
    "'a ' + ' pit'",
    "'a ' + ' room'",
    "'a ' + ' jail'",
    "'a ' + ' prison'",
    "'a ' + ' school'",
    "'a ' + ' cupboard'",
]
function Place()
{
    return eval(places[Math.floor(rand()*places.length)]);
}
function Quote()
{
    return eval(quotes[Math.floor(rand()*quotes.length)]);
}
function Adjective()
{
    let v = eval(adjectives[Math.floor(rand()*adjectives.length)])
    if(rand() <= 0.5)
    {
        v += ", " + eval(adjectives[Math.floor(rand()*adjectives.length)])
        if(rand() <= 0.5)
        {
            v += ", " + eval(adjectives[Math.floor(rand()*adjectives.length)])
            if(rand() <= 0.5)
            {
                v += ", " + eval(adjectives[Math.floor(rand()*adjectives.length)])
                if(rand() <= 0.5)
                {
                    v += ", " + eval(adjectives[Math.floor(rand()*adjectives.length)])
                    if(rand() <= 0.5)
                    {
                        v += ", " + eval(adjectives[Math.floor(rand()*adjectives.length)])
                    }
                }
            }
        }
    }
    return v;
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
        if(rand() <= 0.25)
        {
            str += Conjunction()
            if(rand() <= 0.125)
            {
                str += Conjunction()
            }
        }
    }
    console.log(str)
    return eval(str) + ".";
}
function rand() 
{
    let value = seed*40;
    value = (value * 9301 + 49297) % 233280;
    seed += 0.1
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
  const year2000 = new Date(2020, 0, 1);
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