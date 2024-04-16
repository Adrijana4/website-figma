let developer = {
    name: 'IME I PREZIME',
    jobTitle: 'Frontend Developer & Graphic Designer',
    shortDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum ullam molestias autem deleniti iure earum!',
    fullDescription:'Lorem ipsums dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident aspernatur unde, suscipit illum, velit similique animi iste corporis repellendus veritatis minus voluptas. Sunt, eligendi. Praesentium explicabo facere quo ad earum.',
    skills: [
        {
            name: 'HTML - 5',
            value:80,
        },
        {
            name: 'CSS - 3',
            value:75,
        },
        {
            name: 'Bootstrap',
            value:60,
        },
        {
            name: 'Javascript',
            value:50,
        },
        {
            name: 'Adobe Photoshop',
            value:75,
        },
        {
            name: 'Adobe Illustrator',
            value:60,
        },
    ],
};

let serviceArray = [
    {
        serviceTitle: 'Web Development',
        serviceDescription: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imageSrc:'laptop-code.svg'
    },
    {
        serviceTitle: 'Apps Development',
        serviceDescription: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imageSrc:'mobile-alt.svg'
    },
    {
        serviceTitle: 'Digital Marketing',
        serviceDescription: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imageSrc:'chart-bar.svg'
    },
];


let contactsArray = [];



let nameAndSurname = document.getElementById('name-and-surname');
nameAndSurname.innerHTML=developer.name

let shortDescription = document.getElementById('short-description');
shortDescription.innerHTML=developer.shortDescription

let title = document.getElementById('title-job');
title.innerHTML=developer.jobTitle

let p1 = document.getElementById('paragraph-one');
p1.innerHTML=developer.fullDescription


let p2 = document.getElementById('paragraph-two');
p2.innerHTML=developer.shortDescription

let newSection = document.createElement('div');
newSection.id = 'new-section';

for (let i = 0; i < serviceArray.length; i++) {
    let card = document.createElement('div');
    card.className = 'card';

    let pictures = document.createElement('img');
    pictures.src = serviceArray[i].imageSrc;
    pictures.alt = serviceArray[i].serviceTitle;
    card.appendChild(pictures);

    let subtitle = document.createElement('h2');
    subtitle.innerHTML = serviceArray[i].serviceTitle;
    card.appendChild(subtitle);

    let printing = document.createElement('p');
    printing.innerHTML = serviceArray[i].serviceDescription;
    card.appendChild(printing);  

    newSection.appendChild(card);
}

document.body.appendChild(newSection);
let sectionThree = document.getElementById('section-three');


sectionThree.appendChild(newSection);



let leftNameDiv = document.getElementById('left-name');
let rightValueDiv = document.getElementById('right-value');

for (let i = 0; i < developer.skills.length; i++) {
    let skill = developer.skills[i];

    leftNameDiv.innerHTML += '<p>' + skill.name + '</p>';

    rightValueDiv.innerHTML += '<p>' + skill.value + '%</p>';
}


function displayFormData() {
    var fullName = document.getElementById("fullName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var outputText = `Full Name: ${fullName}\nEmail Address: ${emailAddress}\nPhone Number: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`;

    console.log(outputText);
}

