class User {
    constructor(id,username,image,name){
        this.id = id;
        this.username = username;
        this.image = image;
        this.name = name;
    }

    displayUserInfo() {
        const bioContainer = document.getElementById('bioContainer')
        bioContainer.innerHTML = ''
        const avatar = document.createElement('img')
        avatar.src = this.image;
        const name = document.createElement('h2')
        const handle = document.createElement('h1')
        handle.innerText = `@${this.username}`;
        name.innerText = this.name
        bioContainer.appendChild(avatar)
        bioContainer.appendChild(handle)
        bioContainer.appendChild(name)
    }

    async displayPhotos() {
        const userObject = await apiService.grabPhotos(this);
        for(let photo of userObject.photos){
                let {id, caption,url} = photo;
                photo = new Photo(id,caption,url)
                photo.displayPhoto();
        }
    }

    async addPhoto(e) {
        e.preventDefault();
        Animations.photoSubmitHide()
        let URL = e.target.firstChild.value
        let photo = await apiService.createPhoto(URL,this);
        let {id,caption,url} = photo
        photo = new Photo(id,' ',url);
        photo.displayPhoto();
    }
}