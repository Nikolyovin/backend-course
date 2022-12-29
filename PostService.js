import Post from "./Post.js"
import fileService from "./fileService.js"

class PostService {
//сервис работает только с базой данных; от req res не зависим

    async create(post, picture) {
        const fileName = fileService.saveFile(picture) // записываем на диск и сохраняем имя в бд
        const createPost = await Post.create({ ...post, picture: fileName })
        return  createPost
    }

    async getAll() {
        const posts = await Post.find()
        return posts
       
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const post = await Post.findById(id)
        return post
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан Id')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})                 //{new: true} чтобы вернулся обновленный пост
        return updatedPost
       
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default new PostService()