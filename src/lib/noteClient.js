import axios from 'axios';

class NoteClient {
	constructor() {
		this.noteClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getNotes() {
		return this.noteClient.get('/user-profile/notes').then(response => response.data);
	}

  getSingleNote(id) {
    		return this.noteClient.get(`/user-profile/notes/${id}`).then(response => response.data);

  }

	createNote(note) {
		const { title, content} = note;
		return this.noteClient.post('/user-profile/note/create', { title, content }).then(({ data }) => data);
	}

	editNote(body, id) {
    const { title,content, posts } = body;
		return this.noteClient.post(`/user-profile/note/${id}/edit`, {title, content, posts, id}).then(response => response.data);
	}

  deleteNote(id){
		return this.noteClient.delete(`/user-profile/note/${id}/delete`).then(response => response.data);

  }
}

const noteClient = new NoteClient();

export default noteClient;
