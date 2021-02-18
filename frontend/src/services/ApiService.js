class ApiService {
    constructor() {
        this.baseURL = `http://localhost:3000`
    }
    async createOrFindUser(handle) {
        const response = await fetch(`${this.baseURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify ({
                user: {username: handle}
            })
        })
    return response.json()
    }

    async grabPhotos(user) {
        const response = await fetch(`${this.baseURL}/users/${user.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return response.json()
    }

    async createPhoto(URL,user) {
        const response = await fetch(`${this.baseURL}/photos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                photo: {url: URL, user_id: user.id}
            })
        })
        return response.json()
    }
    
}