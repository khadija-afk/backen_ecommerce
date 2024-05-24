import { Article, User } from '../models/index.js';

export const add = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(404).json({ error: "Utilisateur non trouvé" })
        }
        // On crée un nouvel article avec les informations reçues dans le corps de la requête
        const article = await user.createArticle(req.body)
        // On renvoie le nouvel article avec un statut 201
        res.status(201).json(article)
    } catch (err) {
        // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
        res.status(500).json({ error: "Error lors de la création ! 😭" })
    }
}

export const getAll = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json({ error: "Error lors de la récupération" });
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findByPk(id);
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json({ error: "Error lors de la récupération" });
    }
}

export const updateById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article.UserId === req.user.id) {
            await article.update(req.body);
            return res.status(200).json(article);
        } else {
            return res.status(403).json({ error: "Seul le créateur peut modifier !" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error lors de la récupération" });
    }
}

export const deleteById = async (req, res) => {
    try {
        // On récupère l'article par son id
        const article = await Article.findByPk(req.params.id)
        console.log("ID de l'utilisateur demandant la suppression :", req.user.id);
        console.log("ID de l'utilisateur associé à l'article :", article.UserId);



        // On vérifie que l'utilisateur qui fait la requête est bien l'utilisateur qui a créé l'article
        if (article.UserId === req.user.id) {
            
            // On supprime l'article
            await article.destroy();
            // await Article.destroy({
            //     where: {
            //         id: req.params.id
            //     }
            // })
            // On renvoie un message de confirmation avec un statut 200
            res.status(200).json("Article deleted ! ")
        } else {
            // Si l'utilisateur qui fait la requête n'est pas l'utilisateur qui a créé l'article, on renvoie un statut 403
            return res.status(403).json({ error: "Seul le créateur peut supprimer !" })
        }
    } catch (err) {
        // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
        res.status(500).json({ error: "Error lors de la récupération" })
    }
}


export const getByAsc = async (req, res) => {
    try {
        const articles = await Article.findAll({
            order: [
                ["price", 'ASC']
            ]
        });
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors du tri des articles par price" });
    }
}

export const getByDesc = async (req, res) => {
    try {
        const articles = await Article.findAll({
            order: [
                ["price", 'DESC']
            ]
        });
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors du tri des articles par price" });
    }
}

export const getByUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { include: "articles" });
        res.status(200).json(user.articles);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Erreur." });
    }
}

export const getReview = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id, { include: "reviews" });
        res.status(200).json(article.reviews);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
