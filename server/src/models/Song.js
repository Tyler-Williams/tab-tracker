module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    alblum: DataTypes.STRING,
    alblumImageUrl: DataTypes.STRING,
    youTubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })

  Song.associate = function (models) {
  }

  return Song
}
