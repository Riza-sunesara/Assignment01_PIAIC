interface car{
    manufacturer:string,
    model_name:string,
    [other:string]:string|number
};

function car_info(manufacturer:string,model_name:string,other?:{[other:string]:string|number}) {
    let car:car={
        manufacturer,
        model_name,
        ...other
    };
    return car;
}

let car1=car_info("Toyota","Corolla",{color:"blue",feature:"sunroof",year:2022});
let car2=car_info("Suzuki","Mehran",{color:"grey",year: 2023});

console.log(car1);
console.log(car2);

