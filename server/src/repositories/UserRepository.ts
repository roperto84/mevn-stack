import User from '../models/User'

class UserRepository {

    async users() {
        return await User.findAll();
    }

    async getUser (id:number) {
        return await User.findByPk(id);
    }
}

export default new UserRepository;