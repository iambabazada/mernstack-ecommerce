class ProductFilters {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({ ...keyword })
        return this;
    }

    filter() {
        const queryFilter = { ...this.queryStr }
        const deleteArea = ["keyword", "page", "limit"]
        deleteArea.forEach((item) => delete queryFilter[item])

        let queryStr = JSON.stringify(queryFilter)
        queryStr = queryStr.replace(/\b(gt| gte| lt| lte)\b/g, key => `$${key}`)

        this.query = this.query.find(JSON.parse(queryStr))
        return this

    }
}

module.exports = ProductFilters;