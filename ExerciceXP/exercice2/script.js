const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = "myWatchedSeries.length";
const myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);
console.log("I watched 3 series:" + myWatchedSeriesSentence);
/**
  Correcteur: Yannick GOUGUIA

  Merci de declarer des variables nominatives au lieu de ii
  
  il faut penser faire des commentaires
*/
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
