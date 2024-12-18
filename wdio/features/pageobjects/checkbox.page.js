import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkbox() {
        return $('#checkboxes input:first-of-type');
    }

    /**
     * a method to encapsulate automation code to interact with the page
     * e.g. to login using username and password
     */
    async moveToCheckbox() {
        await this.checkbox.moveTo();
    }

    async positionClick() {
        await browser.actions([
            browser.action('pointer')
                .down()
                .up()
        ]);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('checkboxes');
    }

    async pointerPositionClickWithoutOffset() {
        await browser.actions([
            browser.action('pointer')
                .move({ origin: 'pointer', x: 0, y: 0 })
                .down()
                .up()
        ]);
    }

    async pointerPositionClickWithOffset() {
        const { x, y } = this.checkboxCoordinates;
        await browser.actions([
            browser.action('pointer')
                .move({ origin: 'pointer', x: parseInt(x), y: parseInt(y) })
                .down()
                .up()
        ]);
    }

    async viewportPositionClickWithOffset() {
        const { x, y } = this.checkboxCoordinates;
        await browser.actions([
            browser.action('pointer')
                .move({ origin: 'viewport', x: parseInt(x), y: parseInt(y) })
                .down()
                .up()
        ]);
    }

    async getElementCoordinates(elem) {
        const rect = await browser.execute((element) => {
            const { top, left, bottom, right } = element.getBoundingClientRect();
            return { top, left, bottom, right };
        }, elem);

        const x = (rect.right + rect.left) / 2;
        const y = (rect.top + rect.bottom) / 2;

        return { x, y };
    }

    async rememberCoordinates() {
        const checkbox = await this.checkbox;
        const { x, y } = await this.getElementCoordinates(checkbox);
        this.checkboxCoordinates = { x, y };
    }
}

export default new CheckboxPage();