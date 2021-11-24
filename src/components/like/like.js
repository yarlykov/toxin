class Like {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.text = this.root.querySelector('.js-like__text');
    this.heart = this.root.querySelector('.js-like__icon');

    this.root.addEventListener('click', this.handleLikeClick.bind(this));
  }

  handleLikeClick() {
    this.buttonToggle();
    this.iconToggle();
    this.counter();
  }

  buttonToggle() {
    this.root.classList.toggle('like_inactive-background');
    this.text.classList.toggle('like__text_inactive-text');
  }

  isEnabled() {
    return this.heart.classList.contains('like__icon_type_heart');
  }

  iconToggle() {
    if (this.isEnabled()) {
      this.heart.classList.remove('like__icon_type_heart');
      this.heart.classList.add('like__icon_type_empty-heart');
    } else {
      this.heart.classList.remove('like__icon_type_empty-heart');
      this.heart.classList.add('like__icon_type_heart');
    }
  }

  counter() {
    const currentValue = Number(this.text.textContent);
    if (!this.isEnabled()) {
      this.text.innerHTML = Like.decrement(currentValue);
    } else {
      this.text.innerHTML = Like.increment(currentValue);
    }
  }

  static increment(value) {
    return `${value + 1}`;
  }

  static decrement(value) {
    return `${value - 1}`;
  }
}

export default Like;
