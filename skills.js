<<<<<<< HEAD
const skills = [
    { css: "skill-html", skillName: "HTML", skillLevel: 90 },
    { css: "skill-css", skillName: "CSS", skillLevel: 20 },
    { css: "skill-js", skillName: "Java Script", skillLevel: 40 },
    { css: "skill-j", skillName: "Java", skillLevel: 70 },
    { css: "skill-spring", skillName: "Spring", skillLevel: 60 },
    { css: "skill-sql", skillName: "SQL", skillLevel: 75 }
];


function addSkills() {
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(x => {
        const dt = document.createElement('dt');
        dt.textContent = x.skillName;
        dt.classList.add(x.css);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = x.skillLevel + '%';
        div.textContent = x.skillLevel;
        
        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    });
    document.getElementById('skills').append(dl);
}

addSkills();
=======
const obj = [
    { css: "skill-html", skill_name: "HTML", lvl: 90 },
    { css: "skill-css", skill_name: "CSS",  lvl: 20 },
    { css: "skill-js", skill_name: "Java Script", lvl: 40 },
    { css: "skill-j", skill_name: "Java",  lvl: 70 },
    { css: "skill-spring", skill_name: "Spring",  lvl: 60 },
    { css: "skill-sql", skill_name: "SQL",  lvl: 75 }
];

function add() {
    let dl = document.createElement('dl');
    dl.setAttribute('class', 'skills-list');
    for (let i = 0; i < obj.length; i++) {
        let dt = document.createElement('dt');
        dt.textContent = obj[i].skill_name;
        dt.setAttribute('class', obj[i].css);
        let dd = document.createElement('dd');
        dd.setAttribute('class', 'level');
        let div = document.createElement('div');
        div.setAttribute('style', `width: ${obj[i].lvl}%;`);
        div.textContent = obj[i].lvl;
        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    }
    document.body.append(dl);
}

add();
>>>>>>> 830ec49d4fa32f49d1ec26c7493fbae729dad682
