// Import the router
import {Router} from 'express';

// Import the catalog and signout controllers
import CatalogController from '../controllers/catalog.controller';
import SignoutController from '../controllers/signouts.controller';

// Import the catalog and signout models
import CatalogModel from '../models/catalogItem.model';
import SignoutModel from '../models/signout.model';

// Create new router
const router = new Router();

// Creates new instances of the catalog controller and signout controller
const catalog = new CatalogController(CatalogModel);
const signouts = new SignoutController(SignoutModel);

// ========================== Routes for signouts ========================== //

// Accepts query string of with fields: 'page', 'limit', 'orderby' and 'order'
router
    .route(`/${process.env.API_SIGNOUTS_ENDPOINT}`)
    .get(signouts.getMany);

router
    .route(`/${process.env.API_SIGNOUTS_ENDPOINT}/:id`)
    .get(signouts.getOne);

router
    .route(`/${process.env.API_SIGNOUTS_ENDPOINT}`)
    .post(signouts.create);

router
    .route(`/${process.env.API_SIGNOUTS_ENDPOINT}:id`)
    .put(signouts.update);

router
    .route(`/${process.env.API_SIGNOUTS_ENDPOINT}:id`)
    .delete(signouts.delete);

// ======================== Routes for catalog items ======================== //

// Accepts query string of with fields: 'page', 'limit', 'orderby' and 'order'
router
    .route(`/${process.env.API_CATALOG_ENDPOINT}`)
    .get(catalog.getMany);

router
    .route(`/${process.env.API_CATALOG_ENDPOINT}/:id`)
    .get(catalog.getOne);

router
    .route(`/${process.env.API_CATALOG_ENDPOINT}`)
    .post(catalog.create);

router
    .route(`/${process.env.API_CATALOG_ENDPOINT}/:id`)
    .put(catalog.update);

router
    .route(`/${process.env.API_CATALOG_ENDPOINT}/:id`)
    .delete(catalog.delete);


export default router;
