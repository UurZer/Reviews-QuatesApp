const name=document.getElementById("author");
const department=document.getElementById("department");
const text=document.getElementById("authorText");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");
const authorImg=document.getElementById("authorImg");
const subriseBtn=document.getElementById("subriseBtn");


const authors0={
    authorImgPath:"img/img-1.jpg",
    author:"Anna Johnson",
    authorDepartment:"WEB DESIGNER",
    authorText:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
};

const authors1={
    authorImgPath:"img/img-2.jpg",
    author:"Susan Smith",
    authorDepartment:"INTERN",
    authorText:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
};
let count=0;
const authors2={
    authorImgPath:"img/img-3.jpg",
    author:"Bill Anderson",
    authorDepartment:"THE BOSS",
    authorText:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
};

const authors3={
    authorImgPath:"img/img-4.jpg",
    author:"Peter Jones",
    authorDepartment:"WEB DEVELOPER",
    authorText:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
};
const authorsArray=[authors0,authors1,authors2,authors3];
console.log(authorsArray[2].author);


prevBtn.addEventListener("click", ()=>{
    count--;
    showTheAuthors();
});

nextBtn.addEventListener("click", ()=>{
    count++;
    showTheAuthors();
});

function showTheAuthors() {
    if(count>3)
        count=0;
    if(count<0)
        count=3;
    name.textContent =authorsArray[count].author;
    department.textContent =authorsArray[count].authorDepartment;
    text.textContent =authorsArray[count].authorText;
    authorImg.src = authorsArray[count].authorImgPath;
}

supriseBtn.addEventListener("click",()=>{
    count = Math.floor(Math.random()*4);
    showTheAuthors();
});
