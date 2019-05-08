
import Controller from './base.controller';

/**
 * Catalog controller class that provides a controller for REST calls to
 * the API.
 */
class CatalogController extends Controller {
  /**
   * constructor for the Catalog Controller.
   * @param {Object} model is the Catalog model
   */
  constructor(model) {
    super(model);
  }

  /**
   * Function that creates a new record based on the body
   * of the request object
   * @param {Object} req is the request object
   * @param {Object} res is the response object
   */
  async create(req, res) {
  }

  /**
   * Function that updates a record based with the id specified in the
   * request parameter 'id'
   * @param {Object} req is the request object
   * @param {Object} res is the response object
   */
  async update(req, res) {
  }
};


export default CatalogController;
