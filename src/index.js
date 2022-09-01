/* 
1. Не реализовано после прощелкивания целой колоды, чтобы при выборе другого 
Вечного колода снова прокликивалась. Видимо, что-то надо сделать с шифтами из массива - клон массива?

2. Не добавлены сложности кроме нормальной

3. Не прописана связь выбора сложности, при выборе древнего и клику по кнопке летсгоу
 */

import ancientsData from "/data/ancients.js";

import color from "./data/mythicCards/color.js";

import difficulties from "./data/difficulties.js";

(function () {
  const veryLight = document.querySelector('.diff-very-light');
  const light = document.querySelector('.diff-light');
  const normal = document.querySelector('.diff-normal');
  const strong = document.querySelector('.diff-strong');
  const veryStrong = document.querySelector('.diff-very-strong');
  let finalCards;
  const azathoth = document.querySelector('.azathoth');
  const cthulthu = document.querySelector('.cthulthu');
  const iogsothoth = document.querySelector('.iogsothoth');
  const shubniggurath = document.querySelector('.shubniggurath');
  const ancientCard = document.querySelectorAll('.ancient-card');
  const ancientContainer = document.querySelectorAll('.ancients-container');
  const lastCard = document.querySelector('.last-card');
  const letsGo = document.querySelector('.letsgo-button');
  const resultClass = document.querySelector('.result');
  
  const difficultyBox = document.querySelectorAll('.difficulty-box');
  const cardOpen = document.querySelector('.cards-open');
  const firstGreen = document.querySelector('.fisrt-step-green'); 
  const secondGreen = document.querySelector('.second-step-green'); 
  const thirdGreen = document.querySelector('.third-step-green'); 
  const firstBlue = document.querySelector('.fisrt-step-blue'); 
  const secondBlue = document.querySelector('.second-step-blue'); 
  const thirdBlue = document.querySelector('.third-step-blue'); 
  const firstBrown = document.querySelector('.fisrt-step-brown'); 
  const secondBrown = document.querySelector('.second-step-brown'); 
  const thirdBrown = document.querySelector('.third-step-brown'); 

  const greenColorsCard = [];
  const blueColorsCard = [];
  const brownColorsCard = [];
  
  let stackCards = [];
  let allColorsCards = [];
  let ancientChooseCards = [];
  let final = [];
  let green;
  let blue;
  let brown;
  let first;
  let second;
  let third;
  let firstStep =[];
  let secondStep =[];
  let thirdStep =[];

// Мешаем карты
function cardsShuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Кто древний?
  function whoIsAncient() {
    ancientCard.forEach(el => {
      el.addEventListener("click", (e) => {
        ancientCard.forEach(el => {
          el.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
  }
  whoIsAncient();
  const randomNum = []

  // Какая сложность выбрана?
  function whatIsDifficulty(){
    difficultyBox.forEach(el => {
      el.addEventListener("click", (e) => {
        difficultyBox.forEach(el => {
          el.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
  }
  whatIsDifficulty()
  
  function randomInteger(min, max) {
      const number = Math.floor(min + Math.random() * (max - min));
      if (randomNum.includes(number)) return randomInteger(min, max)
      else {
        randomNum.push(number)
        return number
      }
    }

/* большой блок отбора карт по цветам */
// Находим количество карт каждого цвета по карте Древнего
function sortAllColors() {
  ancientCard.forEach.call(ancientCard,function(el){
  el.addEventListener('click', e => {

      let indexAncient = e.target.id;
      first = ancientsData[indexAncient].firstStage;
      second = ancientsData[indexAncient].secondStage;
      third = ancientsData[indexAncient].thirdStage;
      green = Number(first.greenCards) + Number(second.greenCards) + Number(third.greenCards);
      blue = Number(first.blueCards) + Number(second.blueCards) + Number(third.blueCards);
      brown = Number(first.brownCards) + Number(second.brownCards) + Number(third.brownCards);

/*       firstStep.length = 0;
      secondStep.length = 0;
      thirdStep.length = 0; */

// Функция рандомного числа от и до 
      

//сортируем и закидываем в массив карты нужных цветов в нужном количестве
        function allColors(){
          allColorsCards.length = 0;
          greenColorsCard.length = 0;
          blueColorsCard.length = 0;
          brownColorsCard.length = 0;
          

          function sortGreen(){
            for (let i = 0; i < green; i++){
              if (green < color.greenCards.length) {
                let greenNum = randomInteger(0, Number(color.greenCards.length));
                allColorsCards.push(color.greenCards[greenNum]);
                greenColorsCard.push(color.greenCards[greenNum]);

            } /* ПРОПИСАТЬ ДЛЯ РАЗНЫХ СЛОЖНОСТЕЙ
            else {
              let additional = green - color.greenCards.length;
              console.log(additional);
              let greenNum = randomInteger(0, Number(color.greenCards.length));
              allColorsCards.push(color.greenCards[greenNum]);
    
              let someBlueCards = randomInteger(0, Number(color.blueCards.length))
              allColorsCards.push(color.blueCards[additional])
            } */
          }
          };
    
          function sortBrown(){
            for (let i = 0; i < brown; i++){
              if (brown < color.brownCards.length) {
                let brownNum = randomInteger(0, Number(color.brownCards.length));
                allColorsCards.push(color.brownCards[brownNum]);
                brownColorsCard.push(color.brownCards[brownNum]);
            } /* ПРОПИСАТЬ ДЛЯ РАЗНЫХ СЛОЖНОСТЕЙ
           */
          }
          };
    
          function sortBlue(){
            for (let i = 0; i < blue; i++){
              if (blue < color.blueCards.length) {
                let blueNum = randomInteger(0, Number(color.blueCards.length));
                allColorsCards.push(color.blueCards[blueNum]);
                blueColorsCard.push(color.blueCards[blueNum]);
            } /* ПРОПИСАТЬ ДЛЯ РАЗНЫХ СЛОЖНОСТЕЙ
            */
          }
          };
          sortGreen();
          sortBrown();
          sortBlue();
        }
        allColors();
        
        // console.log(first.greenCards);  количество карт в первом шаге зеленого цвета
        
        /* 
        green = Number(first.greenCards) + Number(second.greenCards) + Number(third.greenCards);
      blue = Number(first.blueCards) + Number(second.blueCards) + Number(third.blueCards);
      brown = Number(first.brownCards) + Number(second.brownCards) + Number(third.brownCards);
       */
let firstSum = Number(first.greenCards) + Number(first.blueCards) + Number(first.brownCards);
let secondSum = Number(second.greenCards) + Number(second.blueCards) + Number(second.brownCards);
let thirdSum = Number(third.greenCards) + Number(third.blueCards) + Number(third.brownCards);

// Сортируем карты по этапам
function allSteps(){

  for (let j = first.greenCards-1; j > -1; j--){
    firstStep.push(greenColorsCard.splice(j,1));
  }
  for (let j = first.brownCards -1; j > -1;j--){
    firstStep.push(brownColorsCard.splice(j,1));
  }
  for (let j = first.blueCards-1; j > -1; j--){
    firstStep.push(blueColorsCard.splice(j,1));
  }

  for (let j = second.blueCards-1; j > -1; j--){
    secondStep.push(blueColorsCard.splice(j,1));
  }
  for (let j = second.greenCards -1; j > -1; j--){
    secondStep.push(greenColorsCard.splice(j,1));
  }
  for (let j = second.brownCards-1; j > -1; j--){
    secondStep.push(brownColorsCard.splice(j,1));
  }

  for (let j = 0; j < greenColorsCard.length; j++){
    thirdStep.push(greenColorsCard.splice(j--,1));
  }
  for (let j = 0; j < blueColorsCard.length; j++){
    thirdStep.push(blueColorsCard.splice(j--,1));
  }
  for (let j = 0; j < brownColorsCard.length; j++){
  thirdStep.push(brownColorsCard.splice(j--,1));
  }

stackCards = [firstStep, secondStep, thirdStep];
}
allSteps()

/* function sortBrown(){
    for (let i = 0; i < brown; i++){
      if (brown < color.brownCards.length) {
        let brownNum = randomInteger(0, Number(color.brownCards.length));
        allColorsCards.push(color.brownCards[brownNum]);
        brownColorsCard.push(color.brownCards[brownNum]);
    }  ПРОПИСАТЬ ДЛЯ РАЗНЫХ СЛОЖНОСТЕЙ
   
  }
  };*/

 /* function sortBlue(){
    for (let i = 0; i < blue; i++){
      if (blue < color.blueCards.length) {
        let blueNum = randomInteger(0, Number(color.blueCards.length));
        allColorsCards.push(color.blueCards[blueNum]);
        blueColorsCard.push(color.blueCards[blueNum]);
    }  ПРОПИСАТЬ ДЛЯ РАЗНЫХ СЛОЖНОСТЕЙ
    
  }
  };*/
  
// Перемешали карты после отбора
/* allColorsCards = cardsShuffle(allColorsCards);
console.log(allColorsCards) */
//Добавляем цифры в кружки
firstGreen.textContent = `${Number(first.greenCards)}`;
secondGreen.textContent = `${Number(second.greenCards)}`;
thirdGreen.textContent = `${Number(third.greenCards)}`;

firstBlue.textContent = `${Number(first.blueCards)}`;
secondBlue.textContent = `${Number(second.blueCards)}`;
thirdBlue.textContent = `${Number(third.blueCards)}`;

firstBrown.textContent = `${Number(first.brownCards)}`;
secondBrown.textContent = `${Number(second.brownCards)}`;
thirdBrown.textContent = `${Number(third.brownCards)}`;
})});

// При клике на баттон появляется нижняя часть верстки (замешивается колода)
function letsGoFunction() {
  letsGo.addEventListener('click', function(){
    resultClass.classList.add('result-active');
    ancientCard.forEach.call(ancientCard,function(el){
      el.addEventListener('click', e => {
        resultClass.classList.remove('result-active');
      });
    });
    difficultyBox.forEach.call(difficultyBox,function(el){
      el.addEventListener('click', e => {
        resultClass.classList.remove('result-active');
      });
    });
  });
}
letsGoFunction();


/* function openTheCard (){
  cardOpen.addEventListener('click', function(){
      lastCard.style.background = `url('./assets/MythicCards/blue/blue1.jpg')`;
      console.log(`${greenColorsCard[0].cardFace}`);
    } */
    


    /* let newArr = firstStep.flat(1)
    console.log(newArr) */
    function openTheCard (){
      let deleteArr = [];
      let i = 0;
      cardOpen.addEventListener('click', function(){
        firstStep = cardsShuffle(firstStep.flat());
        secondStep = cardsShuffle(secondStep.flat());
        thirdStep = cardsShuffle(thirdStep.flat());


/*         function randomCard(arr){
          return Math.floor(Math.random() * arr.length);
        }
*/
        /* console.log(firstStep) 
        console.log(firstStep[i]) 
        console.log(firstStep[i].color) */

if (firstStep.length > 0){
  if (i < firstStep.length) {
    lastCard.style.background = `url('${firstStep[i].cardFace}')`;
     if (firstStep[i].color === "green") {
      firstGreen.textContent = firstGreen.textContent-1;
    } 
    if (firstStep[i].color === "blue") {
      firstBlue.textContent = firstBlue.textContent-1;
    } 
    if (firstStep[i].color === "brown") {
      firstBrown.textContent = firstBrown.textContent-1;
    }  
    firstStep.shift(firstStep[i].cardFace);
  };
} else if(firstStep.length == 0 && secondStep.length !== 0){
  if (i < secondStep.length) {
    lastCard.style.background = `url('${secondStep[i].cardFace}')`;
     if (secondStep[i].color === "green") {
      secondGreen.textContent = secondGreen.textContent-1;
    } 
    if (secondStep[i].color === "blue") {
      secondBlue.textContent = secondBlue.textContent-1;
    } 
    if (secondStep[i].color === "brown") {
      secondBrown.textContent = secondBrown.textContent-1;
    }  
    secondStep.shift(secondStep[i].cardFace);
  }
} else if (firstStep.length == 0 && secondStep.length == 0) {
  if (i < thirdStep.length) {
    
    lastCard.style.background = `url('${thirdStep[i].cardFace}')`;
    if (thirdStep[i].color === "green") {
      thirdGreen.textContent = thirdGreen.textContent-1;
    };
    if (thirdStep[i].color === "blue") {
      thirdBlue.textContent = thirdBlue.textContent-1;
    };
    if (thirdStep[i].color === "brown") {
      thirdBrown.textContent = thirdBrown.textContent-1;
    };
    thirdStep.shift(thirdStep[i].cardFace);
  }
} 
if (thirdGreen.textContent === "0" && thirdBlue.textContent === "0" && thirdBrown.textContent === "0"){
  lastCard.style.display = "none";
}

        /*   const firstGreen = document.querySelector('.fisrt-step-green'); 
  const secondGreen = document.querySelector('.second-step-green'); 
  const thirdGreen = document.querySelector('.third-step-green'); 
  const firstBlue = document.querySelector('.fisrt-step-blue'); 
  const secondBlue = document.querySelector('.second-step-blue'); 
  const thirdBlue = document.querySelector('.third-step-blue'); 
  const firstBrown = document.querySelector('.fisrt-step-brown'); 
  const secondBrown = document.querySelector('.second-step-brown'); 
  const thirdBrown = document.querySelector('.third-step-brown');  */  
          /* if (i < firstStep.length) {
            lastCard.style.background = `url('${firstStep[i].cardFace}')`;
            firstStep.shift(firstStep[i].cardFace);
          } */

          
          /* 
          
          cardOpen.addEventListener('click', function(){
            let nowCard = firstStep[firstStep.length-1].cardFace;
            lastCard.style.background = `url('${nowCard}')`;
            firstStep.splice(nowCard);
            console.log(firstStep);
          }) */
        
/* console.log(firstStep[firstStep.length-1].cardFace) */
        

        /* for (let i = 0; i < firstStep.length; i++){ */
          
          
          /* deleteArr.push(firstStep[i].splice(i,1)) */
        /* } */
        
        /* console.log(firstStep[0].cardFace)
          lastCard.style.background = `url('./assets/MythicCards/blue/blue1.jpg')`; */
          /* console.log(`${greenColorsCard[0].cardFace}`); */

          
    /* console.log(allColorsCards);
    
    console.log(brownColorsCard);
    console.log(blueColorsCard) */
  })
}
openTheCard ()
};
sortAllColors();



  /* console.log(allColorsCards)
  console.log(stackCards);
  console.log(firstStep);
  console.log(secondStep);
  console.log(thirdStep); */
}());


  /* for (let i = 0; i < ancientsData.length; i++) {
    ancientsData[i].setAttribute('data-index', i);
    ancientsData[i].addEventListener('click', function () {
      alert(this.getAttribute('data-index'));
    });
  } */


  //console.log(ancientsData[0].firstStage) работает отображение {greenCards: 1, blueCards: 1, brownCards: 2}


  /* ancientsData.forEach(({ name, firstStage, secondStage, thirdStage }) => {
    ancientChooseCards[`${name}`] = { firstStage, secondStage, thirdStage };
  })
  console.log(ancientChooseCards) */

  /* let anc = document.querySelector('.active');
  let final = ancientsData.indexOf(anc, 0);
  console.log(final)
  console.log(ancientCard)
  console.log(ancientsData) */






  //event delegation (смысл в том что вешается обработчик клика на 
  //контейнер и внутри через event.target достается информация о том на каком именно элементе был клик

  // Перетасовать карты (универсальная)
  /* function shuffleCards(cards) { */
  //array.sort(() => Math.random() - 0.5);
  //берешь просто получаешь рандомное число от 0 до длинны массива и возвращаешь по индексу, например
  /*  } */


  // Выбираем древнего
  /*  
  if azathoth
  if cthulthu
  if iogsothoth
  if shubniggurath
 
  let quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
  */


  // Выбираем сложность

  /*
  if veryLight - убираются все щупальца, отбираются снежинки, если не хватает нормал
  (проверка на количество снежинок нужного цвета в колоде, если недостаточно добавляем нормал)
  light - убираются все щупальца
  normal - не меняется
  strong - из набора убираются карты со снежинками
  veryStrong - из набора берутся все карты со щупальцами, если карт не хватает то добираются обычные карты
  (проверка на количество шупалец нужного цвета в колоде, если недостаточно добавляем нормал)
 
  finalCards = массив отобранных карт
  shuffleCards(finalCards);
  */

  // 1 этап
  /* 
  
  shuffleCards();
   */

  // 2 этап
  /* 
  
  shuffleCards();
   */

  // 3 этап
  /* 
  
  shuffleCards(); */

  // Финальная колода (складываем карты этапов 1, 2, 3)

  // Показываем карты

  // Счетчик оставшихся карт

  /* 
  foreach удалить  свойство у всех кроме того на который нажал
  container.forEach((el, indx) => {
  el.addEventListener('click', () => {
    if (indx == число) {
      // код    
    }
   })  
})
где indx это индекс элемента */






/*
 // Burger //
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.menu__list');
  const menuCloser = document.querySelector('.menu__list-cross');
  const menuBg = document.querySelector('.wrapper-mobile');
  const menuCloserByBg = document.querySelector('.wrapper-mobile');
  const menuLinks = document.querySelectorAll('.menu__link');

  burgerItem.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    menu.classList.add('menu__list_active');
    menuBg.classList.add('wrapper-mobile--active-burger');
  });
  menuCloser.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    menu.classList.remove('menu__list_active');
    menuBg.classList.remove('wrapper-mobile--active-burger');
  });
  menuCloserByBg.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    menu.classList.remove('menu__list_active');
    menuBg.classList.remove('wrapper-mobile--active-burger');
  });
  if (window.innerWidth <= 390) {
    let i = 0;
    while (i < menuLinks.length) {
      menuLinks[i].addEventListener('click', () => {
        document.body.classList.remove('overflow-hidden');
        menu.classList.remove('menu__list_active');
        menuBg.classList.remove('wrapper-mobile--active-burger');
      });
      i = i + 1;
    }
  }
}());

// Popup //
(function () {
  const loginItem = document.querySelector('.menu__link');
  const loginItemButton = document.querySelector('.header__login');

  const popupBlock = document.querySelector('.popup');
    const menuCloser = document.querySelector('.menu__list-cross');
   
  const popupBackground = document.querySelector('.wrapper-mobile');
  const menuCloserByBackground = document.querySelector('.wrapper-mobile');
  const autorisationClick = document.querySelectorAll('.clickAutorisation');

  loginItem.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    popupBlock.classList.add('popup_active');
    menuBg.classList.add('wrapper-mobile--active-burger');
  });

  loginItemButton.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    popupBlock.classList.add('popup_active');
    menuBg.classList.add('wrapper-mobile--active-burger');
  });

  menuCloserByBg.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    menu.classList.remove('menu__list_active');
    menuBg.classList.remove('wrapper-mobile--active-burger');
  });

   menuCloser.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    menu.classList.remove('menu__list_active');
    menuBg.classList.remove('wrapper-mobile--active-burger');
  }); 


    const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.menu__list');
   const menuCloser = document.querySelector('.menu__list-cross');
   const menuBg = document.querySelector('.wrapper-mobile');
   const menuCloserByBg = document.querySelector('.wrapper-mobile');
   const menuLinks = document.querySelectorAll('.menu__link');
   
   burgerItem.addEventListener('click', () => {
     document.body.classList.add('overflow-hidden');
     menu.classList.add('menu__list_active');
     menuBg.classList.add('wrapper-mobile--active-burger');
   });
   menuCloser.addEventListener('click', () => {
     document.body.classList.remove('overflow-hidden');
     menu.classList.remove('menu__list_active');
     menuBg.classList.remove('wrapper-mobile--active-burger');
   });
   menuCloserByBg.addEventListener('click', () => {
     document.body.classList.remove('overflow-hidden');
     menu.classList.remove('menu__list_active');
     menuBg.classList.remove('wrapper-mobile--active-burger');
   });
   if (window.innerWidth <= 390) {
     let i = 0;
     while (i < menuLinks.length) {
       menuLinks[i].addEventListener('click', () => {
         document.body.classList.remove('overflow-hidden');
         menu.classList.remove('menu__list_active');
         menuBg.classList.remove('wrapper-mobile--active-burger');
       });
       i = i + 1;
     }
   } 
}());



// Слайдер
(function () {
  const prev = document.getElementById('left-btn');
  const next = document.getElementById('right-btn');
  const slides = document.querySelectorAll('.slide');
  const switcher = document.querySelectorAll('.switch__button');
  const clicker = document.querySelectorAll('.clicker');
  const usa = document.getElementById('usa');
  const spain = document.getElementById('spain');
  const japan = document.getElementById('japan');
  let index = 0;

  const activeSlide = slideNum => {
    for (let key of slides) {
      key.classList.remove('active');
    }
    slides[slideNum].classList.add('active');
  }

  const unActiveSlides = () => {
    for (let key of slides) {
      key.classList.remove('order0');
      key.classList.remove('order2');
      if (spain.classList.contains('active')) {
        usa.classList.add('order0');
        japan.classList.add('order2');
      } if (japan.classList.contains('active')) {
        spain.classList.add('order0');
        usa.classList.add('order2');
      } if (usa.classList.contains('active')) {
        japan.classList.add('order0');
        spain.classList.add('order2');
      }
    }
  }

  const activeSwitcher = num => {
    for (let key of switcher) {
      key.classList.remove('active');
    }
    switcher[num].classList.add('active');
  }

  const activeClicker = num => {
    for (let key of clicker) {
      key.classList.remove('active');
    }
    clicker[num].classList.add('active');
  }

  const nextSlide = () => {
    if (index === slides.length - 1) {
      index = 0;
      activeSlide(index);
      unActiveSlides(index);
      activeSwitcher(index);
      activeClicker(index);
    } else {
      index++;
      activeSlide(index);
      unActiveSlides(index);
      activeSwitcher(index);
      activeClicker(index);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      index = slides.length - 1;
      activeSlide(index);
      unActiveSlides(index);
      activeSwitcher(index);
      activeClicker(index);
    } else {
      index--;
      activeSlide(index);
      unActiveSlides(index);
      activeSwitcher(index);
      activeClicker(index);
    }
  };

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  switcher.forEach((item, indexSwitcher) => {
    item.addEventListener('click', () => {
      index = indexSwitcher;
      activeSlide(index);
      unActiveSlides(index);
      activeSwitcher(index);
      activeClicker(index);
    })
  })

  clicker.forEach((item, indexSwitcher) => {
    item.addEventListener('click', () => {
      index = indexSwitcher;
      activeSlide(index);
      unActiveSlides(index);
      activeSwitcher(index);
      activeClicker(index);
    })
  }) */