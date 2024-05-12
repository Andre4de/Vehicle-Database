import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient('https://ugspricsaeopciltqhlf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnc3ByaWNzYWVvcGNpbHRxaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNTYyMjAsImV4cCI6MjAyNzgzMjIyMH0.tXrrGVvxsy5yKal2ROjrDUNWqHbabRehpfI35-MF1vQ')
 

if(document.getElementById('input')){
document.getElementById('input').addEventListener('submit', async function (event){
 event.preventDefault();
 let results = document.getElementById('results');
 let name = document.getElementById('name').value;
 let license = document.getElementById('license').value;
 let message = document.getElementById('message');
 console.log('You typed: ' + name + license);

 if(name == '' && license == ''){
     message.innerHTML = '';
     message.innerHTML = 'Error';
     return
 }

 if(license && name){
     message.innerHTML = '';
     message.innerHTML = 'Error';
     return
 }



 try{

 const query = supabase.from('People').select('*')


 if(license){
     query.eq('LicenseNumber', license); 
     
 }
 if(name){
     query.ilike('Name', `%${name}%`)

 }

 const { data, error } = await query

 results.innerHTML = '';
 
 
 if(data[0] === undefined){
     let p = document.createElement('p');
     p.textContent = 'No one was found with this name.';
     results.appendChild(p);
     let q = document.createElement('q')
     message.innerHTML = '';
     message.innerHTML = 'No result found.'
     return;

 }

 for(let i in data){
     let q = document.createElement('div')
     results.appendChild(q)
     q.classList.add("sqr");
     for(let key in data[i]){
     let p = document.createElement('p');
     p.textContent = `${key}:${data[i][key]}`
     q.appendChild(p);
         }   

 }

 let p = document.createElement('p');
 message.innerHTML = '';
 message.innerHTML = 'Search successful'
 
 }
 catch (error){
     console.log(error);
     
 }

 
 
})
}


if(document.getElementById('vehicleSrchForm')){
document.getElementById('vehicleSrchForm').addEventListener('submit', async function (event){
    event.preventDefault();
    let results = document.getElementById('results');
    let license = document.getElementById('rego').value;
    let message = document.getElementById('message')
    
    console.log('You typed: ' + license);
       
    try{
       
        if(license == ''){
            message.innerHTML = '';
            message.innerHTML = 'Error';
            return
        }
    
        const query = supabase.from('People').select('*')
        const query2 = supabase.from('Vehicles').select(`Make, Model, Colour , VehicleID, People ( Name, LicenseNumber )`).eq('VehicleID', license)
        // 
        const { data, error } = await query2
        
    
        console.log(data[0]);
        
        results.innerHTML = '';
    
        if(data[0] == undefined){
            let p = document.createElement('p');
            p.textContent = "No one was found with this name.";
            results.appendChild(p);
            message.innerHTML = '';
            message.innerHTML = 'Error';
            return;
    
        }
    
        for(let i in data){
    
            let q = document.createElement('div')
            results.appendChild(q);
            q.classList.add("sqr");
    
                for(let key in data[i]){
    
                    if(typeof data[i][key] == 'object'){
    
                        
    
                            for(let nestedkey in data[i][key]){
                                let s = document.createElement('p')
                                s.textContent = `${nestedkey}:${data[i][key][nestedkey]}`
                                q.appendChild(s)
                            }
                        
    
                    }else{
    
                    let p = document.createElement('p')
                    p.textContent = `${key}:${data[i][key]}`
                    q.appendChild(p);
                    }
                }
            
        }
    
    
           
          
    
        message.innerHTML = '';
        message.innerHTML = 'Search successful';
        if(error)
        console.log(error);
        }
        catch (error){
            console.log(error);
        }
        
        
            
            
        });

    }


    
   
if(document.getElementById('addVehicle')){
document.getElementById("addVehicle").addEventListener("submit", async function (event){
    event.preventDefault();
    let results = document.getElementById("results");
    const message = document.getElementById("message");
    let regoI = document.getElementById("rego").value
    let makeI= document.getElementById("make").value
    let modelI = document.getElementById("model").value
    let colourI = document.getElementById("colour").value
    let owneridI = document.getElementById("owner").value




    if(regoI === ''|| makeI === '' ||modelI === '' || colourI === '' || owneridI === ''){
    
    message.innerHTML = "Error";
    return;
}


    try{

    const query = supabase.from('People').select('*').eq('Name', owneridI)

    let { data: checkPpl, error : vehErr } = await query;

    

    if(checkPpl.length === 0){
    console.log("No one there")
    
    
    document.getElementById("form2").style.display = "block";

    document.getElementById("form2").addEventListener("submit", async function (event){
    event.preventDefault();
        
    let personidI = document.getElementById("personid").value
    let nameI = document.getElementById("name").value
    let addressI = document.getElementById("address").value
    let dobI = document.getElementById("dob").value
    let licenseI = document.getElementById("license").value
    let expireI = document.getElementById("expire").value

    if(personidI === ''|| nameI === '' ||addressI === '' || dobI === '' || licenseI === '' || expireI === ''){
    
        message.innerHTML = "Error";
        return;
    }

    


    const query3 = supabase.from('People').insert({ PersonID: personidI, Name: nameI, Address: addressI, DOB: dobI, LicenseNumber: licenseI, ExpiryDate: expireI})
    const query6 = supabase.from('People').select('PersonID').eq('PersonID', personidI)

    const { data : checkPerson, error : checkPersonError } = await query6

    if(checkPerson.length != 0){
        console.log("A person with that id already exists.")
        message.innerHTML = "Error";
        return
    }

    const { error: pplIn} = await query3

    

    owneridI = personidI

    const query4 = supabase.from('Vehicles').insert({ VehicleID: regoI, Make: makeI, Model: modelI, Colour: colourI, OwnerID: owneridI})

    const { error: vehIn} = await query4
    
    
    message.innerHTML = "Vehicle added successfully";

    document.getElementById("form2").style.display = "none";
    return
    });

    }else{
    
        console.log("A person with that id already exists.")
        const query5 = supabase.from('People').select('PersonID').eq('Name', owneridI)

        

        const {data, error} = await query5
        if(error)
            throw new Error(error)


        console.log(data[0].PersonID)
        
        const query2 = supabase.from('Vehicles').insert({ VehicleID: regoI, Make: makeI, Model: modelI, Colour: colourI, OwnerID: data[0].PersonID})
        
        const {error : error2} = await query2



        message.innerHTML = "Vehicle added successfully";


        return

        

        
    }


}catch(error){
    console.log(error)
}  




});
}
