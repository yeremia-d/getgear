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

    // Try to make the query. If successful, the result
    // will be returned in the response.
    try {
      const data = await ((page, limit) => {
        return this._model
            .find()
            .skip((page * limit) - limit)
            .limit(limit);
      })(queryPage, queryLimit);

      // Get the total number of records
      const numTotalRecords = await this._model.count();

      // Send a resonse with the data back if
      // the query is successful
      res.status(200).json({
        'status': 'Success',
        'details': 'Query made',
        'data': {
          'meta': {
            'numRecordsReturned': data.length,
            'numTotalRecords': numTotalRecords,
            // eslint-disable-next-line max-len
            'recordsFrom': data.length == 0 ? 0 : ((queryPage * queryLimit) - queryLimit) + 1,
            'recordsTo': data.length == 0 ? 0 : queryPage * queryLimit,
          },
          'items': data,
        },
      });
    } catch (err) {
      // Otherwise send a status code of 400 with the error.
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
   * @param {Object} res is the response object
   */
  async getOne(req, res) {
    // Make a query to the database to find the item by the
    // specified ID
    try {
      const data = await this._model.findById(req.params.id);

      // Handle the case where there is no data returned
      // from the query. aka: no records match that ID.
      if (!data) {
        res.status(401).json({
          'status': 'Error',
          'details': 'Record with ID not found',
          'data': null,
        });
      } else {
        // Otherwise, send a status code of 200 and the data
        res.status(200).json({
          'status': 'Success',
          'details': 'Record found',
          'data': data,
        });
      }
    } catch (err) {
      // Catch the error if one is thown and send a status code
      // of 400 with the appropriate data.
      res.status(400).json({
        'status': 'error',
        'details': err,
        'data': null,
      });
    }
  }

  /**
   * Function that creates a new record based on the body
   * of the request object
   * @param {Object} req is the request object
   * @param {Object} res is the response object
   */
  async create(req, res) {
    // Create a new model with the request body data
    const data = new this._model(req.body);

    // Try to save it (to the db).
    try {
      await data.save();

      // Send a 201 response if successful
      res.status(201).json({
        'status': 'Success',
        'details': 'Record created',
        'data': req.body,
      });
    } catch (err) {
      // Otherwise catch the error and send a 400 response
      res.status(400).json({
        'status': 'Error',
        'details': err,
        'data': req.body,
      });
    }
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
