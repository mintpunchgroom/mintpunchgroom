function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets/images", false, /\.(png|jpg)$/)
);

export default images;
