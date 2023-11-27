const SubscriptionButton1 = document.querySelector('[data-subscription="subscription-button-1"]');
const SubscriptionButton6 = document.querySelector('[data-subscription="subscription-button-6"]');
const SubscriptionButton12 = document.querySelector('[data-subscription="subscription-button-12"]');
const SubscriptionList = document.querySelector('[data-subscription="subscription-list"]');
const PriceTrainer = document.querySelector('[data-price="trainer"]');
const PriceDay = document.querySelector('[data-price="day"]');
const PriceFullDay = document.querySelector('[data-price="full"]');

export const subscriptionCard = () => {
  SubscriptionButton1.addEventListener('click', () => {
    SubscriptionList.classList.remove('subscription__list--six');
    SubscriptionList.classList.remove('subscription__list--twelve');
    SubscriptionButton1.classList.add('current-position');
    SubscriptionButton6.classList.remove('current-position');
    SubscriptionButton12.classList.remove('current-position');
    PriceTrainer.textContent = '5000';
    PriceDay.textContent = '1700';
    PriceFullDay.textContent = '2700';
  });

  SubscriptionButton6.addEventListener('click', () => {
    SubscriptionList.classList.add('subscription__list--six');
    SubscriptionList.classList.remove('subscription__list--twelve');
    SubscriptionButton6.classList.add('current-position');
    SubscriptionButton1.classList.remove('current-position');
    SubscriptionButton12.classList.remove('current-position');
    PriceTrainer.textContent = '30000';
    PriceDay.textContent = '10200';
    PriceFullDay.textContent = '16200';
  });

  SubscriptionButton12.addEventListener('click', () => {
    SubscriptionList.classList.remove('subscription__list--six');
    SubscriptionList.classList.add('subscription__list--twelve');
    SubscriptionButton12.classList.add('current-position');
    SubscriptionButton1.classList.remove('current-position');
    SubscriptionButton6.classList.remove('current-position');
    PriceTrainer.textContent = '60000';
    PriceDay.textContent = '20400';
    PriceFullDay.textContent = '32400';
  });
};


