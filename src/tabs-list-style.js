import { css } from 'lit-element';

export const TabsListStyles = css`
:host {
  display: block;
  font-size: var(--base-font-size, 18px); 
  color: var(--main-text-color, #4d4d4e);
  font-family: var(--main-font-family, 'sans-serif'); 
  font-weight: 300;
}

.kw-tab-list__icons {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.kw-tab-list__button {
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 46px;
  min-width: var(--button-tab-width-mobile, 150px);
}

.kw-tab-list__button:not([aria-selected="true"]) {
  border-top: 4px solid var(--button-font-color, #FFFFFF);
  opacity: 0.5;
}

.kw-tab-list__button[aria-selected="true"],
.kw-tab-list__button:hover,
.kw-tab-list__button:focus {
  outline: 0;
}

.kw-tab-list__image {
  padding: 10px;
  height: var(--button-img-tab-height, 150px);
}

.kw-tab-list__title {
  max-width: 155px;
  margin-bottom: 12px;
  font-size: 19px;
  color: var(--secondary-text-color, #575756);
  font-family: var(--main-font-family, 'sans-serif'); 
  font-weight: 800;
}

.compact {
  width: 100%;
  line-height: 31px;
}


.title_uppercase {
  text-transform: uppercase;
  letter-spacing: 5px;
}

.kw-tab-list__title--main-color {
  color: var(--main-color, #0048ff);
  font-size: 19px;
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

.kw-tab-list__picture {
  max-height: 280px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.kw-tab-list .kw-tab-list__panel:focus {
  border-bottom: 4px solid var(--main-color, #0048ff);
  outline: 0;
}

.kw-tab-list__icon-displayed {
  height: 30px;
  width: 30px;
}


.kw-tab--list__link {
  width: 100%;
  box-sizing: border-box;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-family: var(--button-font-family, 'sans-serif');
  font-size: var(--button-font-size, 16px);
  line-height: var(--button-line-height, 10px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  margin-top: 15px;
  }

  .link__collapsible {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .kw-tab--list__link--raised {
    background-color: var(--secondary-color, #0E3540);
    border: 1px solid var(--secondary-color, #0E3540);
    border-radius: 5px;
    color: var(--button-font-color, #FFFFFF);
  }

  .kw-tab--list__link--raised:hover {
    background-color: var(--main-color, #0048ff);
    border-color: var(--main-color, #0048ff);
  }

  .kw-tab--list__link--raised:focus {
    background-color: var(--main-color, #0048ff);
    border-color: var( --secondary-text-color, #575756);
    outline: none;
  }

  .kw-tab-list__subTitle {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 33px;
    text-transform: uppercase;
    color: #4D4D4E;
  }

  .icons_scroll_tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: scroll;
  }

  .icons_scroll_tabs .kw-tab-list__button {
    min-width: var(--button-tab-width-mobile, 150px);
    margin-left: 20px;
    margin-right: 20px;
  }

  .icons_scroll_tabs .kw-tab-list__button[aria-selected="true"],
  .icons_scroll_tabs .kw-tab-list__button:hover,
  .icons_scroll_tabs .kw-tab-list__button:focus {
    border-top: 4px solid var(--main-color, #0048ff);
    outline: 0;
  }
  .icons_scroll_tabs .kw-tab-list__button:not([aria-selected="true"]) {
    border-top: none;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
  }

  @media all and (min-width: 768px) {
    .kw-tab-list__button {
      width: var(--button-tab-width-desktop, 250px)
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
      border-top: 4px solid var(--main-color, #0048ff);
      outline: 0;
    }

    .kw-tab-list__picture {
      padding-left: 75px;
      margin: 0;
      display: inline-block;
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
      width: fit-content;
    }

    .compact {
      margin-bottom: 30px;
      max-width: 850px;
      line-height: 31px;
    }

    .icons_scroll_tabs .kw-tab-list__button {
      min-width:  var(--button-tab-width-desktop, 230px);
      margin-right : 0;
    }

    .panel__scrollTabs .kw-tab-list__picture {
      max-height: 100%;
      display: inline-block;
      padding: 0;
    }
  }
`;
