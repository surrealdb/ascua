const insert = async function(file) {
	return new Promise(resolve => {
		const rdr = new FileReader();
		rdr.onload = (e) => {
			resolve(e.target.result);
		};
		rdr.readAsDataURL(file);
	});
}

export default class Insert {

	constructor(quill, options) {

		this.quill = quill;
		this.handler = options;

	}

	async insert(file) {

		// TODO make this support videos and ensure that files are not embedded unless specifically configured to do so

		if (file.type.match(/^image\/(.*)$/i)) {
			if (typeof this.handler === 'function') {
				const src = await this.handler(file);
				const idx = (this.quill.getSelection() || {}).index;
				if (idx < 0) idx = this.quill.getLength();
				this.quill.insertEmbed(idx, 'image', src, 'user');
			} else if (this.handler === 'embed') {
				const src = await insert(file);
				const idx = (this.quill.getSelection() || {}).index;
				if (idx < 0) idx = this.quill.getLength();
				this.quill.insertEmbed(idx, 'image', src, 'user');
			}
		}

		if (file.type.match(/^audio\/(.*)$/i)) {
			if (typeof this.handler === 'function') {
				const src = await this.handler(file);
				const idx = (this.quill.getSelection() || {}).index;
				if (idx < 0) idx = this.quill.getLength();
				this.quill.insertEmbed(idx, 'audio', src, 'user');
			} else if (this.handler === 'embed') {
				const src = await insert(file);
				const idx = (this.quill.getSelection() || {}).index;
				if (idx < 0) idx = this.quill.getLength();
				this.quill.insertEmbed(idx, 'audio', src, 'user');
			}
		}

		if (file.type.match(/^video\/(.*)$/i)) {
			if (typeof this.handler === 'function') {
				const src = await this.handler(file);
				const idx = (this.quill.getSelection() || {}).index;
				if (idx < 0) idx = this.quill.getLength();
				this.quill.insertEmbed(idx, 'video', src, 'user');
			} else if (this.handler === 'embed') {
				const src = await insert(file);
				const idx = (this.quill.getSelection() || {}).index;
				if (idx < 0) idx = this.quill.getLength();
				this.quill.insertEmbed(idx, 'video', src, 'user');
			}
		}

	}

}
