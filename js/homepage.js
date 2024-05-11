let galeryPosition = 0;
const buttonRigth = () => {
  if (galeryPosition > 2550) {
    return;
  }
  galeryPosition = galeryPosition + 150;
  console.log(galeryPosition);
  let galeria = document.getElementsByClassName("blocklmb");
  moveRight = `${galeryPosition.toString()}px`;
  galeria[0].style.right = moveRight;
};

const buttonLeft = () => {
  if (galeryPosition <= 0) {
    return;
  }
  galeryPosition = galeryPosition - 150;
  let galeria = document.getElementsByClassName("blocklmb");
  moveRight = `${galeryPosition.toString()}px`;
  galeria[0].style.right = moveRight;
};

let galeryPositionPromotion = 0;
const buttonRigthPromotion = () => {
  if (galeryPositionPromotion > 2550) return;
  galeryPositionPromotion = galeryPositionPromotion + 150;
  let galeria = document.getElementsByClassName("blockpromo");
  moveRight = `${galeryPositionPromotion.toString()}px`;
  galeria[0].style.right = moveRight;
};

const buttonLeftPromotion = () => {
  if (galeryPositionPromotion <= 0) return;
  galeryPositionPromotion = galeryPositionPromotion - 150;
  let galeria = document.getElementsByClassName("blockpromo");
  moveRight = `${galeryPositionPromotion.toString()}px`;
  galeria[0].style.right = moveRight;
};
