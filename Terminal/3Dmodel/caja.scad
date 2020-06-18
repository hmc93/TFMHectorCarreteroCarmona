
//ESTE MODULO GENERA UNA CAJA PARA EL PASTILLERO.

use<sector.scad>;
//la caja central para las patillas.
module cajasinhueco (tomasdia=3,
altura=50,
diametro=300,
diametrointerior=150,
grosorlateral=10,
grosorlateralcarcasa=10,
grosorinferiorcarcasa=5,
grosorsuperiorcarcasa=5,
grosorinferior=10,
grosorcajon=3
){

tomassem=tomasdia*7;
angulo=360/tomassem/2;
anguloinic=(tomasdia%2!=0)? angulo: 0;   

module cajitas(
tomasdia=3,
altura=50,
diametro=300,
diametrointerior=150
){
//for(n = [anguloinic : 2*angulo : 360]){    
   echo(0);
   difference(){
        rotate([0,0,0])
        cube([diametro-diametrointerior,grosorcajon,altura]);
        //rotate([0,0,0])
        //translate([diametro/2-grosorlateral,0,0])
        //cube([diametro-grosorlateral,grosorcajon,altura],center=true);
    }
//}
}
difference(){
    cylinder(h=altura,d=diametro,$fn=tomassem, center=true);
    translate([0,0,grosorinferior]){   
    cylinder(h=altura,d=diametro-grosorlateral,$fn=tomassem, center=true);
    }    
}
cylinder(h=altura,d=diametrointerior,$fn=tomassem, center=true);
       cajitas();
}
//la caja, teniendo en cuenta el agujero para el servomotor.
module caja(tomasdia=3,
altura=50,
diametro=300,
diametrointerior=150,
grosorlateral=10,
grosorlateralcarcasa=10,
grosorinferiorcarcasa=5,
grosorsuperiorcarcasa=5,
grosorinferior=10,
grosorcajon=3){

difference(){
    cajasinhueco(tomasdia,
altura,
diametro,
diametrointerior,
grosorlateral,
grosorlateralcarcasa,
grosorinferiorcarcasa,
grosorsuperiorcarcasa,
grosorinferior,
grosorcajon);
    translate([0,0,-25]){
        cylinder(h=50, d=3, $fn=100, center=true);
    }
}
}
//La caja y la cubierta exterior
module cajacubierta(tomasdia=3,
altura=50,
diametro=300,
diametrointerior=150,
grosorlateral=10,
grosorlateralcarcasa=10,
grosorinferiorcarcasa=5,
grosorsuperiorcarcasa=5,
grosorinferior=10,
grosorcajon=3,
hsup=10,
hinf=20,
hlat=7,
gsup=3,
ginf=3,
glat=3
){  
    alturacajaExt=altura+hsup+gsup+hinf+ginf;
    alturacajaInt=altura+hsup+hinf;
    desplazamiento=hinf-(alturacajaInt-altura)/2;
    translate([0,0,-desplazamiento]){
    difference(){  
        cylinder(h=alturacajaExt, d=diametro+hlat+glat, $fn=100, center=true);
        cylinder(h=alturacajaInt,d=diametro+hlat, $fn=100, center=true);    
    }
    } 
caja(tomasdia,
altura,
diametro,
diametrointerior,
grosorlateral,
grosorlateralcarcasa,
grosorinferiorcarcasa,
grosorsuperiorcarcasa,
grosorinferior,
grosorcajon);
}
//%cajacubierta();
//Caja con una apertura para coger la pastilla y con un agujero para la alimentación 
module cajaAlimTapa(tomasdia=3,
altura=50,
diametro=300,
diametrointerior=150,
grosorlateral=10,
grosorlateralcarcasa=10,
grosorinferiorcarcasa=5,
grosorsuperiorcarcasa=5,
grosorinferior=10,
grosorcajon=3,
hsup=10,
hinf=20,
hlat=7,
gsup=3,
ginf=3,
glat=3,
anguloTapa1=170,
anguloTapa2=190,
diametroalim=10,
alturaalim=10
){
  module tapa(){
   difference(){
    translate([0,0,altura*0.5+hsup]){
    sector(h=gsup, d=diametro, a1=anguloTapa1, a2=anguloTapa2,$fn=100, centre=true);   
    }    
    translate([0,0,altura*0.5+hsup]){
    sector(h=gsup, d=diametrointerior, a1=anguloTapa1, a2=anguloTapa2, $fn=100, centre=true);
   }     
}
}
    alturacajaInt=altura+hsup+hinf;
    desplazamientoAlim=alturacajaInt/2-alturaalim;
    echo(alturacajaInt/2);
    echo(desplazamientoAlim);
    
difference(){
            cajacubierta(tomasdia,
            altura,
            diametro,
            diametrointerior,
            grosorlateral,
            grosorlateralcarcasa,
            grosorinferiorcarcasa,
            grosorsuperiorcarcasa,
            grosorinferior,
            grosorcajon,
            hsup,
            hinf,
            hlat,
            gsup,
            ginf,
            glat
            );
            translate([(diametro+hlat/2)/2,0, -desplazamientoAlim])
            rotate(a=[0,90,0])
            cylinder(h=glat*2, d=diametroalim, $fn=100, centre=true); 
            tapa();
}
}
cajaAlimTapa();

