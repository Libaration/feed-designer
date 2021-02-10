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



document.addEventListener("DOMContentLoaded", () => {
    //dev function
        devTest().then(devPhotos=>{
            for(devPhoto of devPhotos){
                devPhoto.displayPhoto()
            }
        })
        
    //for styling

    const igHandle = document.getElementById('ig-handle')
    const userForm = document.querySelector('form.submit-user-form')
    userForm.addEventListener("submit", (e) => {
        e.preventDefault()
        User.createOrFindUser(igHandle.value).then(userObject => {
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