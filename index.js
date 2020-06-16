const express 				= require('express');
const app 					= express();
const scrapeAmazonReviews 	= require('./scrapeAmazonReviews');
const cors      			= require('cors');

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
	const code = req.query.code;

	if(code =='') {
		return res.status(404).json({error: 'Please put the product code!'});
	} 

	scrapeAmazonReviews(code)
	    .then(results => {
	        res.status(200);
	        res.json(results);
	    })
	    .catch( (error) => {
	    	res.status(401).json(error);
	    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));