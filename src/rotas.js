import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';

function Rotas() {
    
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;