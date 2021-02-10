const grabFeed = async (handle) => {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify ({
            username: handle
        })
        
    })
    console.log(response)
}
document.addEventListener('DOMContentLoaded', (e) =>{
    const submitUserBtn = document.getElementById('submit-user-btn')
    const igHandle = document.getElementById('ig-handle')
    submitUserBtn.addEventListener('click', (e) =>{
        grabFeed(igHandle.value);
        e.preventDefault();
    })
})