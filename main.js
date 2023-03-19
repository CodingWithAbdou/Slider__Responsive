// var

const sliders = document.querySelectorAll(".slider");

const toDo = (targetSlider) => {
  const thisSliderBoxs = targetSlider.querySelector(".slider__boxs"),
    thisBtnNext = targetSlider.querySelector(".next"),
    thisBtnPrev = targetSlider.querySelector(".previous"),
    //
    thisItemVisible =
      +getComputedStyle(targetSlider).getPropertyValue("--show-item"),
    thisTotalItem = thisSliderBoxs.childElementCount - thisItemVisible;
  let numberimgSlider = 0;
  // add Event on btn Next

  const nextImg = () => {
    numberimgSlider++;
    thisSliderBoxs.style.transform = `translateX(-${thisSliderBoxs.children[numberimgSlider].offsetLeft}px)`;
    console.log(numberimgSlider);
    console.log(thisTotalItem);

    let boolean = numberimgSlider >= thisTotalItem;

    if (boolean) thisBtnNext.classList.add("hide");
    thisBtnPrev.classList.remove("hide");
  };

  thisBtnNext.addEventListener("click", nextImg);

  const PrevImg = () => {
    numberimgSlider--;
    thisSliderBoxs.style.transform = `translateX(-${thisSliderBoxs.children[numberimgSlider].offsetLeft}px)`;

    let boolean = numberimgSlider <= 0;

    if (boolean) thisBtnPrev.classList.add("hide");
    thisBtnNext.classList.remove("hide");
  };

  thisBtnPrev.addEventListener("click", PrevImg);
};

sliders.forEach((slider) => toDo(slider));
