difference(){
cube([40,40,25]);
    //10mm, 15mm, 3mm no tolerancia 
translate([4,25,4])
#cube([10,15,3]);

// 10, 15, 3 (tolearncias 1 mm = 0.5mm cada lado)
translate([23.5,24.5,3.5])
#cube([11,16,4]);    

//10, 15, 3 (tolerancias 0.5mm =0.25 mm cada lado)
translate([3.75,24.75,11.75])
#cube([10.5,15.5,3.5]);

// 10, 15, 3 (tolerancias 1mm para x,y y 0.5mm para z) 
translate([23.5,24.5,11.75])
#cube([11,16,3.5]);    

#cube([40,10,25]);
translate([30,40,25])
sphere(r=3, $fn=50);
}



translate([80,0,0])
cube([10,25,3]);
