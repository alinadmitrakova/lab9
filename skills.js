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
    skills.forEach(skill => {
        const dt = document.createElement('dt');
        dt.textContent = skill.skillName;
        dt.classList.add(skill.css);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = skill.skillLevel + '%';
        div.textContent = skill.skillLevel;
        
        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    });
    document.querySelector('.skills').append(dl);
}

addSkills();
