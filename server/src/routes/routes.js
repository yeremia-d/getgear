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

// Gets a number of signouts
// Accepts query string of with fields: 'page' and 'limit'
router.route('/signouts').get(signouts.getMany);

// Gets a single record with id
router.route('/signouts/:id').get(signouts.getOne);

// Creates a new signout
router.route('/signouts').post(signouts.create);

// Updates a signout with id
router.route('/signouts/:id').put(signouts.update);

// Deletes a signout with id
router.route('/signouts/:id').delete(signouts.delete);

// ======================== Routes for catalog items ======================== //

// Gets a number of catalog items
// Accepts query string of with fields: 'page' and 'limit'
router.route('/catalog').get(catalog.getMany);

// Gets a single catalog item with id
router.route('/catalog/:id').get(catalog.getOne);

// Creates a new catalog item
router.route('/catalog').post(catalog.create);

// Updates a catalog item
router.route('/catalog/:id').put(catalog.update);

// Deletes a catalog item
router.route('catalog/:id').delete(catalog.delete);


export default router;
