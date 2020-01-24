function toggle_visibility(id) {
    const e = document.getElementById(id);

    if(e.style.display === 'block' || e.style.display === '') {
        console.log(e.style.display);
        e.style.display = 'none';
    } else {
        console.log(e.style.display);
        e.style.display = 'block';
    }


}