import React                             from "react";
import ReactDOM                          from "react-dom";
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
//Image LightBox
import SimpleReactLightbox               from 'simple-react-lightbox'

//Layout default import from components.
import defaultLayout                    from "./components/layouts/main";

//Import wrapping layout
import Layout                           from "./components/app";

//Import all page from components
import aboutUs                          from "./components/pages/about-us/AboutUs";



//Initializations All Css
import './index.css';
import './index.scss';
import CaixaEconomica from "./components/pages/caixa-economica/CaixaEconomica";
import Hardware from "./components/pages/cio-hardware/Hardware";
import HardwareTeste from "./components/pages/cio-hardware/HardwareTeste";


/*
* Version : 0.1
* Event : Rendering all content to web.
* Actions: Define all routes and page.
* @return html
* */

class Root extends React.Component{
    render(){
        return(
            <BrowserRouter basename={"/"}>
                    <Switch>
                        <Route exact path='/' component={defaultLayout} /> 
                        <Layout>
                            <Route path={`${process.env.PUBLIC_URL}/info`} component={aboutUs} />
                        
                            
                            
                            
                            <Route path={`${process.env.PUBLIC_URL}/caixa-economica`} component={CaixaEconomica} />

                            <Route path={`${process.env.PUBLIC_URL}/hardware`} component={Hardware} />

                            
                            <Route path={`${process.env.PUBLIC_URL}/hardware-teste`} component={HardwareTeste} />

                            
                        </Layout>
                    </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Provider store={store}>
                <Root />
                <ToastContainer />
            </Provider>
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);

