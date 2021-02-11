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
    const sortable = new Draggable.Sortable(document.querySelectorAll('#photoContainer'), {
        draggable: '.container'
      });
    const igHandle = document.getElementById('ig-handle')
    const userForm = document.querySelector('form.submit-user-form')
    const addPhotoButton = document.querySelector('.add-button')
    const addPhotoForm = document.querySelector('form.addpopupform')
    userForm.addEventListener("submit", (e) => {
        anime({
            targets: '.add-button',
            translateX: 340,
            duration: 1000,
            easing: 'easeOutBack',
          });   
          anime({
            targets: '.svg',
            opacity: 1,
            translateX: -1200,
            duration: 900,
            easing: 'easeOutBack',
          });    
          anime({
            targets: '.searchcenter',
            translateX: -650,
            duration: 1000,
            easing: 'easeOutBack',
          }); 

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
    addPhotoButton.addEventListener("click", e => {
        e.preventDefault()
        anime({
            targets: '.addpopup',
            opacity: 0.8,
            translateY: -255,
            height: 230,
            duration: 500,
            easing: 'easeInQuad',
          });    
    })
    addPhotoForm.addEventListener('submit', e=> {
        const imgUrl = document.getElementById('addpopuptext').value
        e.preventDefault()
        anime({
            targets: '.addpopup',
            opacity: 0.0,
            translateY: -100,
            height: 0,
            duration: 500,
            easing: 'easeInQuad',
        })
        User.createOrFindUser(igHandle.value.replace('@',"")).then(userObject => {
            userObject.addPhoto(imgUrl)
        })
    })
    const textInput = document.getElementById('ig-handle')
    textInput.addEventListener('click',e=>{
        anime({
            targets: '.submit-button',
            translateX: 1040,
            duration: 1000,
            easing: 'easeInOutElastic',
        })
    })
})
