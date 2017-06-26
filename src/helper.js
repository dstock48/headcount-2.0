
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
      if (!acc[item.location]) {
        acc[item.location] = [item]
      } else {
        acc[item.location] = [...acc[item.location], item]
      }
      return acc
    },{})
    console.log(this.data);
  }

}
