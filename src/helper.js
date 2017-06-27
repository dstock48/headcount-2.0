
export default class DistrictRepository {
  constructor(kinderData) {
    this.normalizedData = kinderData.map(item => {
      let itemKeys = Object.keys(item)
      let lowerItemKeys = itemKeys.reduce((accu, element) => {
        let elementArray = element.split('');
        elementArray[0] = elementArray[0].toLowerCase()
        accu[elementArray.join('')] = item[element]
        return accu
      }, {})
      return lowerItemKeys
    })

    this.data = this.normalizedData.reduce((acc, item) => {
      // console.log(item);
      if (!acc[item.location]) {
        acc[item.location] = Object.keys(item).reduce((acc, item2) => {
          acc.location = item.location
          acc.data = {
            [item.timeFrame]: item.data
          }

          return acc
        },{})
      } else {
        acc[item.location].data = Object.assign(acc[item.location].data, {
          [item.timeFrame]: item.data
        })
      }
      return acc
    },{})
    console.log(this.data);
  }


  findByName(searchTerm) {
    if (arguments.length === 0) return undefined

    let searchTermLower = searchTerm.toLowerCase()
    let location = Object.keys(this.data).find(el => {
      return el.toLowerCase() === searchTermLower
    })

    // if (!keys.includes(searchTermLower)) return undefined

    return this.data[location]

  }

}
