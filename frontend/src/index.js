const apiService = new ApiService();

const init = () => {
    bindEventListeners();
}

const bindEventListeners = () => {
    const sortable = new Draggable.Sortable(document.querySelectorAll('#photoContainer'), {
        draggable: '.container',
        delay: 100
      });
    const userForm = document.querySelector('form.submit-user-form');
    const addPhotoButton = document.querySelector('.add-button');
    const igHandle = document.getElementById('ig-handle');
    userForm.addEventListener("submit", loadUser);
    igHandle.addEventListener('click', Animations.revealGo)
    addPhotoButton.addEventListener("click", Animations.photoSubmitReveal)
    
}

const loadUser = async (e) => {
    e.preventDefault();
    const igHandle = document.getElementById('ig-handle');
    let user = await apiService.createOrFindUser(igHandle.value.replace('@',"").toLowerCase());
    const {id, username, image, name} = user;
    user = new User(id,username,image,name);
    user.displayUserInfo();
    Photo.clearPhotos();
    user.displayPhotos();
    //Putting this here because I need access to the user variable declared above and I can't find a more efficient way to retrieve it at this moment.
    //Had to clone the submit form to prevent event listeners from stacking and POSTing multiple times to the backend.
    let addPhotoForm = document.querySelector('form.addpopupform')
    let clonedAddPhotoForm = addPhotoForm.cloneNode(true);
    addPhotoForm.parentNode.replaceChild(clonedAddPhotoForm, addPhotoForm);
    clonedAddPhotoForm.addEventListener("submit", user.addPhoto.bind(user))
    Animations.revealFeed(e);
}

init()