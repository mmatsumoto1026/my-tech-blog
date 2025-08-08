const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-mode');
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.querySelector('#history-list ul');
    const articles = document.querySelectorAll('main article');

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent;
        const id = article.id;

        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = title;
        link.href = `#${id}`;

        listItem.appendChild(link);
        historyList.appendChild(listItem);

        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});