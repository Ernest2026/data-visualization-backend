module.exports = (data) => {
  const addStats = (name, value) =>
    value && (stats[name][value] = ++stats[name][value] || 1);
  const count = data.length;
  const stats = {
    sector: {},
    country: {},
    region: {},
    relevance: {},
    likelihood: {},
    intensity: {},
    topic: {},
    pestle: {},
    source: {},
    end_year: {},
    start_year: {},
  };
  data.map((obj) => {
    addStats("sector", obj.sector);
    addStats("country", obj.country);
    addStats("region", obj.region);
    addStats("relevance", obj.relevance);
    addStats("likelihood", obj.likelihood);
    addStats("intensity", obj.intensity);
    addStats("topic", obj.topic);
    addStats("pestle", obj.pestle);
    addStats("source", obj.source);
    addStats("end_year", obj.end_year);
    addStats("start_year", obj.start_year);
  });
  return { stats, count };
};
