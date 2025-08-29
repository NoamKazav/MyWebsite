// ===== Simple Interactivity for the Portfolio =====

// 1. הודעה קופצת כשמשתמש לוחץ על לינק (GitHub, LinkedIn, Email)
function contactClicked(platform) {
    alert("Opening " + platform + " link...");
}

// 2. כפתור Back to Top
window.onload = function() {
    let btn = document.createElement("button");
    btn.innerText = "⬆️ Back to Top";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.background = "#4CAF50";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.display = "none";

    document.body.appendChild(btn);

    // פעולה כשמקליקים על הכפתור
    btn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // הכפתור יופיע רק כשגוללים למטה
    window.onscroll = function() {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };
};
