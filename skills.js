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