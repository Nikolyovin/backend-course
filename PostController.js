import Post from "./Post.js"
import PostService from "./PostService.js"


// в PostController только логика с req res
class PostController {
    async create(req, res) {
        try {
        // req.files.picture тут лежит фото которое мы отправляем
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post) 
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    //получаем пост с помощью сервиса и возвращаем его на клиент 
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)   // e.message потому что мы ошибку создаем через throw new Error в Сервисах
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)                 //{new: true} чтобы вернулся обновленный пост
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()   //экспортируем объект созданный из класса контроллер