module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define(
    "admin",
    {
      login: { allowNull: false, type: DataTypes.STRING },
      password: { allowNull: false, type: DataTypes.STRING }
    },
    {}
  );
  admin.associate = function() {
    // associations can be defined here
  };
  return admin;
};
