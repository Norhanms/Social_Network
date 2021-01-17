const test = document.getElementById("test");
const posts2 = document.getElementById("posts2");
const spinner = document.getElementById("spinner-box");
$.ajax({
    type: 'GET',
    url: '/posts-json/',
    success: function (response) {
        console.log(response);
        //convert from json to javascript objects
        const data = JSON.parse(response.data);
        setTimeout(() => {
            data.forEach(el => {
                posts2.innerHTML += `<p>${el.fields.body}</p>`
            });
            spinner.classList.add('not-visible')
        }, 2000)


    },
    error: function (error) {
        console.log("error")
        console.log(error)
    }

})