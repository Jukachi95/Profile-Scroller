const data = [
    {
        name: "Amy Scott",
        age: 23,
        location: "Birmingham, UK",
        language: "JavaScript",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },


    {
        name: "Jamie Nevin",
        age: 27,
        location: "Manchester, UK",
        language: "Python",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },

    {
        name: "Michael Warren",
        age: 24,
        location: "London, UK",
        language: "PHP",
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },

    {
        name: "Gemma Ward",
        age: 20,
        location: "Sheffield, UK",
        language: "Python",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },

    {
        name: "Antonio Michail",
        age: 35,
        location: "London, UK",
        language: "Java",
        image: "https://randomuser.me/api/portraits/men/51.jpg"
    }



]

const profiles = profileIterator(data);


document.querySelector('#next').addEventListener('click', displayData)


function displayData(){

    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">
        Name: ${currentProfile.name}
        </li>
        <li class="list-group-item">
        Age: ${currentProfile.age}
        </li>
        <li class="list-group-item">
        location: ${currentProfile.location}
        </li>
        <li class="list-group-item">
        language: ${currentProfile.language}
        </li>
    </ul>
    
    `

    document.getElementById('imageDisplay').innerHTML =
    `
    <img src = "${currentProfile.image}"> 
    `
    } else{
        window.location.reload()
    }
}



function profileIterator(profiles){
    let nextNumber = 0;

    return{
        next: function(){
            return nextNumber < profiles.length ? {value:profiles[nextNumber++],done:false}:
            {done:true} 
        }
    }
}