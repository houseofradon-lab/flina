export class EC {

  static calcCurrentEmotion(emotionArr) {

    var emotionObject = emotionArr.reduce(function(init, arr, index) {
      if (init[arr.emotion]) {
        init[arr.emotion].count++;
        init[arr.emotion].average += arr.value;
      } else {
        init[arr.emotion] = {
          count: 0,
          average: 0,
          emotion: arr.emotion
        };
      }
      return init
    }, {});

    var mostHits = Object.keys(emotionObject).map(function(key) {
      return emotionObject[key];
    }).sort(function(a, b) {
      return a.count - b.count;
    })[0]

    return {
      value: mostHits.average / mostHits.count,
      emotion: mostHits.emotion
    }
  }

  static checkCurrentEmotion(er) {

    er.sort(function(a, b) {
      return b.value - a.value;
    });

    return er[0];

  }

}
