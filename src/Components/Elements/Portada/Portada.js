import React, { Component } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './Portada.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Portada extends Component {

    state = { 
        showBotonesVotar: true,
        showLike: false,
        showDislike: false,
        totalVotos: this.props.VotosPositivo + this.props.VotosNegaivos,
        VotosPositivos: 0,
        VotosNegativos: 0,
        porcentajePos: 0,
        PorcentajeNeg: 0
    };

    componentDidMount = () => {
        
        this.setState({VotosPositivos: this.props.VotosPositivo})
        this.setState({VotosNegativos: this.props.VotosNegaivos})

        let totalVotos = this.props.VotosPositivo + this.props.VotosNegaivos;
        let porcentajePositvo = parseInt((100*this.props.VotosPositivo)/totalVotos);
        let porcentajeNegativo = parseInt((100*this.props.VotosNegaivos)/totalVotos);

        if((porcentajeNegativo + porcentajePositvo) !== 100){
            porcentajeNegativo = porcentajeNegativo + 1
        }

        this.setState({porcentajePos: porcentajePositvo})
        this.setState({PorcentajeNeg: porcentajeNegativo})
    }

    handleVolverVotar= () => {
        this.setState({showBotonesVotar: true})
        this.setState({ showLike: false });
        this.setState({ showDislike: false });
    };
    
    handleChangeLike= () => {
        this.setState({showBotonesVotar: false})
        this.setState({ showLike: true });

        let totalVotos = this.state.VotosPositivos + this.state.VotosNegativos;
        let porcentajePositvo = parseInt((100*this.state.VotosPositivos)/totalVotos);
        let porcentajeNegativo = parseInt((100*this.state.VotosNegativos)/totalVotos);

        if((porcentajeNegativo + porcentajePositvo) !== 100){
            porcentajeNegativo = porcentajeNegativo + 1
        }


        console.log('///////////////////////////////////////')
        console.log(porcentajeNegativo + porcentajePositvo)

        this.setState({VotosPositivos: this.state.VotosPositivos + 1})
        this.setState({porcentajePos: porcentajePositvo})
        this.setState({PorcentajeNeg: porcentajeNegativo})

        console.log(this.state.VotosPositivos)
        console.log(this.state.VotosNegativos)
    };

    handleChangeDislike= () => {
        this.setState({showBotonesVotar: false})
        this.setState({ showDislike: true });

        let totalVotos = this.state.VotosPositivos + this.state.VotosNegativos;
        let porcentajePositvo = parseInt((100*this.state.VotosPositivos)/totalVotos);
        let porcentajeNegativo = parseInt((100*this.state.VotosNegativos)/totalVotos);

        if((porcentajeNegativo + porcentajePositvo) !== 100){
            porcentajeNegativo = porcentajeNegativo + 1
        }

        console.log('***********************************************')
        console.log(porcentajeNegativo + porcentajePositvo)

        this.setState({VotosNegativos: this.state.VotosNegativos + 1})
        this.setState({PorcentajeNeg: porcentajeNegativo})
        this.setState({porcentajePos: porcentajePositvo})

        console.log(this.state.VotosPositivos)
        console.log(this.state.VotosNegativos)
    };

    render(){

        return(
            <div className="w-100 o-container-info-api">
                <div>
                    <div className="portada" style={{position: 'relative', left: 0, top: 0}}>
                        <img src={this.props.RutaImgPortada} className='portadaImagen'  alt="Portada"/>
                        <div>
                            <div className='portadaRecuadro' style={this.props.EstiloRecuadoPortada}>

                                <Row>
                                    <Col>
                                        <h2 className='portadaLetraProducto'>{this.props.Productor}</h2>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h1 className='portadaLetraNombrePelicula'>{this.props.NombrePelicula}</h1>
                                    </Col>
                                </Row>
                                

                                <span>
                                    {this.state.showLike ? (
                                        <div className="CuadroVotado">
                                            <div className='row'>
                                                <div className='col-sm-2'>
                                                    <div className='VotoLike'> 
                                                        <ThumbUpAltIcon style={{ fontSize: 80, color: 'white', margin:'10%'}}/>
                                                    </div>
                                                </div>
                                                <div className='col-sm-10'>
                                                    <h3 className='textoVotado'>Tu voto ha sido registrado</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div/>
                                    )}
                                </span>

                                <span>
                                    {this.state.showDislike ? (
                                        <div className="CuadroVotado">
                                            <div className='row'>
                                                <div className='col-sm-2'>
                                                    <div className='VotoDisLike'> 
                                                        <ThumbDownIcon style={{ fontSize: 80, color: 'white', margin:'10%'}}/>
                                                    </div>
                                                </div>
                                                <div className='col-sm-10'>
                                                    <h3 className='textoVotado'>Tu voto ha sido registrado</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div/>
                                    )}
                                </span>


                                {this.state.showBotonesVotar ? (
                                        <div>
                                            <div>
                                                <p className='portadaLetraReseña'>{this.props.Reseña}</p>
                                            </div>

                                            <div>
                                                <a className='portadaInformacion' href={this.props.LinkInformacion}>Para más información, click aquí</a>
                                            </div>

                                            <div className='portadaRecuadroBotones'>
                                                <button className='portadaVotoLike' onClick={() => this.handleChangeLike()}>
                                                    <ThumbUpAltIcon style={{ fontSize: 50, color: 'white'}}/>
                                                </button>
                                                <button className='portadaVotoDisLike' onClick={() => this.handleChangeDislike()}>
                                                    <ThumbDownIcon style={{ fontSize: 50, color: 'white'}}/>
                                                </button>
                                            </div>
                                        </div>
                                    ):(
                                        <div>
                                            <p className='portadaLetraReseñaVotado'>{this.props.Reseña}</p>

                                            <button className='boton-volverVotar-transparente' style={{marginTop:'0%'}} onClick={() => this.handleVolverVotar()}>
                                                Volver a votar
                                            </button>
                                        </div>
                                    )
                                }   
                            </div>
                        </div>
                            
                        <button className='portadaBarraVotosLike' style={{width: `${this.state.porcentajePos}%`}} disabled={true}>
                            <div className='row'>
                                <div>
                                    <ThumbUpAltIcon style={{ fontSize: 70, color: 'white', paddingLeft: '50%'}}/>
                                </div>
                                <div>
                                    <h1 className='PortadaNumeroVotosBarra'>{this.state.porcentajePos}%</h1>
                                </div>
                            </div>
                        </button>

                        <button className='portadaBarraVotosDisLike' style={{width: `${this.state.PorcentajeNeg}%`}} disabled={true}>
                            <div className='row'>
                                <div>
                                    <ThumbDownIcon style={{ fontSize: 70, color: 'white', paddingLeft: '50%'}}/>
                                </div>
                                <div>
                                    <h1 className='PortadaNumeroVotosBarra'>{this.state.PorcentajeNeg}%</h1>
                                </div>
                            </div>
                        </button>     
                    </div>
                </div>
            </div>
        )
    }
}

export default Portada;


