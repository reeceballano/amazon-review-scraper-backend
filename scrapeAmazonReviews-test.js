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


	let results = []; // variable to hold collection of all book titles and prices

	let lastPageNumber = 2; // this is hardcoded last catalogue page, you can set it dunamically if you wish
	// defined simple loop to iterate over number of catalogue pages
	for (let index = 0; index < lastPageNumber; index++) {

		// wait 1 sec for page load
		await page.waitFor(1000);

		// call and wait extractedEvaluateCall and concatenate results every iteration.
		// You can use results.push, but will get collection of collections at the end of iteration

		// results = results.concat(await extractedEvaluateCall(page));

		// results = results.push(await extractedEvaluateCall(page));

		let new_results = await extractedEvaluateCall(page);

		results = { ...results,  ...new_results };

		// console.log(await extractedEvaluateCall(page));
		// this is where next button on page clicked to jump to another page
		if (index != lastPageNumber - 1) {
			// no next button on last page
			await page.click('.a-last a');
		}
	}

	return results;
	await browser.close();



	// let data = [];

	// for(let i = 0; i < sections.length; i++) {
	// 	const section = sections[i];
	// 	const reviews = await section.$('.a-section');
	// 	const content = await reviews.$eval('.review-data .review-text-content span', span => span.innerText);
	// 	const rating = await reviews.$eval('.a-link-normal', a => a.title);

	// 	const userReview = {
	// 		rating,
	// 		content
	// 	};

	// 	// LOAD ALL REVIEWS
	// 	for(let i = 1; i < 5; i++) {
	// 		// CLICK THE NEXT BUTTON
	// 		await page.$eval( '.a-last a', a => a.click() );

	// 		// LETS FILTER ONLY THE 4 & 5 REVIEWS
	// 		if(userReview.rating.includes('5.0')) {

	// 			await data.push({ userReview });
	// 		}
			
			
	// 	}

	// }

	// return data;

	// await browser.close();
};

async function extractedEvaluateCall(page) {
	// just extracted same exact logic in separate function
	// this function should use async keyword in order to work and take page as argument
	return page.evaluate(() => {
		let data = [];
		const sections = document.querySelectorAll('.review');

		for(let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const content = section.$eval('.review-data .review-text-content span', span => span.innerText);

			const userReview = {
				content
			};

			data.push({ userReview });


		}

		return data;
	});
}

module.exports = scrapeAmazonReviews;