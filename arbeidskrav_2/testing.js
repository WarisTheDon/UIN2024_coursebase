document.addEventListener('DOMContentLoaded', () => {
    const kategoriKnapper = document.getElementById('category-buttons');
    const artikkel = document.getElementById('resources2');
    let aktivKategoriKnappe = null;

    function genererKategoriHTML(kategori) {
        const kilderHTML = kategori.sources.map(kilde => `
            <li><a href="${kilde.url}" target="_blank">${kilde.title}</a></li>
        `).join('');

        return `
            <div class="kategori" id="kategori-${kategori.category.toLowerCase().replace(/\s/g, '-')}">
                <h1>${kategori.category}</h1>
                <p>${kategori.text}</p>
                <ul>${kilderHTML}</ul>
            </div>
        `;
    }

    function oppdaterArtikkelInnhold(kategoriNavn) {
        if (aktivKategoriKnappe) {
            aktivKategoriKnappe.classList.remove('aktiv-kategori');
        }

        const kategoriKnappe = document.querySelector(`button[data-kategori="${kategoriNavn}"]`);
        kategoriKnappe.classList.add('aktiv-kategori');
        aktivKategoriKnappe = kategoriKnappe;

        const kategori = resources.find(res => res.category === kategoriNavn);
        artikkel.innerHTML = genererKategoriHTML(kategori);
    }

    resources.forEach(resource => {
        const kategoriKnappe = document.createElement('button');
        kategoriKnappe.textContent = resource.category;
        const categoryClass = resource.category.toLowerCase().replace(/\s/g, '-');
        kategoriKnappe.classList.add('kategori-knapp', categoryClass);
        kategoriKnappe.setAttribute('data-kategori', resource.category);
        kategoriKnappe.addEventListener('click', () => {
            oppdaterArtikkelInnhold(resource.category);
        });
        kategoriKnapper.appendChild(kategoriKnappe);
    });

    if (resources.length > 0) {
        oppdaterArtikkelInnhold(resources[0].category);
    }
});
