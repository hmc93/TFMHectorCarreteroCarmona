use<sector.scad>;
use<caja.scad>;
diametro=300;
diametrointerior=150;
altura=50;
gsup=3;
hsup=10;
diametroalim=10;
glat=3;
hlat=7;

module exoesqueleto(
hsup=10,
hinf=50,
hlat=7,
gsup=3,
ginf=3,
glat=3
){   
    difference(){
    translate([0,0,hsup+gsup])    
        cylinder(h=altura, d=diametro+hlat+glat, $fn=100, center=true);
    translate([0,0,hsup])    
        cylinder(h=altura,d=diametro+hlat, $fn=100, center=true);    
    } 
    difference(){
    translate([0,0,-hinf-ginf])    
        cylinder(h=altura*1.8, d=diametro+hlat+glat, $fn=100, center=true);
    translate([0,0,-hinf])    
        cylinder(h=altura*1.8,d=diametro+hlat, $fn=100, center=true);    
    }

}

module tapa(){
   difference(){
    translate([0,0,altura*0.5+hsup]){
    sector(h=gsup, d=diametro, a1=170, a2=190,$fn=100, centre=true);   
    }    
    translate([0,0,altura*0.5+hsup]){
    sector(h=gsup, d=diametrointerior, a1=170, a2=190, $fn=100, centre=true);
   }     
}
}
caja();
difference(){
%exoesqueleto();
        translate([(diametro+hlat/2+glat/2)/2,0,-altura*1.7])
        rotate(a=[0,90,0])
        cylinder(h=glat, d=diametroalim, $fn=100, centre=true); 
tapa();
}    
