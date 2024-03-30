// input с проигрышной суммой
let iptLost1Bet = document.querySelector('#the-lost1-bet'); // лига про 3A
let iptLost2Bet = document.querySelector('#the-lost2-bet'); // лига про 4А
let iptLost3Bet = document.querySelector('#the-lost3-bet'); // лига про 5A
let iptLost4Bet = document.querySelector('#the-lost4-bet'); // лига про 6A
let iptLost5Bet = document.querySelector('#the-lost5-bet'); // лига про 9A

// читаем и записываем кнопки в переменные
let buttCalculateBid1 = document.querySelector('.сalculate-bid1'); // лига про 3A
let buttCalculateBid2 = document.querySelector('.сalculate-bid2'); // лига про 4А
let buttCalculateBid3 = document.querySelector('.сalculate-bid3'); // лига про 5A
let buttCalculateBid4 = document.querySelector('.сalculate-bid4'); // лига про 6A
let buttCalculateBid5 = document.querySelector('.сalculate-bid5'); // лига про 9A

// input с коифицентом который мы хотим поймать
let inpRatio1 = document.querySelector('#ratio1'); // лига про 3A
let inpRatio2 = document.querySelector('#ratio2'); // лига про 4А
let inpRatio3 = document.querySelector('#ratio3'); // лига про 5A
let inpRatio4 = document.querySelector('#ratio4'); // лига про 6A
let inpRatio5 = document.querySelector('#ratio5'); // лига про 9A

// куда мы будем выводить данные сколько ставить
let ConclusionBet1 = document.querySelector('.сonclusion-bet1'); // лига про 3A
let ConclusionBet2 = document.querySelector('.сonclusion-bet2'); // лига про 4А
let ConclusionBet3 = document.querySelector('.сonclusion-bet3'); // лига про 5A
let ConclusionBet4 = document.querySelector('.сonclusion-bet4'); // лига про 6A
let ConclusionBet5 = document.querySelector('.сonclusion-bet5'); // лига про 9A

// переменные для догона
let catchUp1 = 0; // лига про 3A
let catchUp2 = 0; // лига про 4А
let catchUp3 = 0; // лига про 5A
let catchUp4 = 0; // лига про 6A
let catchUp5 = 0; // лига про 9A

// переменная для петрерянной суммы
let AmountLost1 = document.querySelector('.amount-lost1'); // лига про 3A
let AmountLost2 = document.querySelector('.amount-lost2'); // лига про 4А
let AmountLost3 = document.querySelector('.amount-lost3'); // лига про 5A
let AmountLost4 = document.querySelector('.amount-lost4'); // лига про 6A
let AmountLost5 = document.querySelector('.amount-lost5'); // лига про 9A

// переменная для сброса суммы
let Reset1 = document.querySelector('.reset1'); // лига про 3A
let Reset2 = document.querySelector('.reset2'); // лига про 4А
let Reset3 = document.querySelector('.reset3'); // лига про 5A
let Reset4 = document.querySelector('.reset4'); // лига про 6A
let Reset5 = document.querySelector('.reset5'); // лига про 9A





// ПРИ НАЖАТИИ НА КНОПКУ "РАССЧИТАТЬ" В РАЗДЕЛЕ ЛИГА ПРО 3А
buttCalculateBid1.addEventListener('click', function() {
    let Ratio1 = inpRatio1.value;
    let Lost1Bet = iptLost1Bet.value;
    let stavka1;
    for (stavka1 = 0;((stavka1 * Ratio1) - stavka1) < Lost1Bet; stavka1++) {
    };
    let pribl1 = (stavka1 * Ratio1) - stavka1;
    catchUp1 += pribl1 + stavka1;
    ConclusionBet1.textContent = stavka1;
    AmountLost1.textContent = catchUp1;
});

// ПРИ НАЖАТИИ НА КНОПКУ "СБРОС" В РАЗДЕЛЕ ЛИГА ПРО 3А
Reset1.addEventListener('click', function() {
    Ratio1 = 0;
    Lost1Bet = 0;
    stavka1 = 0;
    pribl1 = 0;
    catchUp1 = 0;
    ConclusionBet1.textContent = "";
    AmountLost1.textContent = "";
});





// ПРИ НАЖАТИИ НА КНОПКУ "РАССЧИТАТЬ" В РАЗДЕЛЕ ЛИГА ПРО 3А
buttCalculateBid2.addEventListener('click', function() {
    let Ratio2 = inpRatio2.value;
    let Lost2Bet = iptLost2Bet.value;
    let stavka2;
    for (stavka2 = 0;((stavka2 * Ratio2) - stavka2) < Lost2Bet; stavka2++) {
    };
    let pribl2 = (stavka2 * Ratio2) - stavka2;
    catchUp2 += pribl2 + stavka2;
    ConclusionBet2.textContent = stavka2;
    AmountLost2.textContent = catchUp2;
});

// ПРИ НАЖАТИИ НА КНОПКУ "СБРОС" В РАЗДЕЛЕ ЛИГА ПРО 3А
Reset2.addEventListener('click', function() {
    Ratio2 = 0;
    Lost2Bet = 0;
    stavka2 = 0;
    pribl2 = 0;
    catchUp2 = 0;
    ConclusionBet2.textContent = "";
    AmountLost2.textContent = "";
});





// ПРИ НАЖАТИИ НА КНОПКУ "РАССЧИТАТЬ" В РАЗДЕЛЕ ЛИГА ПРО 3А
buttCalculateBid3.addEventListener('click', function() {
    let Ratio3 = inpRatio3.value;
    let Lost3Bet = iptLost3Bet.value;
    let stavka3;
    for (stavka3 = 0;((stavka3 * Ratio3) - stavka3) < Lost3Bet; stavka3++) {
    };
    let pribl3 = (stavka3 * Ratio3) - stavka3;
    catchUp3 += pribl3 + stavka3;
    ConclusionBet3.textContent = stavka3;
    AmountLost3.textContent = catchUp3;
});

// ПРИ НАЖАТИИ НА КНОПКУ "СБРОС" В РАЗДЕЛЕ ЛИГА ПРО 3А
Reset3.addEventListener('click', function() {
    Ratio3 = 0;
    Lost3Bet = 0;
    stavka3 = 0;
    pribl3 = 0;
    catchUp3 = 0;
    ConclusionBet3.textContent = "";
    AmountLost3.textContent = "";
});





// ПРИ НАЖАТИИ НА КНОПКУ "РАССЧИТАТЬ" В РАЗДЕЛЕ ЛИГА ПРО 3А
buttCalculateBid4.addEventListener('click', function() {
    let Ratio4 = inpRatio4.value;
    let Lost4Bet = iptLost4Bet.value;
    let stavka4;
    for (stavka4 = 0;((stavka4 * Ratio4) - stavka4) < Lost4Bet; stavka4++) {
    };
    let pribl4 = (stavka4 * Ratio4) - stavka4;
    catchUp4 += pribl4 + stavka4;
    ConclusionBet4.textContent = stavka4;
    AmountLost4.textContent = catchUp4;
});

// ПРИ НАЖАТИИ НА КНОПКУ "СБРОС" В РАЗДЕЛЕ ЛИГА ПРО 3А
Reset4.addEventListener('click', function() {
    Ratio4 = 0;
    Lost4Bet = 0;
    stavka4 = 0;
    pribl4 = 0;
    catchUp4 = 0;
    ConclusionBet4.textContent = "";
    AmountLost4.textContent = "";
});





// ПРИ НАЖАТИИ НА КНОПКУ "РАССЧИТАТЬ" В РАЗДЕЛЕ ЛИГА ПРО 3А
buttCalculateBid5.addEventListener('click', function() {
    let Ratio5 = inpRatio5.value;
    let Lost5Bet = iptLost5Bet.value;
    let stavka5;
    for (stavka5 = 0;((stavka5 * Ratio5) - stavka5) < Lost5Bet; stavka5++) {
    };
    let pribl5 = (stavka5 * Ratio5) - stavka5;
    catchUp5 += pribl5 + stavka5;
    ConclusionBet5.textContent = stavka5;
    AmountLost5.textContent = catchUp5;
});

// ПРИ НАЖАТИИ НА КНОПКУ "СБРОС" В РАЗДЕЛЕ ЛИГА ПРО 3А
Reset5.addEventListener('click', function() {
    Ratio5 = 0;
    Lost5Bet = 0;
    stavka5 = 0;
    pribl5 = 0;
    catchUp5 = 0;
    ConclusionBet5.textContent = "";
    AmountLost5.textContent = "";
});
