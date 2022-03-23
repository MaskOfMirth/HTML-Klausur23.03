function change(td) {

    if (td.classList.contains('td1')) {

        td.innerHTML = "Heimarbeit";
        td.classList.remove('td1');
        td.classList.add('td3');
    } else if (td.classList.contains('td3')) {

        td.innerHTML = "Urlaub";
        td.classList.remove('td3');
        td.classList.add('td2');

    } else if (td.classList.contains('td2')) {

        td.innerHTML = "Lehre/Büro";
        td.classList.remove('td2');
        td.classList.add('td1');
    }
}


