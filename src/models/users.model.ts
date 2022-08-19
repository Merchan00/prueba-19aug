interface UserAttributes {
    user_id: string;
    user_name: string;
    password: string;
    bio: string;
    created_at: string;
    updated_at: string;
    delete_at: string;
}

class Users implements UserAttributes{
    user_id!: string;
    user_name!: string;
    password!: string;
    bio!: string;
    created_at!: string;
    updated_at!: string;
    delete_at!: string;

    constructor(user_id: string, user_name: string, password: string, bio: string){
        this.user_id = user_id;
        this.user_name = user_name;
        this.password = password;
        this.bio = bio;
        this.created_at = new Date().toLocaleDateString();
        this.updated_at = new Date().toLocaleDateString();
        this.delete_at = new Date().toLocaleDateString();
    }
}

export default Users;