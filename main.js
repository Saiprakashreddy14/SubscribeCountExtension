const myKey = "AIzaSyAgO2VDbltlkZ0rTv-mJKS6kWwRsBNITuw";
const myId = "UCV8Jh-UCIOErQ_M4K0GPqWQ";

const subcount = document.getElementById('SubCount')

let getSubs = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${myId}&key=${myKey}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        subcount.innerHTML = data["items"][0].statistics.subscriberCount;
    });
};

getSubs();