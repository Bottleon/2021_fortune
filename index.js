const backBtn = document.getElementById("jsBack"),
    shareBtn = document.getElementById("jsShare"),
    body = document.querySelector("body"),
    msgContainer = document.getElementById("jsMsg"),
    msg = Array.from(document.getElementsByClassName("msg"));

const FORTUNE = "My fortune text"


function handleBackBtn() {
    const link = document.createElement("a");
    link.href = "index.html";
    link.click();
}

function handleSaveFortune(text) {
    localStorage.setItem(FORTUNE, JSON.stringify(text));
}

function handleShareBtn() {
    const share = document.createElement("textarea");
    document.body.appendChild(share);
    share.value = window.location.href;
    share.select();
    document.execCommand('copy');
    document.body.removeChild(share);
    alert("Complete my fortune Copy!!");
}

if (backBtn) {
    backBtn.addEventListener("click", handleBackBtn);
}

if (shareBtn) {
    shareBtn.addEventListener("click", handleShareBtn);
}

function init() {
    function handleSaveFortune(text) {
        localStorage.setItem(FORTUNE, text);
    }
    let rannum = Math.floor(Math.random() * 12);
    let arr = [];
    console.log(msg[0].innerText);
    for (j = 0; j < 12; j++) {
        arr.push(msg[j].innerText);
    }
    handleSaveFortune(arr[rannum]);
    const USER_TEXT = localStorage.getItem(FORTUNE);
    msgContainer.innerText = USER_TEXT;
}

init();