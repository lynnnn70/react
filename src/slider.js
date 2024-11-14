// 選取所有滑桿
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    // 初始化滑桿背景和顯示數值
    updateSlider(slider);

    // 監聽滑桿變化
    slider.addEventListener('input', () => updateSlider(slider));
});

function updateSlider(slider) {
    const type = slider.getAttribute('data-type');
    const value = parseInt(slider.value);
    const max = parseInt(slider.max);
    const min = parseInt(slider.min);

    // 計算滑桿百分比
    const percentage = ((value - min) / (max - min)) * 100;

    // 顏色定義
    const color1 = '#2ca6e0'; // 藍色
    const color2 = '#1fd3fa'; // 淺藍
    const color3 = '#1ffaf3'; // 綠松石色
    const color4 = '#facf1f'; // 黃色

    // 計算漸層背景
    let gradient = '';

    if (percentage < 10) {
        gradient = `linear-gradient(to right, ${color1} ${percentage}%, #444444 ${percentage}%)`;
    } else if (percentage < 30) {
        const adjustedPercentage = (percentage - 10) * 2;
        gradient = `linear-gradient(to right, ${color1} 10%, ${color2} ${adjustedPercentage}%, #444444 ${percentage}%)`;
    } else if (percentage < 60) {
        const adjustedPercentage = (percentage - 30) * 1.3333;
        gradient = `linear-gradient(to right, ${color1} 10%, ${color2} 30%, ${color3} ${adjustedPercentage}%, #444444 ${percentage}%)`;
    } else if (percentage < 90) {
        const adjustedPercentage = (percentage - 60) * 1.3333;
        gradient = `linear-gradient(to right, ${color1} 10%, ${color2} 30%, ${color3} 60%, ${color4} ${adjustedPercentage}%, #444444 ${percentage}%)`;
    } else {
        gradient = `linear-gradient(to right, ${color1} 10%, ${color2} 30%, ${color3} 60%, ${color4} 90%, #444444 ${percentage}%)`;
    }

    // 更新滑桿背景
    slider.style.background = gradient;

     // 更新滑桿數值顯示
     const displaySpan = slider.parentNode.previousElementSibling.querySelector('.slider-value');
     if (type === 'binary') {
         displaySpan.textContent = value == 0 ? 'male' : 'female';
     } else if (type === 'range') {
         displaySpan.textContent = value;
     } else if (type === 'multi') {
         const labels = ['C', 'Q', 'S'];
         displaySpan.textContent = labels[value];
     }

     // 更新 slider-tags 顯示標籤
    const sliderTags = slider.parentNode.querySelector('.slider-tags');
    if (sliderTags) {
        const tags = sliderTags.getAttribute('data-tags').split(',');
        sliderTags.innerHTML = `
          <span>${tags[0]}</span>
          <span>${tags[1]}</span>
        `;
    }
}
