const myKey = "Your Key";
const myId = "Your ID";  // fill these

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
