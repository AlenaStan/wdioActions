import { Given, When, Then } from '@wdio/cucumber-framework';
import { $, browser } from '@wdio/globals'
import { expect } from 'chai';
import CheckboxPage from '../pageobjects/checkbox.page.js';

const pages = {
    checkbox: CheckboxPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When('I wait {int} second(s)', { timeout: 35 * 60 * 1000 }, async function (seconds) {
    return browser.pause(seconds * 1000);
});

When('I remember checkbox coordinates', { timeout: 35 * 60 * 1000 }, async function () {
    return await CheckboxPage.rememberCoordinates();
});

When('I move mouse over checkbox', async function () {
    return await CheckboxPage.moveToCheckbox();
});

When('I click on current pointer position', async function () {
    return await CheckboxPage.positionClick();
});

Then('I should see a checkbox checked', async () => {
    const checkbox = CheckboxPage.checkbox
    const isChecked = await checkbox.isSelected();
    expect(isChecked).to.be.true;
});

When('I click on current pointer position without offset', async function () {
    return await CheckboxPage.pointerPositionClickWithoutOffset();
});

When('I click on current pointer position with offset element coordinates', async function () {
    return await CheckboxPage.pointerPositionClickWithOffset();
});

When('I click on viewport with offset element coordinates', async function () {
    return await CheckboxPage.viewportPositionClickWithOffset();
});