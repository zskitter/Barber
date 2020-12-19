const { response } = require('express');
const connection = require('../connection');

module.exports = {

   async create( request, response ) {
        const {
            Email,
            Nome,
            Senha
        } = request.body;

        const valEmail = await connection( 'usuarios' )
        .select( 'email' ).from( 'usuarios' ).where( 'email' , Email )
        
        if( valEmail.length >= 1 ) {
            const emailExist =  valEmail[0].email === Email ? false : true 
            console.log(request.body)

            if( !emailExist ){
                return response.json( false )
            }
                else {
                    await connection( 'usuarios' )
                    .from( 'usuarios' )
                    .insert({
                            Email,
                            Nome,
                            Senha
                        })

                    return response.json( true );;
                    }
        }
        else{
            await connection( 'usuarios' )
            .from( 'usuarios' )
            .insert({
                Email,
                Nome,
                Senha
            })
            return response.json( true );;
        }


    },
    async alter( request, response ) {
        const {
            Nome,
            Email,
            Senha
        } = request.body;

        const update = await connection( 'usuarios' )
        .where( `Email` , `${ Email }` )
        .update({
                Nome,
                Senha,
                Email
        })
        return response.json({ update })
        
    },
    async deleteUser( request, response ) {
        const delet = await connection( 'usuarios' )
                     .where( 'Email' , `${ request.body.Email }`)
                     .del()
        return response.json( delet )

    },

    async validation( request, response ) {
        const val = await 
        connection( 'usuarios' )
        .select( 'email','senha' )
        .where( 'email' , `${request.body.Email}` )

        try{
            if( val.length >= 1 ) {
                return response.json( val[0].senha === request.body.Senha ? true: false )
            }
            else{
                return response.json( false )
            }
        }

        catch {
            new error( error )
        }
    }
}
