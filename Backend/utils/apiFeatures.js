class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // search() {
  //   let keyword = this.queryStr.keyword
  //     ? {
  //         bikename: {
  //           $regex: this.queryStr.keyword,
  //           $options: "i",
  //         },

  //         bikebrand: {
  //           $regex: this.queryStr.keyword,
  //           $options: "i",
  //         },
  //       }
  //     : {};

  //   this.query.find({ ...keyword });
  //   return this;
  // }
  search() {
    let keyword = this.queryStr.keyword;
    let query = {};

    if (keyword) {
      query.$or = [
        { bikename: { $regex: keyword, $options: "i" } },
        { bikebrand: { $regex: keyword, $options: "i" } },
      ];
    }

    this.query.find(query); // Use 'query' instead of 'keyword' as the search criteria
    return this;
  }

  filter() {
    const queryStrcopy = { ...this.queryStr };
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((field) => delete queryStrcopy[field]);

    let queryStr = JSON.stringify(queryStrcopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));
    return this;
  }

  paginate(resPerpage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerpage * (currentPage - 1);
    this.query.limit(resPerpage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
