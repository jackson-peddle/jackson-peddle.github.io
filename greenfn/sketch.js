// Green FN
// Jackson Peddle
// Today
// GREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFNGREENFN

function setup() {
  createCanvas( 500, 200 );
}

function draw() {
  background( 0 );

  textAlign(CENTER, CENTER);
  

  let green = [0, 255, 0];
  let string = [
    ["FN", green],
  ];
  drawtext(50, 50, string );
}

function drawtext( x, y, text_array ) {

  let pos_x = x;
  for ( let i = 0; i < text_array.length; ++ i ) {
    let part = text_array[i];
    let t = part[0];
    let c = part[1];
    let w = textWidth( t );
    fill( c );
    text( t, pos_x, y);
    pos_x += w;
  }
} 