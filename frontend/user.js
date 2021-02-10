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
        const avatar = document.createElement('img')
        avatar.src = this.image;
        const bioContainer = document.createElement('div')
        bioContainer.appendChild(avatar)
        const name = document.createElement('h1')
        name.innerText = this.name
        document.querySelector('body').appendChild(bioContainer)
        document.querySelector('body').appendChild(name)
    }
}