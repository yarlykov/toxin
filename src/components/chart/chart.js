const captionsList = document.querySelectorAll('.chart__legend-item');
const unitsList = document.querySelectorAll('.chart__unit');
const sumOfVote = document.querySelector('.chart__sum-of-vote');

const getTemplate = (number, color) => `
  <g class="chart__sum-of-vote" fill=${color}>
    <text class="chart__number" text-anchor="middle" x="50%" y="49%">${number}</text>
    <text class="chart__text" text-anchor="middle" x="50%" y="67%">голосов</text>
  </g>
  `;

const sumOfVoteColors = (index) => {
  switch (index) {
    case 0:
      sumOfVote.innerHTML = getTemplate(500, '#FFE39C');
      break;
    case 1:
      sumOfVote.innerHTML = getTemplate(260, '#BC9CFF');
      break;
    case 2:
      sumOfVote.innerHTML = getTemplate(260, '#6FCF97');
      break;
    default:
      return index;
  }
  return index;
};

captionsList.forEach((item, index) => {
  let changeIndex = index;
  if (index === 1) {
    changeIndex += 1;
  } else if (index === 2) {
    changeIndex -= 1;
  }

  item.addEventListener('mouseover', () => {
    sumOfVoteColors(changeIndex);
    unitsList[changeIndex].classList.add('chart__unit_focused');
  });

  item.addEventListener('mouseout', () => {
    unitsList[changeIndex].classList.remove('chart__unit_focused');
  });
});

unitsList.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    sumOfVoteColors(index);
    unitsList[index].classList.add('chart__unit_focused');
  });

  item.addEventListener('mouseout', () => {
    unitsList[index].classList.remove('chart__unit_focused');
  });
});
