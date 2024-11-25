let data;
let dataObj;


function preload() {
  data = loadTable("assets/rivers.csv", "csv", "header");
}

//VARIABILI: colori
let pageColor = "#EDEDED"
let rectColor = "darkblue";
let textColor = "gray";


//VARIABILI: dimensioni
let rectWidth = 50;
let rectHeight = 200;
let padding = 10;

//ARRAY
let arrayOfColors = ['#FB8500', '#FFB703', '#8ECAE6', '#219EBC', '#023047'] //arancione, giallo, verde acqua, azzurro, blu
//let arrayOfColors = ['#780000', '#C1121F', '#FDF0D5', '#669BBC', '#003049'] //rosso, arancione, giallo, verde acqua, blu



function setup() {
  createCanvas(1920, 1050);
  background (pageColor);

  dataObj = data.getObject(); //la variabile dataObj (che era vuota) è ora composta così: prendi la varibile data e fai diventare gli elementi oggetti?
  //dataObj è un array

  let xPos = padding + rectWidth/2;
  let yPos = 0;
  

  for (let i=0; i< data.getRowCount(); i++ ) { 
    let row = dataObj[i]; //row è la singola riga

   drawGlyph (xPos, yPos, row.discharge/1000, row.length/10, row);
   xPos = xPos + padding + row.discharge/1000;
   //console.log (row.discharge);
   //console.log (i)
  }

  
  

}


function draw(){

  //fare piccola legenda sotto dopo
  //meglio palette di opacità piuttosto che di colori?

}


function drawGlyph (x, y, w, h, rowData) {
 fill (random(arrayOfColors));
 if (rowData.avg_temp < -3){
  fill (arrayOfColors[4]);
 } else if  (rowData.avg_temp < 0){
  fill (arrayOfColors[3]);
 } else if (rowData.avg_temp < 5){
  fill (arrayOfColors[2]);
 } else if (rowData.avg_temp < 10){
  fill (arrayOfColors[1]);
 } else {
  fill (arrayOfColors[0]);
 }

 rect (x, y, w, h);

 //console.log(rowData.avg_temp);
 

  push();
  translate (x,rowData.length/10+2*padding)
  rotate (HALF_PI);
  fill (textColor);
  text (rowData.name, 0, 0 )
  pop ();

}
