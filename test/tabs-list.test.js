/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import '../tabs-list';
import sinon from 'sinon';

describe('TabsList', () => {
  it('should have the basic template', async () => {
    const el = await fixture(
      html`
      <tabs-list img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" break-line-separator = ";" >
      <div data-id="icons">
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
        </button>
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
        </button>
      </div>
      <div id="tabs">
        <div>
          <h3 data-id="title">titletab1</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
        <div>
          <h3 data-id="title">titletab2</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
      </div>
    </tabs-list>
      `
    );
    const base = el.shadowRoot.querySelector('.tabs-list');
    expect(base).not.to.be.null;
  });

  it('should have the basic template', async () => {
    const el = await fixture(
      html`
      <tabs-list img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" >
      <div data-id="icons">
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
        </button>
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
        </button>
      </div>
      <div id="tabs">
        <div>
          <h3 data-id="title">titletab1</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
        <div>
          <h3 data-id="title">titletab2</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
      </div>
    </tabs-list>
      `
    );
    const base = el.shadowRoot.querySelector('.tabs-list');
    expect(base).not.to.be.null;
  });

  it('should have the basic mobile template', async () => {
    window.innerWidth = 300;
    const el = await fixture(
      html`
      <tabs-list collapsible-tabs="true" img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" >
      <div data-id="icons">
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
        </button>
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
        </button>
      </div>
      <div id="tabs">
        <div>
          <h3 data-id="title">titletab1</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
        <div>
          <h3 data-id="title">titletab2</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
      </div>
    </tabs-list>
      `
    );
    const base = el.shadowRoot.querySelector('.tab-list__icons-mobile-view');
    expect(base).not.to.be.null;
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
    < <tabs-list img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" break-line-separator = ";" >
    <div data-id="icons">
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
      </button>
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
      </button>
    </div>
    <div id="tabs">
      <div>
        <h3 data-id="title">titletab1</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
      <div>
        <h3 data-id="title">titletab2</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur.; Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
    </div>
  </tabs-list>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });

  it('User click on menu: Called _handleChangeWithMouse method', async () => {
    const el = await fixture(
      html`
      < <tabs-list img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" break-line-separator = ";" >
      <div data-id="icons">
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
        </button>
        <button>
          <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
        </button>
      </div>
      <div id="tabs">
        <div>
          <h3 data-id="title">titletab1</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
        <div>
          <h3 data-id="title">titletab2</h3>
          <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur.; Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
          <img data-id="image" src="" alt=""/>
          <a data-id="url" href="/">linktab</a>
          <div data-id="download"></div>
        </div>
      </div>
    </tabs-list>
      `
    );
   
    const element = el.shadowRoot.querySelector('#tab-2')
    const spy = sinon.spy(el, '_handleChangeWithMouse' );
    element.click();
    expect(spy.called);
});

it('User click on menu: Called _changeTabWithKeyboard method to go right', async () => {
  const el = await fixture(
    html`
    < <tabs-list img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" break-line-separator = ";" >
    <div data-id="icons">
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
      </button>
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
      </button>
    </div>
    <div id="tabs">
      <div>
        <h3 data-id="title">titletab1</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
      <div>
        <h3 data-id="title">titletab2</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur.; Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
    </div>
  </tabs-list>
    `
  );
 
  const spy = sinon.spy();
  el._changeTabWithKeyboard({keyCode: 39});
  expect(spy.called);
  const elementNotSelected = el.shadowRoot.querySelector(`#panel-0`);
  const elementSelected = el.shadowRoot.querySelector(`#panel-1`);
  expect(elementNotSelected.hidden).to.be.true;
  expect(elementSelected.hidden).to.be.false;
});

it('User click on menu: Called _changeTabWithKeyboard method to go left', async () => {
  const el = await fixture(
    html`
    < <tabs-list img-icon-selected="/demo/assets/arrow-open.svg" img-icon-not-selected="/demo/assets/plus-circle.svg" break-line-separator = ";" >
    <div data-id="icons">
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab1" id="tab-1"/>
      </button>
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab2" id="tab-2"/>
      </button>
      <button>
        <img data-id="iconImage" src="/demo/assets/person1.svg" alt="abre" data-content="tab3" id="tab-3"/>
      </button>
    </div>
    <div id="tabs">
      <div>
        <h3 data-id="title">titletab1</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.; Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum perferendis, nihil molestias consectetur illo enim perspiciatis molestiae mollitia quis veritatis suscipit iste necessitatibus dolorum hic fugit, sunt ut minus.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
      <div>
        <h3 data-id="title">titletab2</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur.; Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
      <div>
        <h3 data-id="title">titletab3</h3>
        <div data-id="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veniam eius ratione ab corporis sint mollitia, delectus nisi magni consequatur. Animi voluptatem neque odit ea quam soluta necessitatibus at facilis.</div>
        <img data-id="image" src="" alt=""/>
        <a data-id="url" href="/">linktab</a>
        <div data-id="download"></div>
      </div>
    </div>
  </tabs-list>
    `
  );
 
  const spy = sinon.spy();
  el._changeTabWithKeyboard({keyCode: 37});
  expect(spy.called);
  const elementNotSelected = el.shadowRoot.querySelector(`#panel-0`);
  const elementSelected = el.shadowRoot.querySelector(`#panel-2`);

  expect(elementNotSelected.hidden).to.be.true;
  expect(elementSelected.hidden).to.be.false;
});


});
