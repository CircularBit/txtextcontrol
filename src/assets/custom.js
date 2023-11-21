function saveDocument() {
	TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
			function (e) {
					console.log(e.data);
			});
}

function loadDocument() {
	// Prompt the user to select a file
	const input = document.createElement('input');
	input.type = 'file';

	input.addEventListener('change', function(e) {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = function(e) {
			const contents = e.target.result;
			// Process the contents of the file here
			console.log(contents);

			// TXTextControl.loadDocument(
			// 	TXTextControl.StreamType.MSWord,
			// 	TXTextControl.btoaUTF8(contents)
			// );

			TXTextControl.load(
				TXTextControl.StreamType.MSWord,
				TXTextControl.btoaUTF8(contents)
			);
		};

		reader.readAsText(file);
	});

	input.click();
}