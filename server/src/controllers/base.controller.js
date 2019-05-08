/**
 * Base controller class that other controllers can
 * extend
 */
class Controller {
  /**
   * constructor for the Catalog Controller.
   * @param {Object} model is the Catalog model
   */
  constructor(model) {
    this._model = model;

    // Bind class functions to this class
    this.getMany = this.getMany.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * Function that handles the endpoint that retrieves multiple records
   * @param {Object} req is the request object
   * @param {Object} res is the response object that is returned
   */
  async getMany(req, res) {
    const {page, limit} = req.query;

    // Validate the values for page and limit
    const queryPage =
        (page === undefined) || (parseInt(page, 10) <= 0) ? 10 : page;

    const queryLimit =
        (limit === undefined) || (parseInt(limit, 10) <= 0) ? 1 : limit;

    try {
      const data = await ((page, limit) => {
        return this._model
            .find()
            .skip((page * limit) - limit)
            .limit(limit);
      })(queryPage, queryLimit);

      const numTotalRecords = await this._model.count();

      res.status(200).json({
        'status': 'Success',
        'details': 'Query made',
        'data': {
          'meta': {
            'numRecordsReturned': data.length,
            'numTotalRecords': numTotalRecords,
            'recordsFrom': ((queryPage * queryLimit) - queryLimit) + 1,
            'recordsTo': queryPage * queryLimit,
          },
          'items': data,
        },
      });
    } catch (err) {
      res.status(400).json({
        'status': 'Error',
        'details': err,
        'data': null,
      });
    }
  }

  /**
   * Function that retrieves a single record based on
   * the url request parameter 'id'
   * @param {Object} req is the request object
   * @param {*} res is the response object
   */
  async getOne(req, res) {
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

  /**
   * Function that deletes a record with the id specified in the
   * request parameter 'id'
   * @param {Object} req is the request object
   * @param {Object} res is the response object
   */
  async delete(req, res) {
  }
};

export default Controller;
