const puppeteer = require('puppeteer');
const userAgent = require('user-agents');

const searchAmazon = async (search) => {
	const browser = await puppeteer.launch({
		args : [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		],

		headless: true
	});

	const page = await browser.newPage();
	const userbrowser = new userAgent({ deviceCategory: 'desktop' });
	
    await page.setUserAgent(userbrowser.toString());
    await page.goto(`https://www.amazon.com/s/?field-keywords=${search}`);

    let results = [];

    await page.waitFor(1000);
    results = results.concat(await extractedEvaluateCall(page));

    browser.close();
    return results;
}

async function extractedEvaluateCall(page) {
    return page.evaluate(() => {
        try {
            let data = [];

            let elements = document.querySelectorAll(".s-asin");

            for(element of elements) {
                let asin = element.dataset.asin;
                let ratings = element.childNodes[0].childNodes[2].parentNode.innerText;

                data.push({ asin, ratings: parseInt(ratings.split(" ").pop()) });
            }

            return data;

        } catch(err) {
            console.log(err);
        }
    });
}

module.exports = searchAmazon;