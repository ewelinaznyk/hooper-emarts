import Icon from './Icon';
import '../styles/navigation.css';

function iconName(isRTL, isPrev) {
  if (isPrev) {
    return isRTL ? 'arrowRight' : 'arrowLeft';
  }

  return isRTL ? 'arrowLeft' : 'arrowRight';
}

function renderButton(h, disabled, slot, isPrev, { isRTL }, onClick) {
  const children =
    slot && slot.length
      ? slot
      : [
          h(Icon, {
            props: {
              name: iconName(isRTL, isPrev)
            }
          })
        ];

  return h(
    'button',
    {
      class: {
        [`hooper-${isPrev ? 'prev' : 'next'}`]: true,
        'is-disabled': disabled
      },
      attrs: {
        type: 'button'
      },
      on: {
        click: onClick
      }
    },
    children
  );
}

export default {
  inject: ['$hooper'],
  name: 'HooperNavigation',
  computed: {
    isPrevDisabled() {
      if (this.$hooper.config.infiniteScroll) {
        return false;
      }
      return this.$hooper.currentSlide === 0;
    },
    isNextDisabled() {
      if (this.$hooper.config.infiniteScroll) {
        return false;
      }

      if (this.$hooper.config.trimWhiteSpace) {
        return (
          this.$hooper.currentSlide ===
          this.$hooper.slidesCount - Math.min(this.$hooper.config.itemsToShow, this.$hooper.slidesCount)
        );
      }

      return this.$hooper.currentSlide === this.$hooper.slidesCount - 1;
    }
  },
  methods: {
    slideNext() {
      this.$hooper.slideNext();
      this.$hooper.restartTimer();
    },
    slidePrev() {
      this.$hooper.slidePrev();
      this.$hooper.restartTimer();
    }
  },
  render(h) {
    const config = {
      isRTL: this.$hooper.config.rtl
    };

    const children = [
      renderButton(h, this.isPrevDisabled, this.$slots['hooper-prev'], true, config, () => this.slidePrev()),
      renderButton(h, this.isNextDisabled, this.$slots['hooper-next'], false, config, () => this.slideNext())
    ];

    return h(
      'div',
      {
        class: {
          'hooper-navigation': true,
          'is-rtl': this.$hooper.config.rtl
        }
      },
      children
    );
  }
};
