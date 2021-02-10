document.addEventListener("DOMContentLoaded", () => {
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