import axios from 'axios';

class PostClient {
	constructor() {
		this.postClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getPosts() {
		return this.postClient.get('/user-profile/posts').then(response => response.data);
	}

	getSinglePost(id) {
		return this.postClient.get(`/user-profile/posts/${id}`).then(response => response.data);
	}

	createPost(post) {
		// This route is okay though I think the date was automatically filled by the backend (date.now()?) 
		const { title, description, keywords, theme, imageUrl } = post;
		return this.postClient.post('/user-profile/post/create', { title, description, keywords, theme, imageUrl }).then(({ data }) => data);
	}

	editPost(body, id) {
		// Here editPost will have to bring both editPost(body,id) so that you can pass the id to the backend params
    const { title, date, description, keywords, theme, creator } = body;
		// Right now this id is not coming from anywhere
		return this.postClient.post(`/user-profile/${id}/edit`, {title, date, description, keywords, theme, creator, id}).then(response => response.data);
	}

  deletePost(id){
		return this.postClient.delete(`/user-profile/post/${id}/delete`).then(response => response.data);
  }
}

const postClient = new PostClient();

export default postClient;