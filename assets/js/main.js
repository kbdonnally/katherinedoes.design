if (document.querySelector('.portfolio-wrapper')) {
	const gallery = document.querySelector('.portfolio__gallery');
	const button  = document.querySelector('.portfolio-modal__button');
	let modal 	  = document.querySelector('.portfolio-modal');

	gallery.addEventListener('click', showModal);
	button.addEventListener('click', hideModal);
	modal.addEventListener('click', hideModal);


	function showModal(e) {
		if (e.target.classList.contains('portfolio-pics__img')) {
			console.log(e.target);
			const img 	     = e.target;
			const src 	     = img.src;
			const alt 	     = img.alt
			const caption 	 = img.title;

			let modalImg 	 = document.querySelector('.portfolio-modal__img');
			let modalCaption = document.querySelector('.portfolio-modal__caption');

			modalImg.src = src;
			modalImg.alt = alt;
			modalCaption.innerText = caption;
			modal.classList.add('portfolio-modal--show');
		}
	}

	function hideModal() {
		modal.classList.remove('portfolio-modal--show');
	}
}