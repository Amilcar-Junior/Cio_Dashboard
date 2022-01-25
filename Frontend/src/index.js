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
import destinations                     from "./components/pages/destinations/Destinations";
import packages                         from "./components/pages/package/Packages";
import contact                          from "./components/pages/contact/Contact";
import faq                              from "./components/pages/faq/Faq";
import error                            from "./components/pages/404/404";
import guide                            from "./components/pages/guide/GuideComponent";
import gallary                          from "./components/pages/gallary/GalleryComponent";
import packageSidebar                   from "./components/pages/package/PackageSidebar";
import packageStandard                  from "./components/pages/package/PackageStanderd";
import packageDetails                   from "./components/pages/package/PackageDetails";
import blog                             from "./components/pages/blog/BlogComponent";
import blogSidebar                      from "./components/pages/blog/BlogSidebar";
import blogStandard                     from "./components/pages/blog/BlogStandard";
import blogDetails                      from "./components/pages/blog/BlogDetails";


//Initializations All Css
import './index.css';
import './index.scss';
import CaixaEconomica from "./components/pages/caixa-economica/CaixaEconomica";
import Hardware from "./components/pages/cio-hardware/Hardware";

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
                            <Route path={`${process.env.PUBLIC_URL}/destination`} component={destinations} />
                            <Route path={`${process.env.PUBLIC_URL}/package`} component={packages} />
                            <Route path={`${process.env.PUBLIC_URL}/package-sidebar`} component={packageSidebar} />
                            <Route path={`${process.env.PUBLIC_URL}/package-standard`} component={packageStandard} />
                            <Route path={`${process.env.PUBLIC_URL}/package-details`} component={packageDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/faq`} component={faq} />
                            <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
                            <Route path={`${process.env.PUBLIC_URL}/guide`} component={guide} />
                            <Route path={`${process.env.PUBLIC_URL}/gallary`} component={gallary} />
                            <Route path={`${process.env.PUBLIC_URL}/blog`} component={blog} />
                            <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`} component={blogSidebar} />
                            <Route path={`${process.env.PUBLIC_URL}/blog-standard`} component={blogStandard} />
                            <Route path={`${process.env.PUBLIC_URL}/blog-details`} component={blogDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />
                            
                            
                            
                            <Route path={`${process.env.PUBLIC_URL}/caixa-economica`} component={CaixaEconomica} />

                            <Route path={`${process.env.PUBLIC_URL}/hardware`} component={Hardware} />


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

