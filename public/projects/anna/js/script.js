
let naujienlaiskis = document.getElementById("e-mail");
if (naujienlaiskis){
    naujienlaiskis.addEventListener("click", () => naujienlaiskis.value = "");// paspaudus ant laukelio isnyksta tekstas, rasoma is naujo
    document.getElementsByClassName("pre_footer_button")[1].addEventListener("click", tikrintiEmaila);
    /**
     * tikrinti ar ivestas tekstas yra el pastas.
     */
    function tikrintiEmaila(){
        let regex = /.+(\W)?.*@\w+\.\w+/ig// regex sablonas tikrinti el pasto strukturai
        let txt = document.getElementById("e-mail");
        if (regex.test(txt.value)){ // jei ivestas tekstas atitinka regex sablona tada el pasto adresasa suformuluotas teisingai
            //cia bus kodas siunciantis el pasto adresa i duombaze
            document.getElementById("e-mail").style.backgroundColor = "#bcd217"// jei neteisingai ,nuspalvinu laukeli zalsvai.
            txt.value = "Adresas tinka!"
        }else{
            document.getElementById("e-mail").style.backgroundColor = "#fad3c8"// jei neteisingai ,nuspalvinu laukeli rausvai (klaida!).
            txt.value = "Įveskite tinkamą el. pašto adresą !"
        }   
    }
}
if(document.getElementById("scroll_right")){
    sliderControl("scroll_right", 1);
    sliderControl("scroll_left", -1);
}
/**
 * uzdeda mygtukui eventListener ir
 * kontroliuoja i kuria puse stumiasi karusele
 * @param {string} scroll_direction element id
 * @param {number} amount 1 | -1
 * @example sliderControl("scroll_left", -1)
 */
function sliderControl(scroll_direction, amount){
    document.getElementById(scroll_direction).addEventListener("click", function(){
        document.getElementById("slider").scrollBy({
            left: amount,
            behavior: "smooth"
        })  
    })
}
document.getElementById("hamburger_meniu").addEventListener("click", meniuOff);
//overrides snap
document.getElementById("hamburger_meniu").addEventListener("click", function(){
    document.getElementsByClassName("wrapper")[0].scrollTo(0, 0);
});
var flag = true;
/**
 * ijungia ir isjungia paslepta meniu
 */
function meniuOff(){
    let hamburger = document.getElementById("hamburger_meniu");
    let mygtukai = document.getElementsByClassName("drop_content")[0];
    let wrapp = document.body;
    let menu = document.getElementsByClassName("nav")[0]; 
    if(hamburger = flag){
        wrapp.style.overflowY = "hidden";
        mygtukai.style.display = "flex";
        mygtukai.style.flexDirection = "column";
        mygtukai.style.alignItems = "center";
        mygtukai.style.marginLeft = "-3rem";
        menu.style.paddingBottom = "10rem";
    }else{
        wrapp.style.overflowY = "hidden";
        mygtukai.style.display = "none";
        menu.style.paddingBottom = "0";
    }
    flag = !flag;
}