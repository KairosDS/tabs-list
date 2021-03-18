import { html, LitElement } from 'lit-element';
import { TabsListStyles } from './tabs-list-style';
import { classMap } from 'lit-html/directives/class-map';
import { HTMLChildrenMixin } from './HTMLChildrenMixin';

/**
 * `tabs-list`
 * TabsList
 *
 * @customElement tabs-list
 * @litElement
 * @demo demo/index.html
 */

export class TabsList extends HTMLChildrenMixin(LitElement) {
  static get is() {
    return 'tabs-list';
  }

  static get properties() {
    return {
      /**
       * data from json
       * @property
       */
      data: {
        attribute: false,
      },
      /**
       * Tab with focus
       * @property
       */
      tabFocus: {
        attribute: false,
      },
      /**
       * Img icon selected tab
       * @property
       */
        imgIconSelected: {
        attribute: 'img-icon-selected',
      },
      /**
       * Img icon not selected tab
       * @property
       */
       imgIconNotSelected: {
        attribute: 'img-icon-not-selected',
      },
      /**
       * Displayed icon tab HTML Element
       * @property
       */
      displayedIcon: {
        attribute: false,
      },
      /**
       * Bolean if icons tabs has scroll
       * @type Bolean
       * @property
       */
      scrollTabs: {
        type: Boolean,
        attribute: 'scroll-tabs',
      },
      /**
       * Bolean if icons tabs has scroll
       * @type Bolean
       * @property
       */
       collapsibleTabs: {
        type: Boolean,
        attribute: 'collapsible-tabs',
      },
      /**
       * Bolean if icons tabs has scroll
       * @type Syting
       * @property
       */
       listenOutsideEvent: {
        type: String,
        attribute: 'listen-outside-event',
      },
      /**
       * String  used like a separator to add break line in paragraps
       * @type String
       * @property
       */
       breakLineSeparator: {
        type: String,
        attribute: 'break-line-separator',
      },
    };
  }

  static get styles() {
    return [TabsListStyles];
  }

  constructor() {
    super();
    this.data = {};
    this.tabFocus = 0;
    this.displayedIcon = 0;
    this.listenOutsideEvent= '';
    this.collapsibleTabs = false;
    this.breakLineSeparator = '';

    this.KEYS = {
      left: 37,
      right: 39,
    };
    this._listenEventfromOutside = this._listenEventfromOutside.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.data = this._HTMLChildren();
    document.addEventListener(`${this.listenOutsideEvent}`, this._listenEventfromOutside);
    
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(`${this.listenOutsideEvent}`, this._listenEventfromOutside);
  }

  _listenEventfromOutside(e) {
    const nameLink = e.detail.name.toLowerCase();
    const element = this.shadowRoot.querySelector(`[data-link="${nameLink}"]`);
    this._changeTab(element);
  }

  addNewLinetext(descriptionText) {
    let template;
    if (this.breakLineSeparator) {
      const paragraphs = descriptionText.split(this.breakLineSeparator);
      template = paragraphs.map((el)=>{
        return html`<p class="compact">${el}</p>`
      });
    } else {
        template =  html`<p class="compact">${descriptionText}</p>`
      return template;
    } 
    return template;
  }

  _changeTabWithKeyboard({ keyCode }) {
    const isRightKey = keyCode === this.KEYS.right;
    const isLeftKey = keyCode === this.KEYS.left;
    const ObjectTabsKeys = Object.keys(this.data.tabs).length
    if (isRightKey || isLeftKey) {
      if (isRightKey) {
        this.tabFocus += 1;
        // If we're at the end, go to the start
        if (this.tabFocus >= ObjectTabsKeys) {
          this.tabFocus = 0;
        }
      } else {
        this.tabFocus -= 1;
        
        // If we're at the start, move to the end
        if (this.tabFocus < 0) {
          this.tabFocus = ObjectTabsKeys - 1;
        }
      }
      const tabSelectFocus = this.shadowRoot.querySelector(`[data-index="${this.tabFocus}"]`)
      this._changeTab(tabSelectFocus)
    }
  }

  _handleChangeWithMouse(e) {
    this._changeTab(e.currentTarget);
  }

 
  _changeTab(el) {

    if (this.listenOutsideEvent) {
      window.location.hash = `#${el.id}`;
    }
    const parent = el.parentNode;
    const grandparent = parent.parentNode;

    this.displayedIcon =parseInt(el.getAttribute('data-index'));

    // Remove all current selected tabs
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach((tab) => tab.setAttribute('aria-selected', false));

    // Set this tab as selected
    el.setAttribute('aria-selected', true);

    // Hide all tab panels
    grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach((panel) => panel.setAttribute('hidden', true));

    // Show the selected panel
    grandparent
      .querySelector(`#${el.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');
  }

  get displayedTabIcon() {
    return html`
      <img class="tab-list__icon-displayed" src="${this.imgIconSelected}" alt="Selcted">\
  `;
  }

 get notDisplayedTabIcon() {
    return html`
      <img class="tab-list__icon-displayed"  src="${this.imgIconNotSelected}" alt="Not selected">\
  `;
  }

  drawIcons(icons) {
    const iconsKeys = Object.keys(icons);
    const iconsArr = [];
    iconsKeys.forEach((iconKey, index) => {
      const icon = icons[iconKey].iconImage;
      const iconId = icon['data-id']
      iconsArr.push(html`
        <button role="tab" class="tab-list__button"  aria-selected="${!index}" tabindex="0"  
          aria-controls="panel-${index}" data-index ="${index}"
          id="${iconId}" data-link="${iconId}"
          @click="${this._handleChangeWithMouse}">
          <img class="tab-list__image" src="${icon.src}" alt="${icon.alt}"/>
          <span class="tab-list__title">
            ${icon['data-content']}
          </span>
            ${index === this.displayedIcon ? this.displayedTabIcon : this.notDisplayedTabIcon}
        </button>
      `);
    });
    return iconsArr.map((el) => el);
  }

  drawTabs(tabs) {
    const tabsKeys = Object.keys(tabs);
    const tabsArr = [];
    tabsKeys.forEach((tabKey, index) => {
      const tab = tabs[tabKey];
      tabsArr.push(html`
        <div id="panel-${index}" role="tabpanel" class="tab-list__panel" tabindex="0" ?hidden=${!!index} aria-label="tab-${index}">
          <div class="tab-list__container">
            <div class="tab-list__info-container">
              <h2 class="tab-list__title--main-color ${classMap({ title_uppercase: this.scrollTabs })}">${tab.title}</h2>
              ${tab.subTitle ? html` <h3 class="tab-list__subTitle">${tab.subTitle}</h3>` : ''}
              ${this.addNewLinetext(tab.description)}
              ${tab.url ? html`
                <a class="tab--list__link tab--list__link--raised" href="${tab.url.href}" ?download="${!!tab.download}" target="_blank" rel="noopener noreferrer">${tab.url.content}</a>` : ''}
            </div>
            ${tab.image ? html`<img class="tab-list__picture" src="${tab.image.src}" alt="${tab.image.alt}" />` : ''}
          </div>
        </div>
      `);
    });
    return tabsArr.map((el) => el);
  }

  drawMobileView(icons, tabs) {
    const iconsKeys = Object.keys(icons);
    const iconsArr = [];
    iconsKeys.forEach((iconKey, index) => {
      const icon = icons[iconKey].iconImage;
      const iconId = icon['data-id']
      iconsArr.push(html`
          <button role="tab" class="tab-list__button" aria-selected="${!index}" tabindex="0" aria-controls="panel-${index}" 
              id="${iconId}" 
              data-link="${iconKey}"
              data-index="${index}"
              @click="${this._handleChangeWithMouse}">
            <img src="${icon.src}" alt="${icon.alt}" class="tab-list__image" />
            <span class="tab-list__title">
              ${icon['data-content']}
            </span>
            ${index === this.displayedIcon ? this.displayedTabIcon : this.notDisplayedTabIcon}
          </button>
          <div id="panel-${index}" role="tabpanel" class="tab-list__panel" tabindex="0" ?hidden=${!!index} aria-label="tab-${index}">
            ${tabs[iconKey].image ? html`
              <div class="tab-list__info-container">
              ${this.addNewLinetext(tabs[iconKey].description)}
              ${tabs[iconKey].image ? html`<img class="tab-list__picture" src="${tabs[iconKey].image.src}" alt="${tabs[iconKey].image.alt}" />` : ''}
                  ${tabs[iconKey].url ? html`
                    <a class="tab--list__link tab--list__link--raised link__collapsible" href="${tabs[iconKey].url.href}" ?download="${!!tabs[iconKey].download}" rel="noopener noreferrer">${tabs[iconKey].url.content}</a> ` : ''}
              </div> ` : ''}
          </div>
      `);
    });
    return iconsArr.map((el) => el);
  }


  render() {
    const { icons = [], tabs = [] } = this.data;
    return html`
    <div class="tabs-list"> 
    ${this.collapsibleTabs && window.innerWidth < 764 ? html`
        <div class="tab-list__icons tab-list__icons-mobile-view" role="tablist" aria-label="¿Qué hacemos?" @keydown="${this._changeTabWithKeyboard}">
        ${this.drawMobileView(icons, tabs)}
        </div>` : html` 
        <div class="tab-list__icons ${classMap({ icons_scroll_tabs: this.scrollTabs })}" role="tablist" aria-label="¿Qué hacemos?" @keydown="${this._changeTabWithKeyboard}">
          ${this.drawIcons(icons)}
        </div>
        ${this.drawTabs(tabs)}
    </div> `}
    `;
  }
}


