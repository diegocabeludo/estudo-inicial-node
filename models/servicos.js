const conexao = require('../infraestrutura/conexao')

class Servico { 
    adiciona(servico) {
        const sql = 'INSERT INTO servicos SET ?'

        conexao.query(sql, servico, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    updateById(id, servico, res) {
        const sql = 'UPDATE servicos SET ? WHERE id = ?'
        conexao.query(sql, [servico, id], (erro, resultados) => {
            if (erro) {
                res.staus(400).json(erro)
            } else {
                res.status(200).json({...servico, id})
            }
        })
    }
}

module.exports = new Servico