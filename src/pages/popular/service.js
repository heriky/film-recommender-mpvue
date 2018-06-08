/**
 * Created by hankang on 2018/6/6
 */
import fetch from 'fetch';

class Service {
  async fetchPopular(params) {
    const res = await fetch.get('/v2/movie/in_theaters', params);
    return this.popularHandler(res.data);
  }

  popularHandler(rawData) {
    const rawSubjects = rawData.subjects;
    return rawSubjects.map(item => ({
      id: item.id,
      faceUrl: item.images.medium,
      point: item.rating.average,
      title: item.title,
      tags: item.genres
    }));
  }


}

const service = new Service();

export default service;
