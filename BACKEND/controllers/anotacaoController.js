//o controller é a ponte entre o model e o view
//view é onde o cliente interage, faz a solicitação para o model que para o controller e volta para o view

import Anotacao from "../models/anotacaoModel.js";

async function listar(req, res) {
    try {
    //o findAll é equivalente ao select * from tb_anotacao
    const anotacoes = await Anotacao.findAll() //consulta todas as anotações 
    //o await espera trazer todas as anotações
    
    res.status(200).json(anotacoes)
        
    } catch (error) {
        res.status(500).json({mensagem: "Erro inesperado: ", error });
    }
}
async function obterPorID(req, res) {
    const { id } = req.params 

    try {
    const anotacaoBuscada = await obterPorIDInterno(id)

    //se não for encontrada
    if (!anotacaoBuscada) {
        return res.status(204).json({mensagem: "Anotação não encontrada"})
    }
    res.status(200).json(anotacaoBuscada)
  
    } catch (error) {
        res.status(500).json({mensagem: "Erro inesperado", error})
    }
}
async function criar(req, res) {
    const {
        descricao,
        data_criacao,
        id_usuario,
    } = req.body

    try {
        let novaAnotacao = {
            descricao: descricao,
            data_criacao: data_criacao,
            finalizada: false
        }

        if (id_usuario != undefined) {
            //adiciona uma nova propriedade com o valor do id do usuário
            novaAnotacao.id_usuario = id_usuario            
        }

        const anotacaoCriada = await Anotacao.create(novaAnotacao)

        res.status(201).json({mensagem: "Anotação criada com sucesso", anotacaoCriada})
    } catch (error) {
        res.status(500).json({mensagem: "Erro inesperado", error})
    }
}
async function atualizar(req, res) {
    
}
async function deletar(req, res) {
    
}
async function obterPorIDInterno(id) {
    try {
    return await Anotacao.findByPk(id)
    } 
    catch (error) {
        return error;
    }
}

export default {listar, obterPorID, criar, atualizar, deletar};