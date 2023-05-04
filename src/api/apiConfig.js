const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '79e8c31dce34dc5b12b274ed8e4e7aae',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
