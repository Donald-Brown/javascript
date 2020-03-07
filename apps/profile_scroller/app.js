// Imgine api data
const data = [
    {
        name: 'Mary Jane',
        age: 40,
        gender: 'female',
        lookingFor: 'male',
        location: 'Louisville KY',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Jodi Smith',
        age: 35,
        gender: 'female',
        lookingFor: 'male',
        location: 'Louisville KY',
        image: 'https://randomuser.me/api/portraits/women/56.jpg'
    },
    {
        name: 'Angel Hope',
        age: 43,
        gender: 'female',
        lookingFor: 'male',
        location: 'Louisville KY',
        image: 'https://randomuser.me/api/portraits/women/28.jpg'
    }
];

// Profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} : { done: true }
        }
    };
}

const profiles = profileIterator(data);

// call first profile
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    }else{
        // no more profiles
        window.location.reload();
    }
    
}