import React from 'react'
import './App.css';

class Product extends React.Component {

    state = { 
        images: [
            'https://media.newstracklive.com/uploads/other-news/religious-news/Dec/07/big_thumb/fsffffffffs_5deb543a9af32.jpg'
        ],
        
        form: {
            userName: '',
            password: '',
        },
        
        data: [
            {
                id: '2de30c',
                firstName: 'Lola',
                lastName: 'Mora',
                email: 'lola.com',
                Debt: '$100' 
            },
            {
                id: '3je20A',
                firstName: 'Pepe',
                lastName: 'Coco',
                email: 'pepe.com',
                Debt: '$250' 
            },
            {
                id: '1kz24y',
                firstName: 'Hugo',
                lastName: 'Zamoa',
                email: 'ugo.com',
                Debt: '$550' 
            }
        ]
    };

    handleChange = e => {
/*         this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                // nextForm,
            },
        }); */
        console.log({
            type: "ResultForm",
            name: e.target.name,
            value: e.target.value,           
        });
    };

    handleClick = e => {
        console.log('Button was clicked');
        this.setState({images: [
            'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png'
        ],});
    };

    // shouldComponentUpdate() {
    //     console.log('Dejo de Renderear RF')
    //     return false;
    // }
    
    render() {
        return (        
            <div>
                <h2>HOLA!</h2>
                {/* <LogIn 
                    onChange={this.handleChange}
                    userName={this.state.form.userName}
                    password={this.state.form.password}/> */}
                {/* <ClientList info={this.state.data}/> */}
                <button type="button"
                        onClick={this.handleClick}
                        // className="btn btn-primary"
                        >
                        Ingresar
                </button>
                <img className="imgMrx2" src={this.state.images[0]}
                    onMouseEnter={this.handleClick}
                    
                    onMouseOut={() => {
                        this.setState({
                            images: [
                                'https://media.newstracklive.com/uploads/other-news/religious-news/Dec/07/big_thumb/fsffffffffs_5deb543a9af32.jpg'
                            ],
                        })
                      }}>
                </img>
                <img className="imgMrx" src="https://b2b.e-quipajes.com/imagenes/archivos/2021-01/16522-d2020610-80_c.jpg" 
                    title="AMARILLO"
                    onClick={this.handleClick}
                    onHover="">                
                </img>
                <div class="box red"></div>
            </div>
        );
    }
}
  
export default Product;