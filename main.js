
    class Vehicles{
     static vehicles_id
     vehicles_name
     manufacture_company
    
    
     constructor(vehicles_id,vehicles_name,manufacture_company){
        this.vehicles_id = vehicles_id;
        this.vehicles_name = vehicles_name;
        this.manufacture_company = manufacture_company;
        
     }
    }

     
        class Plane extends Vehicles{
           plane_type
           plane_model
           plane_class
        
          constructor(vehicles_id,vehicles_name,manufacture_company,plane_type , plane_model , plane_class ){
            super(vehicles_id,vehicles_name,manufacture_company)
            this.plane_type= plane_type;
            this.plane_model = plane_model;
            this.plane_class = plane_class
          }
          }
        class Car extends Vehicles {
            car_type //eletric or gas 
            car_model
            type_fuel //91 or 95
            car_class // size of car 
            car_color 
            plate_number 
            
            
            constructor(vehicles_id,vehicles_name,manufacture_company,car_type,car_model,type_fuel,car_class,car_color,plate_number){
                super(vehicles_id,vehicles_name,manufacture_company)
                this.car_type = car_type;
                this.car_model = car_model;
                this.type_fuel = type_fuel;
                this.car_class = car_class;
                this.car_color = car_color;
                this.plate_number = plate_number
            }
 
            }
            class Employee{
                employee_name 
                 static employee_id
                employee_DOB
                employee_phone_number
                
                constructor(employee_name , employee_id , employee_DOB , employee_phone_number){
                this.employee_name = employee_name;
                this.employee_id = employee_id; 
                this.employee_DOB = employee_DOB; 
                this. employee_phone_number = employee_phone_number;
                }
                } 
                class Pilot extends Employee{
                    pilot_licenseId
                
                    constructor(employee_name , employee_id , employee_DOB , employee_phone_number,pilot_licenseId){
                        super(employee_name , employee_id , employee_DOB , employee_phone_number)
                        this.pilot_licenseId = pilot_licenseId
                    }
                
                }
                class Driver extends Employee{
                    driver_licenseId
                    
                    constructor(employee_name , employee_id , employee_DOB , employee_phone_number,driver_licenseId){
                        super(employee_name , employee_id , employee_DOB , employee_phone_number)
                        this.driver_licenseId = driver_licenseId
                    }
                    }   
                    class Reservation{
                        reservation_id
                        reservation_date
                        employee_id
                        vehicles_id 

                        constructor(reservation_date , employee_id , vehicles_id , reservation_id){
                            this.reservation_date =reservation_date;
                            this.employee_id = employee_id ;
                            this.vehicles_id = vehicles_id ;
                            this.reservation_id = reservation_id
                        }
                    
                    
                    }
/*
i used to distinguish the even numbers
 of the driver and the car, 
 and the odd numbers of the pilot and pilot
*/
 let car1 = new Car (1,'Car','Lexsus','eletric','Sport','95','Big','dark blue','192 t a e')
 let car2 = new Car (3,'Car','Audi','eletric','A5','95','Small',' gray','199 t f t')
 let car3 = new Car (5,'Car','Mazda','eletric','M6','95','Small','white','111 h m r')
 let plane1 = new Plane(2,'Plane','Airbus','Light','A330','small')
 let plane2 = new Plane(4,'Plane','Boeing','Wide','A657','Large')

 let dr = new Driver('Abdullah',11,'1997-12-27', '0555639',0041);
 let pi = new Pilot('Saif',12,'1991-5-14','056825',0044)


// to generate a reservation date
 let date = new Date();
 let fullDay= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()





 // fuction check if Driver has car or Pilot has plane 
 let printArrayMap =[]
  function check(employee_id,vehicles_id,reservation_id){
    let reserved =[]
   
     if(employee_id%2==0 && !(vehicles_id%2==0)){
         console.log("incompatibility");
     }
     else if(employee_id%2==0 && vehicles_id%2==0){
    // hold object of Reservation in array
    reserved.push(new Reservation(fullDay,employee_id,vehicles_id ,revisedRandId()))
 
     }
     // print array using map function
     printArrayMap = reserved.map(function(currentValue){
      return currentValue;
         })
  }
  //method returns id random
  function revisedRandId() {
    return '43'+Math.floor(Math.random() * 16) + 5;
}
  check(2,2,1)
  console.log(printArrayMap);

