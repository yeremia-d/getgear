
import Controller from './base.controller';
/**
 * Signout controller that provides controller functionality
 * for the REST calls for the Signouts API
 */
class SignoutController extends Controller {
  /**
   * Constructor for the Signout Controller.
   * @param {Object} model is the Signout model
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
  async create(req, res) {}

  /**
   * Function that updates a record based with the id specified in the
   * request parameter 'id'
   * @param {Object} req is the request object
   * @param {Object} res is the response object
   */
  async update(req, res) {}
}


export default SignoutController;
