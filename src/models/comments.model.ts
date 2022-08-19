interface CommentAttributes {
    user_id: string;
    body: string;
    id_user: string;
    id_article: string;
    created_at: string;
    updated_at: string;
    delete_at: string;
}

class Comments implements CommentAttributes{
    user_id!: string;
    body!: string;
    id_user!: string;
    id_article!: string;
    created_at!: string;
    updated_at!: string;
    delete_at!: string;

    constructor(user_id: string, body: string, id_user: string, id_article: string){
        this.user_id = user_id;
        this.body = body;
        this.id_user = id_user;
        this.id_article = id_article;
        this.created_at = new Date().toLocaleDateString();
        this.updated_at = new Date().toLocaleDateString();
        this.delete_at = new Date().toLocaleDateString();
    }
}

export default Comments;