export default class Import {

	constructor(quill) {

		this.quill = quill;

		this.didDrop = this.didDrop.bind(this);

		this.quill.root.addEventListener('drop', this.didDrop, false);

	}

	didDrop(e) {

		e.preventDefault();

		if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {

			if (document.caretRangeFromPoint) {
				const sel = document.getSelection();
				const rng = document.caretRangeFromPoint(e.clientX, e.clientY);
				if (sel && rng) {
					sel.setBaseAndExtent(rng.startContainer, rng.startOffset, rng.startContainer, rng.startOffset);
				}
			}

			[].forEach.call(e.dataTransfer.files, file => {

				if (file.type.match(/^image\/(gif|jpg|jpeg|png|apng|svg|webp|bmp)$/i)) {

					const r = new FileReader();

					r.onload = (e) => {
						const idx = this.quill.getSelection().index;
						this.quill.insertEmbed(idx, 'image', e.target.result, 'user');
					};

					r.readAsDataURL(file);

				}

			});

		}

	}

}
