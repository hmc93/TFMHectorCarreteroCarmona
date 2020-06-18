use<sector.scad>;
use<Getriebe.scad>;
include <configuration.scad>
include<Servo-wheel.scad>;

//Caja base para el pastillero
module cajapastis (tomasDia=4,
alturaPastillero=50,
diametroExtPastillero=250,
diametroIntPastillero=110,
grosorLateralPastillero=10,
grosorInferiorPastillero=10,
grosorCajonPastillero=1.5,
profundidadLatCajon=2,
produndidadInfCajon=1,
alturaHueco=27,
diametroHueco=87
){

tomassem=tomasDia*7;
angulo=360/tomassem;
//anguloinic=(tomasDia%2!=0)? angulo: 0;   
anguloinic=0;
alturaCajin=alturaPastillero-grosorInferiorPastillero+produndidadInfCajon;
module cajitas(){

for(n = [anguloinic : angulo : 360]){
    rotate([0,0,n])
    translate([(diametroIntPastillero/2)-profundidadLatCajon,0,(grosorInferiorPastillero-produndidadInfCajon)])
    cube([((diametroExtPastillero-diametroIntPastillero)/2),grosorCajonPastillero,alturaCajin]);
}
}
module formaCaja(){
difference(){
    cylinder(h=alturaPastillero,d=diametroExtPastillero,$fn=tomassem);
    translate([0,0,grosorInferiorPastillero]){   
    cylinder(h=alturaPastillero,d=diametroExtPastillero-grosorLateralPastillero,$fn=tomassem);    
    }    
}
cylinder(h=alturaPastillero,d=diametroIntPastillero,$fn=tomassem);
  
  
}
module solidgear(){
translate([0,-30,0])
zahnstange_und_rad (modul=2, laenge_stange=0, zahnzahl_rad=30, hoehe_stange=5, bohrung_rad=4, breite=10, eingriffswinkel=20, schraegungswinkel=0, zusammen_gebaut=true, optimiert=true);
 cylinder(h=10, d=50, $fn=200);
}

module cajaPastillas(){
 
difference(){
formaCaja();
//translate([0,-diametroExtPastillero/2,0])
//zahnstange_und_rad (modul=diametroAgujeroMotor/10, laenge_stange=0, zahnzahl_rad=30, hoehe_stange=5, bohrung_rad=4, breite=profundidadAgujeroMotor, eingriffswinkel=20, schraegungswinkel=0, zusammen_gebaut=true, optimiert=true);
//cylinder(h=profundidadAgujeroMotor, d=diametroAgujeroMotor, $fn=200);
    
    //hueco interior
    translate([0,0,17])
    cylinder(h=alturaHueco,d=diametroHueco,$fn=100);
  translate([0,0,0])
scale([1.03,1.03,1.03])
solidgear(); 
     cajitas(); 
}
}
cajaPastillas();

}
module cajaizq(){
//mirando desde el lado del corte de la seccion    
//1
translate([105,0,3])
cube([10,15,3]);
//3
translate([-75,0,3])
cube([10,15,3]);
    
difference(){
cajapastis();    
//2 aplicada una tolerancia de 0.25mm por lado
translate([64.75,-14.75,2.75])
#cube([10.5,15.5,3.5]);
//4 aplicada una tolerancia de 0.25mm por lado
translate([-115.25,-15.25,2.75])
#cube([10.5,15.5,3.5]);
//translate([-150,-150,0])
//#cube([300,150,50]);
}    
}
//cajaizq();
//cajapastis();
//rotate([0,0,180])
//translate([0,-25,0])
//cajaizq();

