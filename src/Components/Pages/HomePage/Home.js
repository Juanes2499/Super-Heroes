import React, {Component } from 'react';
import Navbar from "../../Elements/Navbar/Navbar";
import Portada from '../../Elements/Portada/Portada'
import './Home.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const options = [
    {
        Id:1,
        Productor: "Marvel",
        NombrePelicula: "Ironman",
        Reseña: "Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo que en su ciudad.",
        LinkInformacion: 'https://es.wikipedia.org/wiki/Iron_Man_(pel%C3%ADcula)',
        RutaImgPortada: 'https://images.clarin.com/1969/12/31/robert-downey-jr-ejercio-los___H1xylv8RXg_1256x620__1.jpg',
        RutaImgRecuadro: 'https://holatelcel.com/wp-content/uploads/2019/04/Principal-2.png',
        VotosPositivo: 800,
        VotosNegaivos: 500,
        Portada: false,
        Recuadro: true,
        EstiloRecuadoPortada: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '60%',
	        width: '30%'
        },
    }, 
    {
        Id:2,
        Productor: "DC",
        NombrePelicula: "Superman",
        Reseña: "Superman es un superhéroe ficticio, que apareció por primera vez en los cómics estadounidenses publicados por DC Comics.",
        LinkInformacion: 'https://es.wikipedia.org/wiki/Superman',
        RutaImgPortada: 'https://hipertextual.com/files/2020/06/hipertextual-henry-hamill-con-traje-batman-artista-imagina-actor-papel-imposible-2020506264.jpg',
        RutaImgRecuadro: 'https://i1.wp.com/wipy.tv/wp-content/uploads/2019/10/significado-de-la-S-de-superman-1.jpg?fit=1000%2C600&ssl=1',
        VotosPositivo: 15,
        VotosNegaivos: 5,
        Portada: true,
        Recuadro: false,
        EstiloRecuadoPortada: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '62%',
	        width: '30%'
        },
    }, 
    {
        Id:3,
        Productor: "Marvel",
        NombrePelicula: "Spiderman",
        Reseña: "Spider-Man es un superhéroe ficticio creado por los escritores y editores Stan Lee y Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy # 15",
        LinkInformacion: 'https://es.wikipedia.org/wiki/Spider-Man',
        RutaImgPortada: 'https://poptv.orange.es/wp-content/uploads/sites/3/2020/08/spider-man-portada.jpg',
        RutaImgRecuadro: 'https://img.redbull.com/images/c_crop,x_1039,y_0,h_1028,w_822/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2018/09/12/a9f6c786-7986-4e1d-9d64-66c456ca94b9/spiderman-telarana',
        VotosPositivo: 50,
        VotosNegaivos: 10,
        Portada: false,
        Recuadro: true,
        EstiloRecuadoPortada: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '70%',
	        width: '30%'
        },
    }, 
    {
        Id:4,
        Productor: "DC",
        NombrePelicula: "Batman",
        Reseña: "Batman es un personaje y gran heroe creado por Bob Kane y Bill Finger, participe de muchas batallas.",
        LinkInformacion: 'https://es.wikipedia.org/wiki/Batman',
        RutaImgPortada: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/06/batman-michael-keaton-1972809.jpeg',
        RutaImgRecuadro: 'https://goyoman.files.wordpress.com/2010/11/christian-bale.jpg',
        VotosPositivo: 80,
        VotosNegaivos: 5,
        Portada: false,
        Recuadro: true,
        EstiloRecuadoPortada: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '62%',
	        width: '30%'
        },
    },
    {
        Id:5,
        Productor: "Marvel",
        NombrePelicula: "Thor",
        Reseña: "El codicioso guerrero Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Allí, sin sus poderes, Thor deberá enfrentarse.",
        LinkInformacion: 'https://es.wikipedia.org/wiki/Thor_(pel%C3%ADcula)',
        RutaImgPortada: 'https://hipertextual.com/files/2019/07/hipertextual-habra-thor-4-taika-waititi-volvera-director-2019412531.jpg',
        RutaImgRecuadro: 'https://i.pinimg.com/736x/28/6c/7a/286c7a7126af219fe5850ac30c49cbcb.jpg',
        VotosPositivo: 150,
        VotosNegaivos: 25,
        Portada: false,
        Recuadro: true,
        EstiloRecuadoPortada: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '69%',
	        width: '30%'
        },
    }, 
];
class Home extends Component{

    state = {
        idPortada: 0,
    };

    componentDidMount = () => {        
        options.filter(x => x.Portada === true).forEach( i => {
            this.setState({idPortada: i.Id - 1})
        })
    }
    
    handleChangeAgendarCita(event) {
        const {name, value } = event.target
        this.setState({[name]: value })
        console.log(this.state);
    }

    componentWillUnmount = (id) => {
        console.log(id)
        this.setState({idPortada: id - 1})
    }

    render(){        
        return(
            <div className="w-100 o-container-info-api h-100 m-0 p-0">
                <Navbar />

                <Portada 
                    Productor={options[this.state.idPortada].Productor}
                    NombrePelicula={options[this.state.idPortada].NombrePelicula}
                    Reseña = {options[this.state.idPortada].Reseña}
                    LinkInformacion = {options[this.state.idPortada].LinkInformacion} 
                    RutaImgPortada = {options[this.state.idPortada].RutaImgPortada}
                    VotosPositivo = {options[this.state.idPortada].VotosPositivo}
                    VotosNegaivos = {options[this.state.idPortada].VotosNegaivos}
                    Portada = {options[this.state.idPortada].Portada}
                    Recuadro = {options[this.state.idPortada].Recuadro} 
                    EstiloRecuadoPortada = {options[this.state.idPortada].EstiloRecuadoPortada}
                />

                <div className='container'>
                    <h1 className='TituloHeroes'>Super heroes anteriores</h1>
                    <div>
                        <GridList cellHeight={500}  cols={2}>
                            {options.filter(x => x.Recuadro === true).map((i, index)=> (
                                <GridListTile key={i.Id} cols={1}>
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={i.RutaImgRecuadro} alt={i.NombrePelicula} />
                                        <Card.ImgOverlay style={{marginTop:'50%'}}>
                                            <Card.Title>{i.NombrePelicula}</Card.Title>
                                            <Card.Text>{i.Reseña}</Card.Text>
                                            <button className='boton-verDetalles-transparente' onClick={() => this.componentWillUnmount(i.Id)}>Ver detalles</button>
                                        </Card.ImgOverlay>
                                    </Card>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>

                <div className='container'>
                    <br/>
                    <hr/>
                    <br/>
                </div>

                <div className='container'>
                   <Row xs={2} md={4} lg={5}>
                       <Col>
                            <a className="LinksFooter" href="/Home">Terminos y condiciones</a>
                       </Col>
                       <Col>
                            <a className="LinksFooter" href="/Home">Política de tratamiento de datos</a>
                       </Col>
                       <Col>
                            <a className="LinksFooter" href="/Home">Contactenos</a>
                       </Col>
                       <Col> 
                            <Row >
                                <Col>
                                    <FacebookIcon/>
                                </Col>
                                <Col>
                                    <InstagramIcon/>
                                </Col>
                                <Col>
                                    <TwitterIcon/>
                                </Col>
                            </Row>
                       </Col>
                   </Row>
                </div>

                <div className='container'>
                    <br/>
                    <hr/>
                    <br/>
                </div>

            </div>
        )
    }
}


export default Home;
