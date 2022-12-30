const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
/****************************************************************
Correcteur: Yannick GOUGUIA
revoir la reponse a la ligne 6
****************************************************************/
const myWatchedSeriesLength = "myWatchedSeries.length";

const myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);
console.log("I watched 3 series:" + myWatchedSeriesSentence);

/****************************************************************
Correcteur: Yannick GOUGUIA
Que fait la variable ii??
il faut bien choisir les noms des variables
****************************************************************/

const ii = myWatchedSeries.indexOf("the big bang theory");
console.log(ii)
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries)
myWatchedSeries.push("Titanic");
console.log(myWatchedSeries)
myWatchedSeries.unshift("swat");
console.log(myWatchedSeries)
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries)
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries)
