import axios from 'axios';

class noteClient {
	constructor() {
		this.noteClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getNote() {
		return this.noteClient.get('/user-profile/').then(response => response.data);
	}

	createNote(note) {
		const { title, content} = note;
		return this.noteClient.post('/user-profile/note/create', { title, content }).then(({ data }) => data);
	}

	editNote(body) {
    const { title,content } = body;
		return this.noteClient.post(`/user-profile/note/${id}/edit`, {title, content}).then(response => response.data);
	}

  deleteNote(body){
    const { title, content} = body;
		return this.noteClient.delete(`/user-profile/note/${id}/delete`, {title, content}).then(response => response.data);

  }
}

const noteClient = new noteClient();
