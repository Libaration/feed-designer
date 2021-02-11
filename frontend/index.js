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
        // devStuff()
    // //for styling

    const igHandle = document.getElementById('ig-handle')
    const userForm = document.querySelector('form.submit-user-form')
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
})