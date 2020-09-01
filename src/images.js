function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets/images", false, /\.(png|jpe?g)$/)
);

export default images;
