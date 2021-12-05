window.onscroll = () => {

    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add('active');
    } else {
        document.querySelector("#scroll-top").classList.remove('active');
    }
}

function validateform() {
    let name = document.form.name.value;
    let phone = document.form.phone.value;

    if (name == null || name == "") {
        alert("Name Can't be Blank")
        return false;
    } else if (phone.length < 10 || phone.length > 10) {
        alert("Enter the valid Phone number")
        return false
    }
}