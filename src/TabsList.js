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
       * Tablist HTML Elements
       * @property
       */
      tabList: {
        attribute: false,
      },
      /**
       * Tabs HTML Element
       * @property
       */
      tabs: {
        attribute: false,
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
    };
  }

  static get styles() {
    return [TabsListStyles];
  }

  constructor() {
    super();
    this.data = {};
    this.tabFocus = 0;
    this.tabList = '';
    this.tabs = '';
    this.displayedIcon = 0;

    this.KEYS = {
      left: 37,
      right: 39,
    };
    this._listenEventfromNav = this._listenEventfromNav.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.data = this._HTMLChildren();
    console.log(this.data)
    document.addEventListener('item:selected', this._listenEventfromNav);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('item:selected', this._listenEventfromNav);
  }

  _listenEventfromNav(e) {
    const nameLink = e.detail.name.toLowerCase();
    const element = this.shadowRoot.querySelector(`[data-link="${nameLink}"]`);
    this._changeTab(element);
  }

  addNewLinetext(descriptionText) {
    let paragraphs = [];
    paragraphs = descriptionText.split('\n\n');
    const firstText = paragraphs[0];
    const secondText = paragraphs[1];
    const thirdText = paragraphs[2];

    if (paragraphs.length === 2) {
      return html`
      <p class="compact">${firstText}</p>
      <p class="compact">${secondText}</p>
      `;
    }
    if (paragraphs.length === 3) {
      return html`
      <p class="compact">${firstText}</p>
      <p class="compact">${secondText}</p>
      <p class="compact">${thirdText}</p>
      `;
    }
    return html` <p class="compact">${descriptionText}</p>`;
  }

  _changeTabWithKeyboard({ keyCode }) {
    const isRightKey = keyCode === this.KEYS.right;
    const isLeftKey = keyCode === this.KEYS.left;

    if (isRightKey || isLeftKey) {
      this.tabs[this.tabFocus].setAttribute('tabindex', -1);
      if (isRightKey) {
        this.tabFocus += 1;
        // If we're at the end, go to the start
        if (this.tabFocus >= this.tabs.length) {
          this.tabFocus = 0;
        }
      } else {
        this.tabFocus -= 1;
        // If we're at the start, move to the end
        if (this.tabFocus < 0) {
          this.tabFocus = this.tabs.length - 1;
        }
      }
      this.tabs[this.tabFocus].setAttribute('tabindex', 0);
      this.tabs[this.tabFocus].focus();
    }
  }

  _handleChangeWithMouse(e) {
    this._changeTab(e.currentTarget);
  }

 
  _changeTab(el) {
    if (!this.scrollTabs) {
      window.location = `#${el.id}`;
    }
    const parent = el.parentNode;
    const grandparent = parent.parentNode;

    console.log(el)
    this.displayedIcon = parseInt(el.id.slice(el.id.length - 1));

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

  // eslint-disable-next-line class-methods-use-this
  displayedTabIcon(icon) {
    console.log(icon)
    return html`
      <img class="kw-tab-list__icon-displayed" src="${icon.src}" alt="">\
  `;
  }

  // eslint-disable-next-line class-methods-use-this
 notDisplayedTabIcon(icon) {
    return html`
      <img class="kw-tab-list__icon-displayed"  src="${icon.src}" alt="">\
  `;
  }

  drawIcons(icons) {
    const iconsKeys = Object.keys(icons);
    const iconsArr = [];
    let index = 0;
    iconsKeys.forEach((iconKey) => {
      const icon = icons[iconKey].buttonImage;
      const iconSelected = icons[iconKey].imageIconSelected;
      const iconNotSelected = icons[iconKey].imageIconNotSelected;
      iconsArr.push(html`
        <button role="tab" class="kw-tab-list__button"  aria-selected="${!index}" tabindex="0" aria-controls="panel-${index}" 
                id="${index}" data-link="${iconKey}"
                @click="${this._handleChangeWithMouse}">
          <img src="${icon.src}" alt="${icon.alt}" class="kw-tab-list__image" />
          <span class="kw-tab-list__title ${classMap({ sub_title_uppercase: this.scrollTabs })}">
            ${icon['data-content']}
          </span>
            ${index === this.displayedIcon ? this.displayedTabIcon(iconSelected) : this.notDisplayedTabIcon(iconNotSelected)}
        </button>
      `);
      index += 1;
      console.log(index)
    });
    return iconsArr.map((el) => el);
  }

  drawTabs(tabs) {
    const tabsKeys = Object.keys(tabs);
    const tabsArr = [];
    let index = 0;
    tabsKeys.forEach((tabKey) => {
      const tab = tabs[tabKey];
      tabsArr.push(html`
        <div id="panel-${index}" role="tabpanel" class="kw-tab-list__panel  ${classMap({ panel__scrollTabs: this.scrollTabs })}" tabindex="0" ?hidden=${!!index} aria-label="tab-${index}">
          <div class="kw-tab-list__container">
          ${tab.image ? html`
            <div class="kw-tab-list__info-container ${classMap({ container_max_width: this.scrollTabs })}">
              <h2 class="kw-tab-list__title--orange compact ${classMap({ title_uppercase: this.scrollTabs })}">${tab.title}</h2>
              ${tab.subTitle ? html` <h3 class="kw-tab-list__subTitle">${tab.subTitle}</h3>` : html``}
              ${this.addNewLinetext(tab.description)}
              ${tab.url ? html`
                <a class="kw-tab--list__link kw-tab--list__link--raised ${classMap({ link_text_light: this.hiddenPanel })}" href="${tab.url.href}" ?download="${!!tab.download}" target="_blank" rel="noopener noreferrer">${tab.url.content}</a>` : html``}
            </div>
            <img class="kw-tab-list__picture" src="${tab.image.src}" alt="${tab.image.alt}" />` : html`
            <div class="kw-tab-list__info-container">
              <h2 class="kw-tab-list__title--orange">${tab.title}</h2>
              <p class="kw-tab-list__descrition">${tab.description}</p>
              ${tab.url ? html`
              <a class="kw-tab--list__link kw-tab--list__link--raised ${classMap({ link_text_light: this.hiddenPanel })}" href="${tab.url}" ?download="${!!tab.download}" target="_blank" rel="noopener noreferrer">${tab.linkText}</a>` : html``}
            </div>
            `}
          </div>
        </div>
      `);
      index += 1;
    });
    return tabsArr.map((el) => el);
  }

  drawMobileView(icons, tabs) {
    const iconsKeys = Object.keys(icons);
    const iconsArr = [];
    let index = 0;
    iconsKeys.forEach((iconKey) => {
      const icon = icons[iconKey][0];
      iconsArr.push(html`
          <button role="tab" class="kw-tab-list__button" aria-selected="${!index}" tabindex="0" aria-controls="panel-${index}" 
                  id="${icons[iconKey].iconCapacity}"
                  data-link="${icons[iconKey].iconCapacity}"
                  @click="${this._handleChangeWithMouse}">
            <img src="${icon.src}" alt="${icon.alt}" class="kw-tab-list__image" />
            <span class="kw-tab-list__title">
              ${icon['data-content']}
            </span>
            ${index === this.displayedIcon ? this.displayedTabIcon : this.notDisplayedTabIcon}
          </button>
          <div id="panel-${index}" role="tabpanel" class="kw-tab-list__panel" tabindex="0" ?hidden=${!!index} aria-label="tab-${index}">
            ${tabs[index].image ? html`
              <div class="kw-tab-list__info-container">
                <p class="compact">${tabs[index].description}</p>
                <div class= "kw-tab-list__picture">
                <img  src="${tabs[index].image.src}" alt="${tabs[index].image.alt}" />
                </div>
                  ${tabs[index].url ? html`
                    <a class="kw-tab--list__link kw-tab--list__link--raised" href="${tabs[index].url.href}" ?download="${!!tabs[index].download}" rel="noopener noreferrer">${tabs[index].url.content}</a> ` : html``}
              </div> ` : html``}
          </div>
      `);
      index += 1;
    });
    return iconsArr.map((el) => el);
  }

  drawMobileViewScrollTabs(tabs) {
    const tabsKeys = Object.keys(tabs);
    const tabsArr = [];
    let index = 0;
    tabsKeys.forEach((tabKey) => {
      const tab = tabs[tabKey];
      tabsArr.push(html`
      <div id="panel-${index}" role="tabpanel" class="kw-tab-list__panel" tabindex="0" ?hidden=${!!index} aria-label="tab-${index}">
      ${tab.image ? html`
        <div class="kw-tab-list__info-container ${classMap({ container_max_width: this.scrollTabs })}">
          <h2 class="kw-tab-list__title--orange compact ${classMap({ title_uppercase: this.scrollTabs })}">${tab.title}</h2>
          ${tab.subTitle ? html` 
          <h3 class="kw-tab-list__subTitle">${tab.subTitle}</h3>` : html``}
          <p class="compact">${tab.description}</p>
          <div>
            <img class="kw-tab-list__picture" src="${tab.image.src}" alt="${tab.image.alt}" />
            ${tab.url ? html`
              <a class="kw-tab--list__link kw-tab--list__link--raised  ${classMap({ link_max_width: this.scrollTabs })}"  href="${tab.url.href}" ?download="${!!tab.download}" target="_blank" rel="noopener noreferrer">${tab.url.content}</a>
            ` : html``}
          </div>
        </div>` : html`
        <div class="kw-tab-list__info-container">
          <h2 class="kw-tab-list__title--orange ${classMap({ title_uppercase: this.scrollTabs })}">${tab.title}</h2>
          <p class="kw-tab-list__descrition">${tab.description}</p>
          ${tab.url ? html`
          <a class="kw-tab--list__link kw-tab--list__link--raised" href="${tab.url}" ?download="${!!tab.download}" target="_blank">${tab.linkText}</a>` : html``}
        </div>
      `}
    </div>`);
      index += 1;
    });
    return tabsArr.map((el) => el);
  }

  render() {
    const { icons = [], tabs = [] } = this.data;
    return html`
    <div class="kw-tab-list">
    ${window.innerWidth < 768
    ? html`
      ${this.scrollTabs ? html`
        <div class="kw-tab-list__icons-scroll-tabs" role="tablist" aria-label="¿Qué hacemoshhh?" @keydown="${this._changeTabWithKeyboard}">
          ${this.drawIcons(icons)}
        </div>
        ${this.drawMobileViewScrollTabs(tabs)}
      ` : html`
      <div class="kw-tab-list__icons" role="tablist" aria-label="¿Qué hacemos?" @keydown="${this._changeTabWithKeyboard}">
        ${this.drawMobileView(icons, tabs)}
      </div>`}
    `
    : html` 
      <div class="kw-tab-list__icons ${classMap({ no_color_button: this.scrollTabs })}" role="tablist" aria-label="¿Qué hacemos?" @keydown="${this._changeTabWithKeyboard}">
        ${this.drawIcons(icons)}
      </div>
      ${this.drawTabs(tabs)}
      `}
    </div> 
    `;
  }
}