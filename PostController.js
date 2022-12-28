import Post from "./Post.js"

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const post = await Post.create({author, title, content, picture})
            res.json(post) 
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()   //экспортируем объект созданный из класса контроллер