const cars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2020, color: "White", price: 20000, isElectric: false },
  { id: 2, brand: "Tesla", model: "Model 3", year: 2023, color: "Red", price: 45000, isElectric: true },
  { id: 3, brand: "Peugeot", model: "208", year: 2019, color: "Blue", price: 15000, isElectric: false },
  { id: 4, brand: "Volkswagen", model: "Golf", year: 2021, color: "Black", price: 22000, isElectric: true },
  { id: 5, brand: "Nissan", model: "Leaf", year: 2022, color: "Silver", price: 28000, isElectric: true }
];
const result = {
  totalCars: 0,
  cars: [],
  totalPrice: 0
};
function searchCar(arr,obj){
    for(const car of arr){
        if(car.isElectric===true && car.price <= 40000){
            obj.totalCars +=1
            car.priceAfterRedaction = car.price - (car.price*0.1)
            obj.cars.push(car)
            obj.totalPrice += car.priceAfterRedaction
        }
    }
}
function trierCars(obj){
    let min=obj.cars[0]
    let index=0
    for (let i=0 ; i< obj.cars.length ; i++){
        let temp={}
        for (j=i; j<obj.cars.length; j++){
            if(obj.cars[j].priceAfterRedaction < min){
                min = obj.cars[j].priceAfterRedaction 
                index=j
            }
        }

        temp=obj.cars[index]
        obj.cars[index]=obj.cars[i]
        obj.cars[i] = temp

    }
}

 searchCar(cars,result);
 console.log(cars)
 console.log("")
 console.log("------------------------------------")
 console.log("")
 console.log(result)
 trierCars(result)
 console.log(result)
