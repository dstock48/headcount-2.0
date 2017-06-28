
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
      const roundedData = () => {
        if (typeof item.data === 'number') {
        return Math.round(item.data * 1000) / 1000
      } else {
        return 0
      }
    }
      if (!acc[item.location]) {
        acc[item.location] = {
          location: item.location,
          data: {[item.timeFrame]: roundedData()}
        }

          return acc
      } else {
        acc[item.location].data = Object.assign(acc[item.location].data, {
          [item.timeFrame]: roundedData()
        })
      }
      return acc
    },{})
  }

  findByName(searchTerm) {
    if (arguments.length === 0) return undefined

    let searchTermLower = searchTerm.toLowerCase()
    let location = Object.keys(this.data).find(element => {
      return element.toLowerCase() === searchTermLower
    })
    return this.data[location]
  }

  findAllMatches(searchTerm) {
    let dataKeys = Object.keys(this.data)
    const result = dataKeys.reduce((acc, key) => {

      if (arguments.length === 0) {
        acc.push(this.data[key])
      } else if (key.toLowerCase().split(' ').includes(searchTerm.toLowerCase())) {
        acc.push(this.data[key])
      }
      return acc
    },[])

    return result
  }

  findAverage(selection) {
    selection = this.findByName(selection).location
    const keys = Object.keys(this.data[selection].data)
    const sum = keys.reduce((accu, element) => {
      let yearData = parseFloat(this.data[selection].data[element])
      return accu + yearData
    }, 0)
    return Math.round(sum/keys.length*1000)/1000
  }

  compareDistrictAverages(selection1, selection2) {
    const average1 = this.findAverage(selection1)
    const average2 = this.findAverage(selection2)
    const location1 = this.findByName(selection1).location
    const location2 = this.findByName(selection2).location
    const obj = {}
console.log(location1, location2)
    const compare = Math.round((average1 / average2) * 1000)/1000

    obj[location1] = average1;
    obj[location2] = average2;
    obj.compared = compare

    return obj;
  }

}
