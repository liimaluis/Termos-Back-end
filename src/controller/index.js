const User = require('../model/index')
const cpfValidator = require('cpf-cnpj-validator').cpf;



const userController = {

    async creatUser(req, res) {

        const bodyData = req.body

        if (!cpfValidator.isValid(req.body.cpf)) {
            return res.status(400).json({ error: 'CPF inválido' });
          }
  

        try {
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf,
                cep: req.body.cep,
                telefone: req.body.telefone,
                termosprivacidade: req.body.termosprivacidade
            })
            return res.status(200).json(newUser)

        } catch(error){

            return res.status(400).json(error)

        }
    }}

module.exports = userController;