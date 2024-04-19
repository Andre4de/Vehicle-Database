// After install the supabase-js module
import { createClient } from
   'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// Create a single supabase client for interacting with your database





const supabase = createClient('https://ugspricsaeopciltqhlf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnc3ByaWNzYWVvcGNpbHRxaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNTYyMjAsImV4cCI6MjAyNzgzMjIyMH0.tXrrGVvxsy5yKal2ROjrDUNWqHbabRehpfI35-MF1vQ')
    





document.getElementById('pplNameForm').addEventListener('submit', async function (event){
    event.preventDefault();
    let divarea = document.getElementById('searchResults');
    let srchInput = document.getElementById('pplSearch').value;
    console.log('You typed: ' + srchInput);
 
    try{
   
    const { data, error } = await supabase
    .from('People')
    .select('*')
    .eq('Name', srchInput)
    console.log(data[0]);

    divarea.innerHTML = '';
    
    if(data[0] == undefined){
        let p = document.createElement('p');
        p.textContent = "No one was found with this name.";
        divarea.appendChild(p);
        return;

    }

    for(let key in data[0]){
        let p = document.createElement('p');
        p.textContent = `${key}:${data[0][key]}`
        divarea.appendChild(p);

    }

    }
    catch (error){
        console.log(error);
    }

    
    
})

document.getElementById('pplLicenseForm').addEventListener('submit', async function (event){
    event.preventDefault();
    let divarea = document.getElementById('searchResults');
    let srchInput = document.getElementById('pplLicSearch').value;
    
   
    console.log('You typed: ' + srchInput);
 
    
   try{
    const { data, error } = await supabase
    .from('People')
    .select('*')
    .eq('LicenseNumber', srchInput)
    console.log(data[0]);

    divarea.innerHTML = '';


    if(data[0] == undefined){
        let p = document.createElement('p');
        p.textContent = "No one was found with this license plate.";
        divarea.appendChild(p);
        return;

    }

    for(let key in data[0])
    {
    let p = document.createElement('p');
    p.textContent = `${key}: ${data[0][key]}`
    divarea.appendChild(p);
    }

   }
  
   catch (error){
    console.log(error);
   }
   });


//vehicle
document.getElementById('vehicleSrchForm').addEventListener('submit', async function (event){
event.preventDefault();
let divarea2 = document.getElementById('vehicleMain');
let srchInput = document.getElementById('vehSearch').value;
console.log('You typed: ' + srchInput);
   
try{
   
    const { data, error } = await supabase
    .from('Vehicle')
    .select('*')
    .eq('Make', srchInput)
    console.log(data[0]);
    
    divarea2.innerHTML = '';

    if(data[0] == undefined){
        let p = document.createElement('p');
        p.textContent = "No one was found with this name.";
        divarea2.appendChild(p);
        return;

    }

    for(let key in data[0]){
        let p = document.createElement('p');
        p.textContent = `${key}:${data[0][key]}`
        divarea2.appendChild(p);

    }

    }
    catch (error){
        console.log(error);
    }
    
    
        
        
    });


    
    














