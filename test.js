const express = require('express');
const app = express();

const puppeteer = require('puppeteer');

app.use(express.json());

app.get('/api', (req, res) => {

	scrape().then((value) => {
	    res.status(200);
	    res.json(value);
	});

});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.amazon.com/product-reviews/B01MDP4PAR/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&reviewerType=all_reviews&pageNumber=1');

    var results = []; // variable to hold collection of all book titles and prices
    var lastPageNumber = 2; // this is hardcoded last catalogue page, you can set it dunamically if you wish
    // defined simple loop to iterate over number of catalogue pages
    for (let index = 0; index < lastPageNumber; index++) {
        // wait 1 sec for page load
        await page.waitFor(1000);
        // call and wait extractedEvaluateCall and concatenate results every iteration.
        // You can use results.push, but will get collection of collections at the end of iteration
        results = results.concat(await extractedEvaluateCall(page));
        // this is where next button on page clicked to jump to another page
        if (index != lastPageNumber - 1) {
            // no next button on last page
            await page.click('.a-last a');
        }
    }

    browser.close();
    return results;
};

async function extractedEvaluateCall(page) {
    return page.evaluate(() => {
        let data = [];

        let elements = document.querySelectorAll('.review');

        for(let element of elements) {
            let rating = element.childNodes[0].childNodes[0].children[1].innerText;
            let title = element.childNodes[0].childNodes[0].children[4].innerText;

            if(rating.includes('5.0')) {
                data.push({title, rating});
            }

        }

        return data;
    });
}
