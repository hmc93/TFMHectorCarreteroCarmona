use<sector.scad>;
use<Getriebe.scad>;
include <configuration.scad>
include<Servo-wheel.scad>;
rotate([90,0,0])
translate([-22.5,0,-22.5])
import("/Users/Hector/Documents/TFM/3Dmodel/Parallax_Futaba_Servo_Horn_Mounts/files/Parallax_Quad_Servo_Horn_Mount_expanded_holes_with_holes_for_nuts_rev_2.STL");

//Caja base para el pastillero
module cajapastis (tomasDia=4,
alturaPastillero=50,
diametroExtPastillero=300,
diametroIntPastillero=150,
grosorLateralPastillero=10,
grosorInferiorPastillero=10,
grosorCajonPastillero=1.5,
profundidadLatCajon=2,
produndidadInfCajon=1,
diametroAgujeroMotor=15,
profundidadAgujeroMotor=20,
diametroCarcasa=330,
grosorLatCarcasa=10,
espacioSupCarcasa=13,
espacioInfCarcasa=60,
grosorInfCarcasa=5,
grosorSupCarcasa=5,
diametroAlimentacion=6,
alturaAlimentacion=10,
corteEncaje=25,
alturaEncaje=10,
anguloPiezaEncaje=10,
grosorPiezaEncaje=3,
distanciaEncajeTapa=5,
alturaEncajeTapa=5,
profundidadEncajeTapa=10,
diametroAgujeroEncajeTapa=3
){

tomassem=tomasDia*7;
angulo=360/tomassem;
//anguloinic=(tomasDia%2!=0)? angulo: 0;   
anguloinic=0;
alturaTotalCarcasa=alturaPastillero+espacioSupCarcasa+grosorSupCarcasa+espacioInfCarcasa+grosorInfCarcasa;
diametroEncajeTapa=diametroIntPastillero-distanciaEncajeTapa;    


module cajitas(){
for(n = [anguloinic : angulo : 360]){
    rotate([0,0,n])
    translate([(diametroIntPastillero/2)-profundidadLatCajon,0,(grosorInferiorPastillero-produndidadInfCajon)])
    cube([((diametroExtPastillero-diametroIntPastillero)/2),grosorCajonPastillero,alturaPastillero]);
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
  translate([0,0,0])
scale([1.02,1.02,1])
solidgear(); 
 cajitas();  
}
}

module piezaEncaje(){
    difference(){    
    sector(h=alturaEncaje, d=diametroCarcasa-grosorLatCarcasa/2+grosorPiezaEncaje/2, a1=90-anguloPiezaEncaje/2, a2=90+anguloPiezaEncaje/2,$fn=200);
    sector(h=alturaEncaje, d=diametroCarcasa-grosorLatCarcasa/2-grosorPiezaEncaje/2, a1=90-anguloPiezaEncaje/2, a2=90+anguloPiezaEncaje/2,$fn=200);
    }    
}

module Carcasa1(){
    module encajeTapa(){
        difference(){   
        sector(h=alturaEncajeTapa, d=diametroEncajeTapa, a1=180.001-angulo/2, a2=180-angulo/4,$fn=200);
        sector(h=alturaEncajeTapa, d=diametroEncajeTapa-profundidadEncajeTapa, a1=180.001-angulo/2, a2=180-angulo/4, $fn=200);     
        }  
       difference(){
       sector(h=alturaEncajeTapa, d=diametroEncajeTapa, a1=180+angulo/4, a2=180+angulo/2,$fn=200);
       sector(h=alturaEncajeTapa, d=diametroEncajeTapa-profundidadEncajeTapa, a1=180+angulo/4, a2=180.001+angulo/2,$fn=200);    
        }  
    }
    module huecoTapa(){
    difference(){  
    sector(h=grosorSupCarcasa, d=diametroExtPastillero, a1=180-angulo/2, a2=180+angulo/2,$fn=200);   
    sector(h=grosorSupCarcasa, d=diametroIntPastillero, a1=180-angulo/2, a2=180+angulo/2,$fn=200);    
    }
    }
    difference(){
        cylinder(h=alturaTotalCarcasa-corteEncaje, d=diametroCarcasa, $fn=200);
        //translate([0,0,-grosorSupCarcasa])
        cylinder(h=alturaTotalCarcasa-corteEncaje-grosorSupCarcasa, d=diametroCarcasa-grosorLatCarcasa, $fn=200);
        translate([0,0,alturaTotalCarcasa-corteEncaje-grosorSupCarcasa])  
        huecoTapa();
        translate([0,0,0])
        piezaEncaje();
        rotate([0,0,180])
        piezaEncaje();    
    }
        difference(){
        translate([0,0,alturaTotalCarcasa-corteEncaje])
        encajeTapa();
        translate([-((diametroEncajeTapa/2)-profundidadEncajeTapa/3),0,alturaTotalCarcasa+alturaEncaje/4-corteEncaje])
        rotate([0,90,90])
        cylinder(h=25, d=diametroAgujeroEncajeTapa, $fn=200, center=true);
        }    
}
module Carcasa2(){
   
    module AgujeroAlimentacion(){
    translate([(diametroCarcasa/2)-grosorLatCarcasa,0,alturaAlimentacion])   
    rotate(a=[0,90,0])
    cylinder(h=grosorLatCarcasa, d=diametroAlimentacion, $fn=200);
    }
    difference(){
      cylinder(h=corteEncaje, d=diametroCarcasa, $fn=200);
      translate([0,0,grosorInfCarcasa])    
      cylinder(h=corteEncaje-grosorInfCarcasa, d=diametroCarcasa-grosorLatCarcasa, $fn=200);
      AgujeroAlimentacion(); 
    }
    translate([0,0,corteEncaje])
    piezaEncaje();
    rotate([0,0,180])
    translate([0,0,corteEncaje])
    piezaEncaje();
}

module tapa(){
    translate([0,0,0])
    difference(){  
    sector(h=grosorSupCarcasa, d=diametroExtPastillero, a1=180-angulo/2, a2=180+angulo/2,$fn=200);   
    sector(h=grosorSupCarcasa, d=diametroIntPastillero, a1=180-angulo/2-0.001, a2=180.001+angulo/2,$fn=200);    
    }
    difference(){  
    sector(h=grosorSupCarcasa, d=diametroIntPastillero, a1=180-angulo/6, a2=180+angulo/6,$fn=200);   
    sector(h=grosorSupCarcasa, d=(diametroEncajeTapa-profundidadEncajeTapa), a1=180-angulo/6-0.001, a2=180.001+angulo/6,$fn=200);   
    translate([-((diametroEncajeTapa/2)-profundidadEncajeTapa/3),0,alturaEncaje/4])
    rotate([0,90,90])
    cylinder(h=7, d=diametroAgujeroEncajeTapa, $fn=200, center=true);    
    }
    
}
module palito(){
    translate([-((diametroEncajeTapa/2)-profundidadEncajeTapa/3),0,alturaEncaje/4])
    rotate([0,90,90])
    cylinder(h=25, d=diametroAgujeroEncajeTapa, $fn=200, center=true);
}
module gear(){
module solidgear(){
translate([0,-30,0])
zahnstange_und_rad (modul=2, laenge_stange=0, zahnzahl_rad=30, hoehe_stange=5, bohrung_rad=4, breite=10, eingriffswinkel=20, schraegungswinkel=0, zusammen_gebaut=true, optimiert=true);
 cylinder(h=10, d=50, $fn=200);
}
difference(){
solidgear();  
cylinder(h=10, d=40, $fn=200);
//translate([0,0,0])
//horn4(h=wheel_height);
}
}

translate([0,0,corteEncaje])
Carcasa1();
translate([0,0,0])
Carcasa2();
translate([0,0,espacioInfCarcasa+grosorInfCarcasa])
cajaPastillas();
translate([0,0,0])
scale([1,1,1])
gear();
translate([0,0,8])
cylinder(h=2,d=40, $fn=200);
//rotate([90,0,0])
//translate([-22.5,0,-22.5])
//import("/Users/Hector/Documents/TFM/3Dmodel/Parallax_Futaba_Servo_Horn_Mounts/files/Parallax_Quad_Servo_Horn_Mount_expanded_holes_with_holes_for_nuts_rev_2.STL");
translate([0,0,alturaTotalCarcasa])
tapa();
translate([0,0,alturaTotalCarcasa])
palito();
}



//PRUEBAS
//difference(){
cajapastis();

//translate([0,0,-50])    
//sector(h=500, d=400, a1=40, a2=120,$fn=200);
//}    