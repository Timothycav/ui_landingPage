function switchVisible() {
    if (document.getElementById('contact_info')) {

        if (document.getElementById('contact_info').style.display == 'none') {
            document.getElementById('contact_info').style.display = 'block';
           /* document.getElementById('Div2').style.display = 'none';*/
        }
        else {
            document.getElementById('contact_info').style.display = 'none';
           /* document.getElementById('Div2').style.display = 'block';*/
        }
    }
}
function switchVisible2() {
    if (document.getElementById('contact_info')) {

        if (document.getElementById('contact_info').style.display == 'block') {
            document.getElementById('contact_info').style.display = 'none';
           /* document.getElementById('Div2').style.display = 'none';*/
        }
        else {
            document.getElementById('contact_info').style.display = 'none';
           /* document.getElementById('Div2').style.display = 'block';*/
        }
    }
}