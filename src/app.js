import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io'];

  let domainGenerator = pronouns.map(pronoun => adjs.map(adj => nouns.map(noun => extensions.map(extension =>
	  console.log(`${pronoun}${adj}${noun}${extension}`)))));
};

