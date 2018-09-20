//let nameString = 'Name: Ann Calvert';
//let splitString = nameString.split(' ');
//console.log(splitString[0], splitString[1].toUpperCase(), splitString[2].toUpperCase());

function displayPosition (descriptor, info) {
    console.log(descriptor + ': ' + info);
}

let name = {
    descriptor: 'Name',
    information: 'Ann Calvert',
}

let field = {
    descriptor: 'Field',
    information: 'Developer',
}

let description = {
    descriptor: 'Description',
    information: 'I am a human being looking for a job.'
}

//Still need to capitalize name
displayPosition(name.descriptor, name.information);
displayPosition(field.descriptor, field.information);
displayPosition(description.descriptor, description.information);
console.log("\n");

console.log('My Interests:');
console.log('* Cooking');
console.log('* Insects');
console.log('* Dinosaurs');
console.log('* Horror Folk Music');
console.log("\n");

console.log('Previous Experience:');
console.log('* Laboratory Technician');
console.log('* Sudoku Puzzles');
console.log('* Excessive Computer Usage');
console.log("\n");

console.log('My Skills:');

let skill1 = {
    skill: 'Typing',
    cool: false,
}

let skill2 = {
    skill: 'Serial Killer Knowledge',
    cool: true,
}

let skill3 = {
    skill: 'Problem Solving',
    cool: true,
}

let skill4 = {
    skill: 'Salsa Making',
    cool: false,
}

let skill5 = {
    skill: 'Breathing',
    cool: false,
}

let skill6 = {
    skill: '66.6% Success Rate at Keeping Beetles Alive',
    cool: true,
}


//let skills = [{skill:'Typing', cool:false}, {skill:'Serial Killer Knowledge', cool:true}, {skill:'Problem Solving', cool:false}, {skill:'Salsa Making', cool:true}, {skill:'Breathing', cool:false}, {skill:'66.6% Success Rate at Keeping Beetles Alive', cool:true}];

//skills.map(displaySkill).forEach(console.log);

function displaySkill (skill, cool) {
    if (cool == true) {return '* BAM: ' + skill} else {return '* ' + skill};
}


const return1 = displaySkill(skill1.skill, skill1.cool);
console.log(return1);

const return2 = displaySkill(skill2.skill, skill2.cool);
console.log(return2);

const return3 = displaySkill(skill3.skill, skill3.cool);
console.log(return3);

const return4 = displaySkill(skill4.skill, skill4.cool);
console.log(return4);

const return5 = displaySkill(skill5.skill, skill5.cool);
console.log(return5);

const return6 = displaySkill(skill6.skill, skill6.cool);
console.log(return6);