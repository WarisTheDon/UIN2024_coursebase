document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const categoryButtons = document.getElementById('category-buttons');
    const article = document.getElementById('resources2');

    // Funksjon for å generere HTML for en kategori
    function generateCategoryHTML(category) {
        const sourcesHTML = category.sources.map(source => `
            <li><a href="${source.url}" target="_blank">${source.title}</a></li>
        `).join('');

        // Opprett en unik ID basert på kategorinavnet
        const categoryId = `category-${category.category.toLowerCase().replace(/\s/g, '-')}`;

        return `
            <div class="category" id="${categoryId}">
                <h1>${category.category}</h1>
                <p>${category.text}</p>
                <ul>${sourcesHTML}</ul>
            </div>
        `;
    }

    // Funksjon for å oppdatere artikkelinnholdet
    function updateArticleContent(categoryName) {
        const category = resources.find(res => res.category === categoryName);
        article.innerHTML = generateCategoryHTML(category);
    }

    // Generer kategori-lenker og legg til eventlyttere for å oppdatere innholdet
    resources.forEach(resource => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = resource.category;
        categoryButton.addEventListener('click', () => {
            updateArticleContent(resource.category);
        });
        categoryButtons.appendChild(categoryButton);
    });

    if (resources.length > 0) {
        updateArticleContent(resources[0].category);
    }
});
