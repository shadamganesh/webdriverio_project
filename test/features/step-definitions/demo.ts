import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai"; // Import 'expect' as a named export

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com/");
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(`>>> searchItem : ${SearchItem}`);
  let ele = await $(`[name="q"]`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`(//h3)[1]`); // Locate the first h3 element in the search results
  await ele.click();
});

Then(/^URL should match (.*)$/, async function(ExpectedURL){
    console.log(`>>> expectedURL: ${ExpectedURL}`);
    let url = await browser.getUrl();
    expect(url).to.equal(ExpectedURL); // Using the correct expect function

})
