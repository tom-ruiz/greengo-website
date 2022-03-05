import React from 'react';

function NotFoundPage(){
    return(
        <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block mb-4">404</span>
                        <div className="mb-4 lead">La page que vous cherchez n'existe pas :(</div>
                        <a href="/" className="btn btn-link">Revenir à l'accueil</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;
