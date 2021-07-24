import axios from 'axios';

class PostClient {
	constructor() {
		this.postClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getPosts() {
		return this.postClient.get('/user-profile').then(response => response.data);
	}

	createPost(post) {
		const { title, date, description, keywords, theme, creator} = post;
		return this.postClient.post('/user-profile/post/create', { title, date, description, keywords, theme, creator}).then(({ data }) => data);
	}

	editPost(body) {
    const { title, date, description, keywords, theme, creator} = body;
		return this.postClient.post(`/user-profile/${id}/edit`, {title, date, description, keywords, theme, creator}).then(response => response.data);
	}

  deletePost(body){
    const { title, date, description, keywords, theme, creator} = body;
		return this.postClient.delete(`/user-profile/${id}/delete`, {title, date, description, keywords, theme, creator}).then(response => response.data);

  }
}

const postClient = new PostClient();

export default postClient;