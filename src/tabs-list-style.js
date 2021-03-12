import { css } from 'lit-element';

export const TabsListStyles = css`
:host {
  display: block;
  font-size: 18px; 
  color: var(--dark-grey);
  font-family: var(--main-font-family, 'sans-serif'); 
  font-weight: 300;
}

.kw-tab-list .kw-tab-list__icons {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.kw-tab-list .kw-tab-list__button {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 46px;
  max-width: 360px;
}

.kw-tab-list .kw-tab-list__button:not([aria-selected="true"]) {
  border-top: 4px solid var(--white-color);
  opacity: 0.5;
}

.kw-tab-list .kw-tab-list__button[aria-selected="true"],
.kw-tab-list .kw-tab-list__button:hover,
.kw-tab-list .kw-tab-list__button:focus {
  outline: 0;
}

.kw-tab-list__image {
  padding: 10px;
  max-height: 105px;
}

.kw-tab-list__title {
  max-width: 155px;
  margin-bottom: 12px;
  font-size: 19px;
  color: var(--dark-grey);
  font-family: var(--main-font-family, 'sans-serif'); 
  font-weight: 800;
}

.compact {
  margin-bottom: 30px;
}

.title_uppercase {
  text-transform: uppercase;
  letter-spacing: 5px;
}

.sub_title_uppercase {
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  text-transform: uppercase;
  color: #4D4D4E;
}
.kw-tab-list__title--orange {
  color: var(--main-color);
  font-size: 14px;
  font-family: var(--main-font-family, 'sans-serif'); 
  font-weight: 800;
  margin-bottom: 0;
}

.kw-tab-list__info-container {
  padding-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.kw-tab-list .kw-tab-list__panel {
  position: relative;
  margin-bottom: 20px;
}

.compact {
  max-width: 850px;
  line-height: 31px;
  
}

.kw-tab-list__picture {
  max-height: 280px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.kw-tab-list .kw-tab-list__panel:focus {
  border-bottom: 4px solid var(--main-color);
  outline: 0;
}
.kw-tab-list__icon-displayed {
  height: 30px;
  width: 30px;
}

.reverse_image_link {
  display: flex;
  flex-direction: column-reverse;
}
.kw-tab--list__link {
      max-width: fit-content;
      margin: 0 auto;
      box-sizing: border-box;
      background-color: inherit;
      border: none;
      cursor: pointer;
      font-family: var(--button-font-family, var(--default-button-font-family));
      font-size: var(--button-font-size, var(--default-button-font-size));
      line-height: var(--button-line-height, var(--default-button-line-height));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 13px;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
      margin-top: 15px;
  }
  .kw-tab--list__link--raised {
      background-color: var(--secondary-color, var(--default-secondary-color));
      border: 1px solid var(--secondary-color, var(--default-secondary-color));
      border-radius: 5px;
      color: var(--white-color, var(--default-white-color));
  }
  .kw-tab--list__link--raised:hover {
      background-color: var(--main-color, var(--default-main-color));
      border-color: var(--main-color, var(--default-main-color));
  }
  .kw-tab--list__link--raised:focus {
      background-color: var(--main-color, var(--default-main-color));
      border-color: var(--dark-grey-button, var(--default-dark-grey));
      outline: none;
  }

  .image-button-icon {
   // background-image: url(/assets/images/kw-tab-list/icon-plus.svg);
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
}
  .kw-tab-list__button:focus .image-button-icon {
    // background-image: url(/assets/images/kw-tab-list/triangle-icon-displayed.svg);
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

  .kw-tab-list__icons-scroll-tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: scroll;
    width: 100%;
  }

  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button {
    min-width: 135px;
    margin-right : 15px;
  }

  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button[aria-selected="true"],
  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button:hover,
  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button:focus {
    border-top: 4px solid var(--main-color);
    outline: 0;
  }

  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button:not([aria-selected="true"]) {
    border-top: 4px solid var(--white-color);
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
  }

  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button[aria-selected="true"],
  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button:hover,
  .kw-tab-list__icons-scroll-tabs .kw-tab-list__button:focus {
    outline: 0;
  }

  .kw-tab-list__icons-scroll-tabs .kw-tab-list__image {
    max-width: 135px;
  }

  .link_max_width {
    min-width: 100%;
  }

  .container_max_width img {
    width: 100%;
  }

  .kw-tab-list__subTitle {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 33px;
    text-transform: uppercase;
    color: #4D4D4E;
  }

  .link_text_light {
    color: var(--main-color);
    background: transparent;
    border: none;
    font-family: var(--main-font-family, "sans-serif");
    width: fit-content;
    align-self: flex-start;
    margin: 0px;
    min-width: initial;
    padding-left: 0;
  }

  .link_text_light:hover {
    background-color: transparent;
    color: #4D4D4E;
  }
  
  .link_text_light:focus {
    background-color: transparent;
    color: #4D4D4E;
  }

  .no_color_button .kw-tab-list__button:not([aria-selected="true"]) {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
  }

  .no_color_button .kw-tab-list__image {
    max-height: 140px;
  }
  @media(min-width: 768px) {

    .kw-tab-list .kw-tab-list__button {
      min-width: 266px;
    }
    .kw-tab-list__title--orange {
      font-size: 19px;
    }

    .kw-tab-list .kw-tab-list__icons {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
    
    .kw-tab-list .kw-tab-list__panel {
      margin-bottom: 0;
    }
    .kw-tab-list .kw-tab-list__button[aria-selected="true"],
    .kw-tab-list .kw-tab-list__button:hover,
    .kw-tab-list .kw-tab-list__button:focus {
      border-top: 4px solid var(--main-color);
      outline: 0;
    }
    .kw-tab-list__picture {
      padding-left: 75px;
      margin: 0;
      display: inline-block;
    }
    .container_max_width {
      max-width: 50%;
    }
    .kw-tab-list__info-container {
      display: inline-block;
      margin-right: 40px;
      
    }
    .kw-tab-list__container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .kw-tab--list__link {
      margin: 0;
    }

    .kw-tab-list__icons-scroll-tabs .kw-tab-list__button {
      min-width: 230px;
      margin-right : 0;
    }
    .kw-tab-list__icons-scroll-tabs .kw-tab-list__image {
      width: 100%;
    }
    .panel__scrollTabs .kw-tab-list__picture {
      max-height: 100%;
      display: inline-block;
      padding: 0;
    }
    .kw-tab-list__picture-container {
      width: 40%;
    }
    .list_button_large .kw-tab-list__image {
      max-height: 105px;
    }
  }
`;
