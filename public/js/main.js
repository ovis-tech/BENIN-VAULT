const sendLogin = async () => {
    const user = document.getElementById("username").value;
    const pwd = document.getElementById("password").value;
    if (!user || !pwd) {
        alert("Username and password are required.");
        return;
    }
    try {
        const response = await fetch("/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ user, pwd }),
        });
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem("accessToken", data.accessToken);
            alert("Login successful!");
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.error(err);
        alert("An error occurred during login.");
    }
};

document.getElementById("loginBtn").addEventListener("click", sendLogin);