/*
 * Objective: restore the state of an object to a previous state.
 * Applicability: manipulate and have the ability to restore the state of an object.
 */

// Originator:
class Directory {
	constructor(...files) {
		this.files = files;
	}

	addFile(path) {
		this.files.push(path);
	}

	removeFile(path) {
		const index = this.files.findIndex(path);
		if (index !== -1) return this.files.splice(index, 1);
	}

	sortFiles() {
		this.files.sort();
	}
}

// Memento:
class directoryImage {
	constructor(directory) {
		this.image = JSON.stringify(directory);
	}

	getDirectory() {
		return JSON.parse(this.image);
	}
}

// CaryTaker:
class ImageColection {
	constructor() {
		this.directoryImage = {};
	}

	addDirectoryImage(key, dirImg) {
		this.directoryImage[key] = dirImg;
	}

	removeDirectoryImage(key) {
		delete this.directoryImage[key];
	}

	getDirectoryImage(key) {
		return this.directoryImage[key];
	}
}


function main() {
	const c = new Directory('/projects/.gitignore', '/system/cmd.exe', 'users/public');
	const backups = new ImageColection();

	backups.addDirectoryImage(1, new directoryImage(c));

	c.addFile('videos/my-somersault.mp4');
	backups.addDirectoryImage(2, new directoryImage(c));

	c.addFile('photos/github_avatar');

	console.log(c);
	
	console.log(backups.getDirectoryImage(1));
	console.log(backups.getDirectoryImage(2));
}

main();
