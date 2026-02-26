
const mebleg=document.getElementById('mebleg')
const meblegvalue=document.getElementById('meblegvalue')
const muddet=document.getElementById('muddet')
const muddetvalue=document.getElementById('muddetvalue')
const faiz=document.getElementById('faiz')
const faizvalue=document.getElementById('faizvalue')
const ayliq=document.getElementById('ayliq')
function yerlesdir(){
    meblegvalue.innerHTML=mebleg.value + " ₼"
    muddetvalue.innerHTML=muddet.value + " ay"
    faizvalue.innerHTML=faiz.value + " %"
    ayliqhesabla()
}
function ayliqhesabla(){
    let f=+faiz.value / 1200;
    let hesab=(+mebleg.value *f *(1 + f) **+muddet.value) / ((1 + f) **+muddet.value - 1);
    ayliq.innerHTML=hesab.toFixed(2) + " ₼";
}

//Depozit
const depozitmebleg=document.getElementById('depozitmebleg')
const depozitmeblegvalue=document.getElementById('depozitmeblegvalue')
const birayliq=document.getElementById('birayliq')
const ayliq24=document.getElementById('ayliq24')
const ayliq36=document.getElementById('ayliq36')
const heray=document.getElementById('heray')
const heril=document.getElementById('heril')
const azn=document.getElementById('azn')
const usd=document.getElementById('usd')
const mindeyer=document.getElementById('mindeyer')
const maxdeyer=document.getElementById('maxdeyer')
const odenilenfaiztitle=document.getElementById('odenilenfaiztitle')
const odenilenfaizbottom=document.getElementById('odenilenfaizbottom')
const umumiqazanc=document.getElementById('umumiqazanc')
let valyuta=1
function yerlesdirdepozit(){
    valyuta ? depozitmeblegvalue.innerHTML=depozitmebleg.value + " ₼"
    : depozitmeblegvalue.innerHTML=depozitmebleg.value + " $"
    hesablaDepozit()
}

function illik(i) {
    if (i) {
        odenilenfaiztitle.innerHTML='Her il odenilen faiz'
        birayliq.classList.remove('hidden');
        heril.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
        heray.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
    } else {
        odenilenfaiztitle.innerHTML='Her ay odenilen faiz'
        birayliq.classList.add('hidden');
        heril.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
        heray.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
    }
}
function aznusd(i) {
    if (i) {
        ayliq24.classList.add('hidden');
        ayliq36.classList.add('hidden');
        valyuta=0
        mindeyer.innerHTML='300 $'
        maxdeyer.innerHTML='3000000 $'
        usd.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
        azn.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
    } else {
        ayliq24.classList.remove('hidden');
        ayliq36.classList.remove('hidden');
        valyuta=1
        mindeyer.innerHTML='300 ₼'
        maxdeyer.innerHTML='3000000 ₼'
        usd.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
        azn.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
    }
    yerlesdirdepozit()
}


let muddetAy=24   // default müddət
let illikFaiz=12  // 12%

function muddetSec(k){
    muddetAy=k
    hesablaDepozit()
}

function hesablaDepozit(){
    let mebleg = +depozitmebleg.value
    let qazanc = mebleg * (illikFaiz / 100) * (muddetAy / 12)
    umumiqazanc.innerHTML = qazanc.toFixed(2)
    if(valyuta){
        odenilenfaizbottom.innerHTML = (qazanc / muddetAy).toFixed(2) + " ₼"
    }else{
        odenilenfaizbottom.innerHTML = (qazanc / muddetAy).toFixed(2) + " $"
    }
}


//avtomobil krediti

const elektrikli=document.getElementById('elektrikli')
const hibrid=document.getElementById('hibrid')
const diger=document.getElementById('diger')
const avtoqiymet=document.getElementById('avtoqiymet')
const avtoqiymet1=document.getElementById('avtoqiymet1')
const avtofaiz=document.getElementById('avtofaiz')
const avtofaiz1=document.getElementById('avtofaiz1')
const avtomuddet=document.getElementById('avtomuddet')
const avtomuddet1=document.getElementById('avtomuddet1')
const faizmin=document.getElementById('faizmin')

const avtoayliq=document.getElementById('avtoayliq')
const umumi=document.getElementById('umumi')
const komisya=document.getElementById('komisya')
const kreditmebleg=document.getElementById('kreditmebleg')
const umumiodenis=document.getElementById('umumiodenis')
const illikfaizderecesi1=document.getElementById('illikfaizderecesi1')


function avtohesabla(){
    // umumiodenis.innerHTML=avtoqiymet.value+(avtoqiymet.value/100)*14
    // avtoayliq.innerHTML=(avtoqiymet.value+(avtoqiymet.value/100)*14)/avtomuddet.value
}

let illikfaizderecesi=14

function yerlesdiravtomobil() {
    if (avtomuddet.value < 13) { illikfaizderecesi=13 }
    else if (avtomuddet.value < 37) { illikfaizderecesi=14 }
    else { illikfaizderecesi=15 }
    illikfaizderecesi1.innerHTML=illikfaizderecesi + " %"
    const qiymet=+avtoqiymet.value
    const muddet=+avtomuddet.value
    const ilkinodenis=(+avtofaiz.value / 100) *qiymet  
    const kreditmebleg_=qiymet - ilkinodenis            
    const umumi_faiz=(kreditmebleg_ *illikfaizderecesi / 100)
    const umumiodenis_=kreditmebleg_ + umumi_faiz        
    const ayliq=umumiodenis_ /muddet
    avtoqiymet1.innerHTML=qiymet.toFixed(2) + " ₼"
    avtofaiz1.innerHTML=avtofaiz.value + " %"
    avtomuddet1.innerHTML=muddet + " ay"
    komisya.innerHTML=(qiymet / 15).toFixed(2) + " ₼"
    kreditmebleg.innerHTML=kreditmebleg_.toFixed(2) + " ₼"
    umumiodenis.innerHTML=umumiodenis_.toFixed(2) + " ₼"
    avtoayliq.innerHTML=ayliq.toFixed(2) + " ₼"
}
function elektrik(i) {
    if (i==0) {
        avtofaiz.min=10
        faizmin.innerHTML=avtofaiz.min+ " %"
        elektrikli.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
        hibrid.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
        diger.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
    } else if(i==1){
        avtofaiz.min=20
        faizmin.innerHTML=avtofaiz.min+ " %"
        elektrikli.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
        hibrid.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
        diger.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
    }else{
        avtofaiz.min=40
        faizmin.innerHTML=avtofaiz.min+ " %"
        elektrikli.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
        hibrid.classList.remove('border-2', 'border-[#aeaeae]', 'bg-white');
        diger.classList.add('border-2', 'border-[#aeaeae]', 'bg-white');
    }
}


// Ipoteka 
const illikfaizderecesiipoteka=document.getElementById('illikfaizderecesiipoteka')
const ayliqipoteka=document.getElementById('ayliqipoteka')
const meblegipoteka=document.getElementById('meblegipoteka')
const kreditmeblegipoteka1=document.getElementById('kreditmeblegipoteka1')
const kreditmeblegipoteka2=document.getElementById('kreditmeblegipoteka2')
const muddetipoteka=document.getElementById('muddetipoteka')
const muddetipotekavalue=document.getElementById('muddetipotekavalue')
let ipotekafaiz1=4
function ayliqhesablaipoteka(){
    muddetipotekavalue.innerHTML=muddetipoteka.value+' il'
    let card=meblegipoteka.value
    kreditmeblegipoteka1.innerHTML=card+ " ₼"
    kreditmeblegipoteka2.innerHTML=card+ " ₼"
    ayliqipoteka.innerHTML=((+meblegipoteka.value+(+meblegipoteka.value/100)*ipotekafaiz1)/(muddetipoteka.value*12)).toFixed(2)+ " ₼"
}

function ipotekafaiz(elem,x){
    let butunfaizler=elem.parentElement.querySelectorAll('span');
    butunfaizler.forEach(element=> {
        element.classList.remove('bg-white','border-[1px]'); 
        element.classList.add('bg-[#f1f1f1]'); 
    });
    elem.classList.remove('bg-[#f1f1f1]'); 
    elem.classList.add('bg-white','border-[1px]');
    illikfaizderecesiipoteka.innerHTML=x+' %'
    ipotekafaiz1=x
    ayliqhesablaipoteka()
}


//Sehifeler arasinda kecid
const bolmeler=[kredit, depozit, avtomobilkrediti, ipoteka];
function kecid(elem,x){
    let butunBasliqlar=elem.parentElement.querySelectorAll('span')
    butunBasliqlar.forEach(item=>{
        item.classList.remove('activ')
        item.classList.add('notactiv')
    })
    elem.classList.remove('notactiv')
    elem.classList.add('activ')
    
    bolmeler.forEach((item,index)=>{
        item.classList.toggle('flex',index===x)
        item.classList.toggle('hidden',index!==x)
    })
}