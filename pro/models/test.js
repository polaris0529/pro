module.exports = (sequelize, DataTypes) => {
    return sequelize.define('test', { 
        Name: {
            type: DataTypes.STRING(20), // VARCHAR
            allowNULL: false,
            unique: true,
        }
    },{
        timestamps: false, // ture일 시 시퀄라이저는 createAt, updateAt 컬럼을 추가함.
    })
}