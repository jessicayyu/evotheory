import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | genes', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('.nav.link').hasText('Home');
    assert.dom('#evotheory').hasText('Tamagotchi Evolutionary Theory');

    await click('#evotheory');
  
    assert.equal(currentURL(), '/genes');
  });

});
