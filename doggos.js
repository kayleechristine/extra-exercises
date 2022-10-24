let btn = document.getElementById('btnClick');
let image = document.getElementById('dog-pic');

btn.addEventListener('click', function() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src = result.url
    })
        .catch(err => console.log(err));
})