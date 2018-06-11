var fillerDiv = document.querySelector('.filler-text')

const getTextButton = document.querySelector('.get-text-button');
getTextButton.addEventListener('click', (e) => {
    e.preventDefault();
    const textType = document.querySelector('#text-type').value;
    const element = document.querySelector('#element').value;
    const numberOfElements = document.querySelector('#number-of-elements').value;
    const maxWords = document.querySelector('#max-words').value;
    const minWords = document.querySelector('#min-words').value;
    
    randomText(textType, element, minWords, maxWords, numberOfElements);
})


const randomText = (type, element, minWordLength, maxWordLength, numberOfElements) => {
	let url = '';
	if (numberOfElements) {
		url = `https://www.randomtext.me/api/${type}/${element}-${numberOfElements}/${minWordLength}-${maxWordLength}/`;
    } else {
		url = `https://www.randomtext.me/api/${type}/${element}/${minWordLength}-${maxWordLength}/`
        }

	console.log(url);
	fetch(url)
    	.then((res) => res.json())
		.then((html) => {
		    fillerDiv.innerHTML = html.text_out;	
		});
};