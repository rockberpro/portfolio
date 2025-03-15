function getProjects() {
    const urlGithub = 'https://api.github.com/users/rockberpro/repos';
    var loadingElement = document.getElementById('loading');

    fetch(urlGithub, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadingElement.style.display = 'none';
            showProjects(data);
        })
        .catch((e) => {
            console.log(e);
        });

}

function showProjects(data) {
    let listElement = document.getElementById('project-list');

    data.forEach(element => {
        let a = document.createElement('a');

        a.href = element.html_url;
        a.target = '_blank';
        a.title = element.description;

        let linkText = document.createTextNode(element.name);
        a.appendChild(linkText);
        listElement.appendChild(a);
    });
}

getProjects();