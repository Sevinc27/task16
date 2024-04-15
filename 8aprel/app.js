//1. mehsullarin ucuzdan bahaya siralanmasi


let məhsullar = [
  { 
    məhsul: "Bluz",
    ölçü: "s",
   qiymət: 38 
  },
  { 
   məhsul: "Şalvar", 
    ölçü: "M",
   qiymət: 26
 },
 { 
   məhsul: "Mont", 
    ölçü: "S",
   qiymet: 53 
  },
  { 
    məhsul: "Kepka", 
   ölçü: "S",
   qiymət: 12 
 },
 { 
   məhsul: "Don", 
   ölçü: "S",
   qiymət: 20 
 },
 { 
        məhsul: "Ətək", 
          ölçü: "S",
   qiymət: 8 
 },
];

məhsullar.sort((a, b) => a.qiymət- b.qiymət);

console.log("Ucuzdan bahaya məhsullar:");
console.log(məhsullar);

//2. Beş random eded yaradib arraya yigin, sonda ise onlarin cəmini gosterin

let ədədlər = [];
let cəm = 0;

for (let i = 0; i < 5; i++) {
    let rdmEded = Math.floor(Math.random() * 100) + 1;
    ədədlər.push(rdmEded);
    cəm += rdmEded;
}

console.log("Ədədlərin cəmi: " + cəm);

//3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin

//forEach() metodu massivdəki hər bir element üçün funksiya çağırır.

//forEach() hər element üçün funksiyanı çağırıb döngü bitənə qədər davam edir.

//ForEach() daha qısa kod yazmağa kömək edir.

//forEach map-ilə fərqli funksiyalar yerinə yetirir. 
//forEach mövcud olan proyektdə dəyişiklik etmək üçün istifadə edilir, map yeni proyekt hazırlamaq üçün istifadə edilir. 
//forEach hər element üçün istifadə olunduğu halda for müəyyən aralıqdakı elementlərin döngüsün davam etdirmək üçün istifadə edilir.


//4. Json, fetch, api bunlar nedir nece isleyir

//json
//JSON obyekti {} buruq mötərizələr daxilində yerləşir.
//JSON obyektində iki əsas element var: açarlar və dəyərlər
// Dəyərlər etibarlı JSON məlumat növüdür: String, number, boolean, array, null, object əsas dəyərlərdir.
 
//fetch
//hər hansı bir URI-dən məlumat ala bilir. Ağ üzərində mənbələrə çatmaq üçün istifadə olunur 

//api
//API yəni Application Programming Interface, Azərbaycan dilində tətbiq proqramlaşdırma interfeysi mənasına gəlir.
// Application Programming Interface (API) proqramçıların proqram təminatı hazırlamaq və ya fərqli sistemlər arasında qarşılıqlı əlaqəni asanlaşdırmaq üçün istifadə etdikləri protokollar, rutinlər, funksiyalar və ya əmrlər toplusudur.
// API, müxtəlif və fərqli proqram tətbiqlərini birləşdirmək üçün güclü və çox yönlü vasitədir. 
//API-lar bir-biri ilə əlaqəsi olmayan çoxlu proqram məhsullarına digər proqramlarla və verilənlərlə inteqrasiya etməyə və birlikdə işləməsinə imkan verir.

