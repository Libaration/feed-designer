class User {
    constructor(id,username,image,name){
        this.id = id;
        this.username = username;
        this.image = image;
        this.name = name;
    }
    static async createOrFindUser(handle) {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify ({
                user: {username: handle}
            })
        })
        const object = await response.json()
        const {id,username,image,name} = object;
        return new User(id,username,image,name)
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
    async grabPhotos() {
        const response = await fetch(`http://localhost:3000/users/${this.id}`, {
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
    async addPhoto(url){
        const response = await fetch('http://localhost:3000/photos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                photo: {url: url, user_id: this.id}
            })
        })
            await response.json().then(photo =>{
            const {id, caption, url} = photo
            const photoObject = new Photo(id,null,url)
            photoObject.displayPhoto()
        })
        
    }
}