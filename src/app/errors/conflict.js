class Conflict extends Error {
  constructor(field) {
    super();
    this.name = 'Conflict';
    this.status = 409;
    this.message = [
      {
        message: this.name,
        details: [{ message: `Your ${field} already exist` }]
      }
    ];
  }
}

module.exports = Conflict;
