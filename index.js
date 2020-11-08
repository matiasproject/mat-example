
var quotes = [
  "A palabras necias, oídos sordos",
  "Ojos que no ven, corazón que no siente",
  "Perro ladrador, poco mordedor",
  "Quien ríe último ríe mejor",
  "A caballo regalado no se le miran los dientes",
  "Mucho ruido y pocas nueces",
  "A cada cerdo le llega su San Martín",
  "Nunca digas de este agua no beberé",
  "Quien mucho abarca, poco aprieta",
  "En boca cerrada no entran moscas"
];

/**
 * Gets a random Piñera Quote
 * @returns {string}
 */
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
  randomQuote
};