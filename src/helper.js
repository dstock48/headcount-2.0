import kinderData from '../data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
  constructor(kinderData) {
    this.data = kinderData.reduce((acc, item) => {
      if (!acc[item.Location]) {
        acc[item.Location] = Object.keys(item).reduce((acc, node) => {
          if (!acc[node.TimeFrame]) {
            acc[node.TimeFrame] = item.TimeFrame
          }
          return acc;
        },{})
      }
      return acc
    },{})
    console.log(this.data);
  }

}
