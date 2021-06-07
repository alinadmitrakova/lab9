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