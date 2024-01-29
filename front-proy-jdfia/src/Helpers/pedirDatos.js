import solicitudes from '../Data/Solicitudes.json'
import agendas from '../Data/Agendas.json'
import acuerdos from '../Data/Acuerdos.json'

export const pedirSolicitudes= () => {

return new Promise ((resolve, reject) =>{
    setTimeout(() => {
        resolve(solicitudes);
    }, 500)
})
}

export const pedirAgendas= () => {

    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(agendas);
        }, 500)
    })
    }

    export const pedirAcuerdos= () => {

        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                resolve(acuerdos);
            }, 500)
        })
        }