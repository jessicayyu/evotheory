import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toggle-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <ToggleButton/>
    `);
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });

  //   await render(hbs`<ToggleButton />`);

  //   assert.equal(this.element.textContent.trim(), '');

  //   // Template block usage:
  //   await render(hbs`
  //     <ToggleButton>
  //       template block text
  //     </ToggleButton>
  //   `);

  //   assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
