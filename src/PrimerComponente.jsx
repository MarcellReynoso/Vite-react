import PropTypes from 'prop-types'

export const PrimerComponente = ({titulo,subtitulo}) => {
    /* console.log(titulo) */
    /* console.log(subtitulo) */
    return (
        <>
            <h1>Props: {titulo} </h1>
            <h2>{subtitulo+2}</h2>
        </>
    )
}

PrimerComponente.PropTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired
}