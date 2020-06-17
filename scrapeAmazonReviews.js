const puppeteer = require('puppeteer');
const userAgent = require('user-agents');

const scrapeAmazonReviews = async (code) => {
	const browser = await puppeteer.launch({
		args : [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		],

		headless: false
	});

	const page = await browser.newPage();
	const userbrowser = new userAgent({ deviceCategory: 'desktop' });

	await page.setUserAgent(userbrowser.toString());
    await page.goto(`https://www.amazon.com/product-reviews/${code}/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&reviewerType=all_reviews&pageNumber=1`);

    let results = [];
    let numPages = await page.$eval('#filter-info-section .a-size-base', a => a.innerText.split(' '));
	let totalPages = await parseInt(numPages[3].replace(/,/g, '') / 10);
	let limitPage = (totalPages >= 10) ? 10 : totalPages;

    // check if the reviews is only below 10
    if(parseInt(numPages[3].replace(/,/g, '')) < 10) {
        await page.waitFor(1000);

        const sections = await page.$$('.review');

        for(let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const reviews = await section.$('.a-section');
            const content = await reviews.$eval('.review-data .review-text-content span', span => span.innerText);
            const rating = await reviews.$eval('.a-link-normal', a => a.title);

            const userReview = {
                rating,
                content
            };

            if(userReview.rating.includes('5.0')) {
                results = await results.concat({ content, rating });
            }
        }
    } else {
        // loop the paginated pages
        for (let index = 0; index < limitPage; index++) {
            // wait 1 sec for page load
            await page.waitFor(1000);
            // call and wait extractedEvaluateCall and concatenate results every iteration.
            // You can use results.push, but will get collection of collections at the end of iteration
            results = results.concat(await extractedEvaluateCall(page));
            // this is where next button on page clicked to jump to another page
            if (index != limitPage - 1) {
                // no next button on last page
                await page.click('.a-last a');
            }
        }

    }

    browser.close();
    return results;
};

async function extractedEvaluateCall(page) {
    return page.evaluate(() => {
        try {
            let data = [];

            let elements = document.querySelectorAll('.review');

            for(let element of elements) {

                let rating = element.childNodes[0].childNodes[0].children[1].innerText;
                let content = element.childNodes[0].childNodes[0].children[4].innerText;

                if(JSON.stringify(rating).includes('5.0')) {
                    data.push({content: JSON.stringify(content), rating: JSON.stringify(rating)});
                }
                
                // const revImage = document.querySelector('.review-image-container');
                // if(!revImage) {

                // }

            }

            return data;

        } catch(err) {
            console.log(err);
        }
    });
}



module.exports = scrapeAmazonReviews;
