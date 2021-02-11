const devTest = async () => {
    const response = await fetch(`http://localhost:3000/users/2}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const object = await response.json()
    const photos = object.photos.map(photo => {
        const {id, caption, url} = photo
        return new Photo(id, caption, url)
    })

    return photos;
}

const devStuff = () => {

    User.createOrFindUser('hatecristian').then(userObject => {
        userObject.displayUserInfo()
    })
    devTest().then(devPhotos=>{
        for(devPhoto of devPhotos){
            devPhoto.displayPhoto()
        }
    })
    const searchBar = document.querySelector("div.searchcenter")
        if(searchBar){
            searchBar.classList.remove('searchcenter')
            searchBar.classList.add('search')
        }
}



document.addEventListener("DOMContentLoaded", () => {
    // //dev function
        devStuff()
    // //for styling

    const igHandle = document.getElementById('ig-handle')
    const userForm = document.querySelector('form.submit-user-form')
    const photoForm = document.getElementById('submit-pic')
    userForm.addEventListener("submit", (e) => {
        const searchBar = document.querySelector("div.searchcenter")
        if(searchBar){
            searchBar.classList.remove('searchcenter')
            searchBar.classList.add('search')
        }
        e.preventDefault()
        User.createOrFindUser(igHandle.value.replace('@',"")).then(userObject => {
            userObject.displayUserInfo()
            userObject.grabPhotos().then(photos => {
                Photo.clearPhotos()
                for(photo of photos){
                    photo.displayPhoto()
                }
            })
        })  
    })
 
    photoForm.onchange = function(e) {
        console.log(e.target.value)
        console.log(photoForm.files[0])
        document.getElementById("add-photo-form").submit();
    };
    
})
