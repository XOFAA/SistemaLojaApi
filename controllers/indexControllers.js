const {Produto,Categoria} = require('../models')

class indexControllers{

    static async listarCategoria (req,res){
        try {
            const categorias = await Categoria.findAll({include:'produtos'})

          
                res.status(200).json({
                    data:categorias
                })
            
          
            
        } catch (error) {
            res.status(500).json({
                error:true,
                message:error.message
            })
        }
}
static async cadastrarCategoria (req,res){
    try {
        await Categoria.create({
            descricao:req.body.categoria
        })
        
    res.status(200).json({
        message:'categoria cadastrada com sucesso'
    })
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}
static async atualizarCategoria(req,res){
    try {

        const categorias = await Categoria.findByPk(req.params.id)

        if(!categorias){
            res.status(400).json({
                message:"Categoria não encotrada"
            })
        }else{
            categorias.update({
                descricao:req.body.categoria
            })
            res.status(200).json({
                message:"Categoria atualizada com sucesso"
            })
        }
        
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}
static async deletarCategoria(req,res){
    try {
       
        const categorias = await Categoria.findByPk(req.params.id)
        categorias.destroy()
        res.status(200).json({
            message:"Categoria deletada com sucesso"
        })
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}

static async listarProdutos(req,res){
    try {
        const produtos= await Produto.findAll()
        res.status(200).json({
            data:produtos
        })
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}

static async cadastrarProduto(req,res){
    try {
            await Produto.create({
                descricao:req.body.descricao,
                qtd:req.body.qtd,
                categoria:req.body.categoria
        
            })
       
       res.status(200).json({
        message:"Cadastro Feito com sucesso"
       })
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}

static async atualizarProduto(req,res){
    try {
        const produtos = await Produto.findByPk(req.params.id)
        if(!produtos){
            res.status(404).json({
                message:"Produto não encontrado"
            })
        }else{
            produtos.update({
                descricao:req.body.descricao,
                qtd:req.body.qtd,
                categoria:req.body.categoria
            })
            res.status(200).json({
                message:"Produto Atualizado com sucesso"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}
static async deletarProduto(req,res){
    try {
        const produtos = await Produto.findByPk(req.params.id)
        produtos.destroy()
        res.status(200).json({
            message:"produto deletado com sucesso"
        })
        
    } catch (error) {
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}
}

module.exports=indexControllers