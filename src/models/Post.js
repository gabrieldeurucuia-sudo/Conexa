// Post Model
// Handles user posts and content

export class Post {
  constructor(data) {
    this.id = data.id;
    this.user_id = data.user_id;
    this.content = data.content;
    this.media = data.media || [];
    this.likes_count = data.likes_count || 0;
    this.comments_count = data.comments_count || 0;
    this.shares_count = data.shares_count || 0;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default Post;
