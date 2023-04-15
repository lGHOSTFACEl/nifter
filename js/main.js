//* mobile menu
const menuButton = document.querySelectorAll('.mobile__menu-button');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile__menu');
const menuTop = document.querySelector('.mobile__menu-top');

menuButton.forEach(function (menuButton) {
	menuButton.addEventListener('click', function () {
		overlay.style.display = 'block';
		mobileMenu.classList.remove('none');
	});
});

overlay.addEventListener('click', function () {
	overlay.style.display = 'none';
	mobileMenu.classList.add('none');
});

let prevScrollPosition = window.pageYOffset;

window.addEventListener('scroll', function () {
	const currentScrollPosition = window.pageYOffset;

	if (
		currentScrollPosition < prevScrollPosition ||
		currentScrollPosition < 50
	) {
		menuTop.style.display = 'flex';
		menuTop.style.position = 'fixed';
		menuTop.style.top = '0';
		menuTop.style.opacity = '1';
	} else {
		menuTop.style.opacity = '0';
	}

	prevScrollPosition = currentScrollPosition;
});

window.addEventListener('touchmove', function () {
	if (mobileMenu.classList.contains('none') === false) {
		overlay.style.display = 'none';
		mobileMenu.classList.add('none');
	}
});

//*	clear search form
const searchButton = document.getElementById('header__btn-search');
const searchInput = document.querySelector('.search');
const body = document.querySelector('body');
//	clear search form PC
searchButton.addEventListener('click', function () {
	searchInput.value = '';
});

//	clear search form Phone
searchInput.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		searchInput.value = '';
	}
});

//* Remaining amount of time before the drop
document.addEventListener('DOMContentLoaded', function () {
	const deadline = new Date(3000, 04, 22);

	let timerId = null;

	function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}

		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		$hours.textContent = hours < 10 ? '0' + hours : hours;
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
	}

	const $hours = document.querySelector('#hours');
	const $minutes = document.querySelector('#mins');
	const $seconds = document.querySelector('#secs');

	countdownTimer();

	timerId = setInterval(countdownTimer, 1000);
});

//* Withdraw the ethereum exchange rate
const ethRateElement = document.getElementById('eth-rate');

fetch(
	'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
)
	.then((response) => response.json())
	.then((data) => {
		const ethRate = data.ethereum.usd * 9;

		ethRateElement.textContent = `$${ethRate.toFixed(2)}`;
	})
	.catch((error) => console.error(error));

//*seller menu
const sellerMenuBtn = document.querySelector('#seller__menu');
const sellerNav = document.querySelector('.seller__header-nav');

sellerMenuBtn.addEventListener('click', function (e) {
	e.stopPropagation();
	if (sellerMenuBtn.classList.toggle('seller__menu-active')) {
		sellerNav.classList.add('seller__header-nav-active');
	} else {
		sellerNav.classList.remove('seller__header-nav-active');
	}
});

document.addEventListener('click', function (e) {
	if (!sellerNav.contains(e.target)) {
		sellerMenuBtn.classList.remove('seller__menu-active');
		sellerNav.classList.remove('seller__header-nav-active');
	}
});

const liElements = document.querySelectorAll('.seller__header-nav ul li');
const buttonElement = document.getElementById('seller__menu');
const arrowElement = buttonElement.querySelector('img');

liElements.forEach((li) => {
	li.addEventListener('click', () => {
		const liText = li.textContent;
		const buttonText = buttonElement.textContent;

		li.textContent = buttonText;
		buttonElement.textContent = liText;

		buttonElement.appendChild(arrowElement);
	});
});
//*	Adding a friend
const youFriends = document.querySelectorAll('.you-friend');
const youFriendName = document.querySelectorAll('.seller__grid-name');

youFriends.forEach((youFriend) => {
	youFriend.addEventListener('click', addFriend);
});

function addFriend(e) {
	e.target.src = 'image/soc-icons/friend-added.svg';
	const sellerGridTitle = e.target
		.closest('.seller__grid-block')
		.querySelector('.seller__grid-name');
	sellerGridTitle.classList.add('friend-added');
}

//* active for artworks links
const links = document.querySelectorAll('.artworks__link');
links.forEach(function (link) {
	link.addEventListener('click', function () {
		links.forEach(function (link) {
			link.classList.remove('active');
		});
		this.classList.add('active');
	});
});

//* animation for artwork content
const artworkBlock = document.querySelectorAll('.artwork__content-block');

for (let i = 0; i < artworkBlock.length; i++) {
	artworkBlock[i].addEventListener('mouseover', () => {
		for (let j = 0; j < artworkBlock.length; j++) {
			if (j !== i) {
				artworkBlock[j].classList.add('dim');
			}
		}
	});

	artworkBlock[i].addEventListener('mouseout', () => {
		for (let j = 0; j < artworkBlock.length; j++) {
			if (j !== i) {
				artworkBlock[j].classList.remove('dim');
			}
		}
	});
}

//* send email creator
const creatorInput = document.querySelector('#creator-input');
const creatorButton = document.querySelector('.creator__get-started');
const errorMessage = document.querySelector('.creator__error-message');
const checkEmail = document.getElementById('check-email');

creatorInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		const email = creatorInput.value;
		if (!isValidEmail(email)) {
			checkEmail.classList.remove('creator__valid-email');
			checkEmail.classList.add('creator__error-email');
			checkEmail.textContent = 'Please enter a valid email address';
		} else {
			checkEmail.classList.remove('creator__error-email');
			checkEmail.classList.add('creator__valid-email');
			checkEmail.textContent = 'Your email address has been sent';
			console.log(email);
		}
	}
});

creatorButton.addEventListener('click', function (event) {
	event.preventDefault();
	const email = creatorInput.value;
	if (!isValidEmail(email)) {
		checkEmail.classList.add('creator__error-email');
		checkEmail.textContent = 'Please enter a valid email address';
		checkEmail.classList.remove('creator__valid-email');
	} else {
		checkEmail.classList.add('creator__valid-email');
		checkEmail.textContent = 'Your email address has been sent';
		checkEmail.classList.remove('creator__error-email');
		console.log(email);
	}
});

function clearInput() {
	creatorInput.value = '';
}

function isValidEmail(email) {
	return email.includes('@') && email.includes('.');
}

//* like nft
let likeState = {};

function updateLikeState(image, isLiked) {
	const id = image.dataset.id;
	likeState[id] = isLiked;
}

function initLikes() {
	const likeElements = document.querySelectorAll('.auction__nft-likes');

	likeElements.forEach(function (likeElement) {
		const image = likeElement.querySelector('img');
		const id = image.dataset.id;

		let isLiked = likeState[id] || false;

		if (isLiked) {
			image.src = 'image/live-auction/auction-liked.svg';
		}

		image.addEventListener('click', function () {
			if (!isLiked) {
				image.src = 'image/live-auction/auction-liked.svg';
				isLiked = true;
			} else {
				image.src = 'image/live-auction/auction-likes.svg';
				isLiked = false;
			}

			updateLikeState(image, isLiked);
			localStorage.setItem(`liked_${id}`, isLiked);
		});

		updateLikeState(image, isLiked);
	});
}

document.addEventListener('DOMContentLoaded', function () {
	initLikes();
});

// swiper.on('slideChange', function () {
// 	initLikes();
// });