const { querySelectorAll } = require('./ex11');
const { JSDOM } = require('jsdom');
const { document } = new JSDOM('<!DOCTYPE html>').window;
global.document = document;

test('querySelectorAll handles selectors correctly', () => {
    const parentElement = document.createElement('section');
    parentElement.innerHTML = `
    <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
    <div id="2" class="note"></div>
    <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
    <div id="4" class="note"></div>
    <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>`;

    document.body.appendChild(parentElement);
    const result = querySelectorAll('div.note < input.is-complete[checked]');
    expect(result.length).toBe(3);
});