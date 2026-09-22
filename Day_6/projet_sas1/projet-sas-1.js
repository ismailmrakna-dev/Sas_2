const prompt=require("prompt-sync")();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
// menu principale du programme et la partie d'exucution 


// Declaration Array Tickets
const tickets=[]
const ticketAnulle = [];
let id_t=0
let seat = 1
let arret = true;
do{ 
    console.log("=============================================")
    console.log("---------    RAILWAY MANAGER    -------------")
    console.log("=============================================")
    console.log("  1. Afficher les trajets ")
    console.log("  2. Acheter un tickets ")
    console.log("  3. Afficher les tickets ")
    console.log("  4. Annuler un ticket ")
    console.log("  5. Recherche un ticket ")
    console.log("  6. Filter les trajets ")
    console.log("  7. Trier les trajets ")
    console.log("  0. Quitter ")
    
    let choix = parseInt(prompt(" Votre Choix: "))
    switch(choix) {
        case 0:
           arret=false; break;
        case 1:
            afficheTrajets(trips)
            break;
        
        case 2:{
            let nom= prompt("Nom du Passager: ") 
            let id=parseInt(prompt("Identifiant du Trajet: "));

            let check=rechercheTrajet(trips,id)
            if(check === 1){
                let ajoute=true
                if(trips[id-1].availableSeats > 0){
                    if(ticketAnulle.length > 0){

                        for(const ticket of ticketAnulle ){
                            if(ticket.tripid === id){
                                let index=searchForTicket(ticketAnulle, ticket.idT)
                                if(index !== -1){
                                    ticketAnulle[index].passengerName=nom
                                    tickets.push(ticketAnulle[index])
                                    ticketAnulle.splice(index,index)
                                    trips[id-1].availableSeats -= 1
                                    afficheTicket(trips, tickets[tickets.length-1])
                                    ajoute=false
                                    break;
                                }
                            }
                        }
                        
                    }
                if(ajoute){
                    if(trips[id-1].availableSeats === 50){
                        seat=1;
                    }
                    else if(trips[id-1].availableSeats <50){
                        seat = searchAvailbleplace(tickets,id)
                    }
                    id_t = id_t + 1;
                    tickets.push(creerTicket(trips[id-1],nom ,id_t, seat))
                    trips[id-1].availableSeats -= 1
                    console.log("  Ticket Acheté Avec Succès  ")

                    afficheTicket(trips, tickets[tickets.length-1])
                }
            }
            else console.log("  Train Complet  ")

            }
            else console.log("  Trajet Introuvable  ")
            break;
        }
        case 3:
            {  
              console.log(" ===   Tickets Enregistee ====") 
              console.log("   ") 
              for (const ticket of tickets){
                afficheTicket(trips, ticket)
                console.log("    ")
            }
            break;}

        
        case 4: {
                let idticket = parseInt(prompt("Identifiant du Ticket"))
                let index=searchForTicket(tickets,idticket)
                if(index !== -1){
                 trips[(tickets[index].tripid) -  1].availableSeats += 1   
                 ticketAnulle.push(annulerTicket(tickets,index))
                 tickets.splice(index,index)
                 console.log(" Ticket annulé avec succès ")
                }
                else console.log(" Aucun Ticket Enregistre ")
                break;}
        
        case 5:
                break;
        case 6: 
                break;   
        case 7: 
             break;
        default : console.log("!!!  Please, Your Choice Should be in Menu !!! ")
    }   

}while(arret);

// Fonction Afficher les trajets
function afficheTrajets(arr){
    console.log("=== TRAJETS DISPONIBLES ===")
    for( const trajet of arr){
       console.log("    ") 
       console.log("id: " + trajet.id +"  " + trajet.departure +" --> "+trajet.destination)
       console.log("Depart: "+ trajet.departureTime)
       console.log("Arrivée: "+ trajet.arrivalTime)
       console.log("Prix: "+ trajet.price+"DH")
       console.log("Places Disponibles: " +trajet.availableSeats)
       console.log("    ")
    }
}

// Recherche un trajet d'apres id
function rechercheTrajet (arr , idTrajet) {
    for (const trajet of arr){
        if(trajet.id === idTrajet){
            return 1     
        }    
    }
    return -1
}
function creerTicket(obj,nom, id_T,seat){
    const ticket = {}
    ticket.idT = id_T
    ticket.passengerName= nom
    ticket.tripid= obj.id
    ticket.seatNumber = seat
    ticket.price= obj.price
    return ticket
}
function afficheTicket (arr, ticket){
    console.log("  ")
    console.log("Ticket #"+ ticket.idT )
    console.log("Passager: "+ticket.passengerName)
    console.log("trajet: "+ arr[ticket.tripid -1].departure +" --> "+arr[ticket.tripid -1].destination)
    console.log("Depart: "+ arr[ticket.tripid -1].departureTime)
    console.log("Arrivee: "+ arr[ticket.tripid -1].arrivalTime)
    console.log("Place: "+ticket.seatNumber)
    console.log("Prix: "+ticket.price+"DH")
}
function searchAvailbleplace(arr, id_t){
    let seat=1
    for(const ticket of arr){
        if(ticket.tripid === id_t){
            if ( ticket.seatNumber >= seat)
                seat = ticket.seatNumber + 1
        }
    }
    return seat
}
function annulerTicket(arr,index) {
    return arr[index]
}
function searchForTicket (arr , idticket){
    let j=-1
     if(arr.length > 0){
        for (const ticket of arr){
            j++
            if(ticket.idT === idticket)
                return j
        }
        return -1
     }
     else return -1
}


