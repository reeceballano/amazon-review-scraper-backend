const puppeteer = require('puppeteer');
const userAgent = require('user-agents');

const scrapeAmazonReviews = async() => {
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
	await page.goto(`https://www.amazon.com/product-reviews/B01MDP4PAR/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&reviewerType=all_reviews&pageNumber=1`);
	await page.waitForSelector('.review-views');

	const sections = await page.$$('.review');
	let data = [];


	// LOAD ALL REVIEWS
	for(let i = 1; i < 2; i++) {
		await page.waitFor(3000);
		// CLICK THE NEXT BUTTON
		const nextBtn = await page.$( '.a-last a');
		await page.$eval( '.a-last a', a => a.click() );

		if(nextBtn) {

			for(let i = 0; i < sections.length; i++) {
				const section = sections[i];
				const reviews = await section.$('.a-section');
				const content = await reviews.$eval('.review-data .review-text-content span', span => span.innerText);
				const rating = await reviews.$eval('.a-link-normal', a => a.title);

				const userReview = {
					rating,
					content
				};

				// LETS FILTER ONLY THE 4 & 5 REVIEWS
				
				await data.push({ userReview });
				// if(userReview.rating.includes('5.0')) {
				// }
			}
		}
		
	}


	return data;

	await browser.close();
};

module.exports = scrapeAmazonReviews;
