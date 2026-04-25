import userRepository from "../repositories/userRepository.js";

class UserService {
    async getUsers() {
        return await userRepository.findAll();
    }
    async getUserById(userId) {
        return await userRepository.findById(userId);
    }
}

export default new UserService();