const DOG_BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const dogBtn = document.getElementById('btnDog');
const catBtn = document.getElementById('btnCat');
const dogImg = document.getElementById('imgDog');
const catImg = document.getElementById('imgCat');


/*DOG IMAGES*/
const getDogs = async () => {
    try{
        const data = await fetch(DOG_BASE_URL);
        const json = await data.json();

        return json.message;
    }
    catch(e){
        console.log(e.message);
    }
};

const dogLoadImg = async() =>{
    dogImg.src = await getDogs();
}

dogBtn.addEventListener('click', dogLoadImg);

/*CAT IMAGES*/
const getCats = async () => {
    try{
        const data = await fetch(CAT_BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

const catLoadImg = async() =>{
    catImg.src = await getCats();
}

catBtn.addEventListener('click', catLoadImg);

dogLoadImg();
catLoadImg();

/* =)*/