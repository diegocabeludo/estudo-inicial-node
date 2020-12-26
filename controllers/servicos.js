const Servico = require('../models/servicos')

module.exports = app => {
    app.get('/servicos', (req, res) => res.send('Atualmente você está na rota Get de serviços'))

    app.post('/servicos', (req, res) => {
        const servico = req.body

        console.log(servico)

        Servico.adiciona(servico)
        
        res.send('\nVocê está no post Serviços');
    })

    app.put('/servicos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        valores = req.body
        Servico.updateById(id, valores, res)
    })
}