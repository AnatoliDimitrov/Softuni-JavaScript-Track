function solve() {

    let modules = {};
    let formEl = document.querySelector('.action form');
    let modulesEl = document.querySelector('.modules');
    modulesEl.addEventListener('click', (e) => {
        if (e.target.textContent === 'Del') {
            let liEl = e.target.parentElement;
            let ulEl = liEl.parentElement;
            let divEl = ulEl.parentElement;
            let h3El = liEl.parentElement.previousSibling;
            let msAttr = Number(liEl.getAttribute('data-ms'));
            let [moduleName] = h3El.textContent.split('-').filter(x => x);
            modules[moduleName.toLowerCase()]['map'].delete(msAttr);
            let index = modules[moduleName.toLowerCase()]['arrDates'].indexOf(msAttr);
            modules[moduleName.toLowerCase()]['arrDates'].splice(index, 1);
            liEl.remove();

            if (ulEl !== undefined) {

                let childrenElements = Array.from(ulEl.children);
                if (childrenElements.length === 0) {
                    divEl.remove();
                    delete modules[moduleName.toLowerCase()];
                }
            }
        }
    })

    let formBtnEl = formEl.querySelector('button');
    formBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        let [lectureName, lectureDate] = Array.from(formEl.querySelectorAll('input'));
        let date = Date.parse(lectureDate.value);
        let strDate;
        if (!isNaN(date)) {
            //2020-09-28T18:00
            strDate = lectureDate.value;
            strDate = strDate.replace(/-/g, '/');
            strDate = strDate.replace('T', ' - ');
        }
        let readyStr = `${lectureName.value} - ${strDate}`;

        let selectEl = formEl.querySelector('select');

        if ((selectEl.value !== '' && selectEl.value !== 'Select module') && !isNaN(date) && lectureName.value !== '') {
            if (!modules.hasOwnProperty(selectEl.value.toLowerCase())) {
                modules[selectEl.value.toLowerCase()] = {
                    map: new Map(),
                    arrDates: [],
                }
            }
            modules[selectEl.value.toLowerCase()]['map'].set(date, readyStr);
            modules[selectEl.value.toLowerCase()]['arrDates'].push(date);
            modules[selectEl.value.toLowerCase()]['arrDates'].sort((a, b) => a - b);
        }
        if (modulesEl !== undefined) {
            Array.from(modulesEl.children).map(e => e.remove());
        }

        for (const key in modules) {
            let divModule = document.createElement('div');
            divModule.className = 'module';

            let h3 = document.createElement('h3');
            h3.textContent = `${key.toUpperCase()}-MODULE`;
            let ul = document.createElement('ul');
            for (const ms of modules[key]['arrDates']) {
                let li = document.createElement('li');
                li.className = 'flex';
                let h4 = document.createElement('h4');
                h4.textContent = modules[key]['map'].get(ms);
                let btnDel = document.createElement('button');
                btnDel.className = 'red';
                btnDel.textContent = 'Del';

                li.appendChild(h4);
                li.appendChild(btnDel);
                li.setAttribute('data-ms', ms);
                ul.appendChild(li);
            }

            divModule.appendChild(h3);
            divModule.appendChild(ul);

            modulesEl.appendChild(divModule);
        }
    })
};